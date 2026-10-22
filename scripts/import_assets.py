"""Copy approved media from the research folders into the site.

Only files listed in assets.manifest.json are ever copied. Research folders hold
emails, vendor quotes, internal recipes and unpublished data, so nothing is
pulled in by folder or wildcard.

Usage (from the site folder):
    python scripts/import_assets.py            # import everything in the manifest
    python scripts/import_assets.py poster     # only entries whose "to" contains "poster"

Kinds:
    copy         byte-for-byte copy (PDFs)
    zip_member   extract one approved member from a ZIP or PowerPoint archive
    pdf_image    extract one original embedded figure from a specified PDF page
    sequence_video  replay an approved numbered image sequence as H.264
    image        resize (and optionally crop) a raster image, saved as JPG or PNG by extension
    lineart      faint CAD line art: darken and thicken the lines, then resize
    svg          copy an SVG with exact text replacements; every replacement must match
    pdf_preview  render page 1 of a PDF to an image (needs PyMuPDF)
    video        re-encode to a small, muted, web-friendly H.264 MP4 (needs ffmpeg)
"""

import json
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree

from PIL import Image, ImageFilter, ImageOps

SITE = Path(__file__).resolve().parent.parent
MANIFEST = SITE / "assets.manifest.json"

BANNED_IN_SVG = ["—", "EWOD"]  # em-dash, and the term the site never uses


def find_ffmpeg(configured: str | None) -> str:
    for candidate in (configured, shutil.which("ffmpeg")):
        if candidate and Path(candidate).exists():
            return candidate
    try:
        import imageio_ffmpeg  # type: ignore

        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        sys.exit("ffmpeg not found. Install it or set \"ffmpeg\" in assets.manifest.json.")


def resize(im: Image.Image, width: int | None) -> Image.Image:
    if width and im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    return im


def do_image(src: Path, dst: Path, a: dict) -> None:
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)
    if "crop" in a:
        w, h = a["crop"]
        y_frac = a.get("crop_y", 0.5)
        scale = max(w / im.width, h / im.height)
        im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
        left = (im.width - w) // 2
        top = round((im.height - h) * y_frac)
        im = im.crop((left, top, left + w, top + h))
    else:
        im = resize(im, a.get("width"))
    save(im, dst)


def do_lineart(src: Path, dst: Path, a: dict) -> None:
    im = Image.open(src).convert("L")
    # Pull faint grey lines toward black: 255 stays white, light grey becomes dark.
    gain = a.get("gain", 5)
    im = im.point(lambda v: max(0, 255 - (255 - v) * gain))
    im = im.filter(ImageFilter.MinFilter(a.get("thicken", 3)))
    im = resize(im, a.get("width"))
    ink = Image.new("RGB", im.size, tuple(a.get("ink", [22, 32, 42])))
    paper = Image.new("RGB", im.size, (255, 255, 255))
    save(Image.composite(paper, ink, im), dst)


def do_svg(src: Path, dst: Path, a: dict) -> None:
    text = src.read_text(encoding="utf-8")
    for old, new in a.get("replace", []):
        if old not in text:
            sys.exit(f"{src.name}: replacement text not found: {old!r}")
        text = text.replace(old, new)
    for bad in BANNED_IN_SVG:
        if bad in text:
            sys.exit(f"{src.name}: still contains {bad!r} after replacements")
    try:  # browsers refuse malformed SVG in <img>, even when Inkscape opens it
        ElementTree.fromstring(text.encode("utf-8"))
    except ElementTree.ParseError as e:
        sys.exit(f"{src.name}: not well-formed XML after replacements ({e})")
    dst.write_text(text, encoding="utf-8", newline="\n")


def do_pdf_preview(src: Path, dst: Path, a: dict) -> None:
    import fitz  # PyMuPDF

    doc = fitz.open(src)
    page = doc[a.get("page", 0)]
    zoom = a.get("width", 1400) / page.rect.width
    pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
    im = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    save(im, dst)


def do_pdf_image(src: Path, dst: Path, a: dict) -> None:
    import fitz

    with fitz.open(src) as doc:
        page = doc[a["page"] - 1]
        xref = page.get_images(full=True)[a["image"]][0]
        image = doc.extract_image(xref)
        if image["ext"] != dst.suffix.lower().lstrip("."):
            raise ValueError(f"Native image format {image['ext']} does not match {dst.name}")
        dst.write_bytes(image["image"])


def do_sequence_video(src: Path, dst: Path, a: dict, ffmpeg: str) -> None:
    subprocess.run([
        ffmpeg, "-hide_banner", "-loglevel", "error", "-y",
        "-framerate", str(a["playback_fps"]), "-start_number", str(a["start_number"]),
        "-i", str(src / a["pattern"]), "-frames:v", str(a["frames"]),
        "-vf", "scale=960:-2:flags=lanczos,pad=ceil(iw/2)*2:ceil(ih/2)*2",
        "-an", "-c:v", "libx264", "-crf", "23", "-pix_fmt", "yuv420p",
        "-movflags", "+faststart", str(dst),
    ], check=True)


def do_video(src: Path, dst: Path, a: dict, ffmpeg: str) -> None:
    width = a.get("width", 960)
    cmd = [
        ffmpeg, "-hide_banner", "-loglevel", "error", "-y", "-i", str(src),
        "-vf", f"scale={width}:-2", "-an",
        "-c:v", "libx264", "-preset", "slow", "-crf", str(a.get("crf", 28)),
        "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(dst),
    ]
    subprocess.run(cmd, check=True)


def save(im: Image.Image, dst: Path) -> None:
    if dst.suffix.lower() in (".jpg", ".jpeg"):
        im.convert("RGB").save(dst, quality=86, optimize=True, progressive=True)
    else:
        im.save(dst, optimize=True)


def main() -> None:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    root = Path(manifest["root"])
    only = sys.argv[1] if len(sys.argv) > 1 else None
    ffmpeg = None

    for a in manifest["assets"]:
        if only and only not in a["to"]:
            continue
        src = root / a["from"]
        dst = SITE / a["to"]
        if not src.exists():
            sys.exit(f"missing source: {src}")
        dst.parent.mkdir(parents=True, exist_ok=True)
        kind = a["kind"]
        if kind == "copy":
            shutil.copyfile(src, dst)
        elif kind == "zip_member":
            with zipfile.ZipFile(src) as archive:
                dst.write_bytes(archive.read(a["member"]))
        elif kind == "image":
            do_image(src, dst, a)
        elif kind == "lineart":
            do_lineart(src, dst, a)
        elif kind == "svg":
            do_svg(src, dst, a)
        elif kind == "pdf_preview":
            do_pdf_preview(src, dst, a)
        elif kind == "pdf_image":
            do_pdf_image(src, dst, a)
        elif kind == "sequence_video":
            ffmpeg = ffmpeg or find_ffmpeg(manifest.get("ffmpeg"))
            do_sequence_video(src, dst, a, ffmpeg)
        elif kind == "video":
            ffmpeg = ffmpeg or find_ffmpeg(manifest.get("ffmpeg"))
            do_video(src, dst, a, ffmpeg)
        else:
            sys.exit(f"unknown kind {kind!r} for {a['to']}")
        print(f"{kind:12} {dst.relative_to(SITE)}  ({dst.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
