# Project media sources

All additions use existing research files. Native PDF images are extracted without repainting them. Original source files are unchanged. Reproduction is allowlisted in `assets.manifest.json`; run `python scripts/import_assets.py <project-slug>`.

## INPHYNI contact angles
- Source folder: `C:/Users/jjoaq/vscode-python/CA_measure/`.
- `process_mask_1_96_tiffFolder/_debug_CA_template/0075_raw_CA.png`: saved measurement overlay, copied unchanged.
- `CA_measurement.pdf`, page 5, first embedded image: diagnostic contact-angle trace, not a validation benchmark.
- `raw_mask_1_96_tiffFolder/10000.tif` through `10203.tif`: 204 consecutive raw frames. H.264 playback at 20 fps from 8,000 fps acquisition: 400 times slower, 10.2 seconds playback, 25.5 ms acquisition. No synthetic intermediate frames. First source frame supplies the poster.
- Website video: `public/media/inphyni-contact-angle/vibrating-droplets.mp4`.

## ACuTE acoustofluidics and cardiac assays
- `C:/Users/jjoaq/vscode-python/resume_cv/documents/acute_lab/IEEE_EMBS_2022_Embryo_Rotation_AZ3_JR1 (1).pdf`, page 1: device/microscopy composite and rotation-speed plot. These are co-authored team figures.
- Prepared cardiac assets: `C:/Users/jjoaq/vscode-python/resume_cv/portfolio/astro-content/src/content/projects/acute-cardiac-imaging/review-interface.png` and `astro-content/public/media/acute-cardiac-imaging/archived-imaging-clip.mp4`, with its poster. The prepared clip is a four-second archived imaging excerpt; it does not identify genotype or establish a treatment effect.
- Website video: `public/media/acute-acoustofluidics/cardiac-imaging.mp4`.
- User-provided poster: `C:/Users/jjoaq/OneDrive/Desktop/SEiL/SEiL_23-11-26/Acoustofluidic_Rotational_Manipulation_of_Drosophila_Embryos_in.pptx`. One poster slide, credited to Alireza Zabihihesari, Joaquin Ramirez-Medina and Pouya Rezai. The source does not establish a presentation venue or date, so no separate publication or conference entry is inferred from the folder name.
- Poster downloads: `public/files/acoustofluidic-embryo-rotation-poster.pptx` (unchanged original) and `public/files/acoustofluidic-embryo-rotation-poster.pdf` (PowerPoint export). Page preview: `src/content/projects/acute-acoustofluidics/embryo-rotation-poster.png`, exported without changing slide content or aspect ratio.
- Added project results are explicitly attributed to the collaborative poster: upstream pressure of 4.5 kPa during embryo rotation and a smallest recorded rotation increment of 2.3 degrees per 20 ms pulse.
- No verified embryo-rotation video was found in the inspected presentation; the paper figures are used instead.

## SHIELD
- `C:/Users/jjoaq/Downloads/Group04_FinalReport_ENG4000.pdf`: page 18 first image (system architecture), page 35 first image (recognition workflow), page 63 second image (team lock CAD).
- Captions distinguish the recognition subsystem from team mechanical work. Cloud console screenshots and account details are excluded.

## Droplet Coalescence Studio
- `C:/Users/jjoaq/vscode-python/droplet-imaging/paper/figures/results_finetuning_student.jpg`: archived intern processing example; not presented as current tracking performance.
- Same folder, `results_coverage.png`: existing coverage analysis figure with its original legend.
- No verified current tracking demonstration video was found in the inspected project files.

The other project pages already contain experiment images, device photographs, process diagrams, software architecture figures or video. The user-selected acoustic-focusing channel image remains unchanged.

The embryo-rotation poster schematic labels the membrane thickness as 150 µm. The existing project calculation using a recollected 105 µm is retained as an illustrative assumption and is explicitly distinguished from that source dimension.
