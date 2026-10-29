# Project media sources

Media comes from existing research files and owner-supplied assets. Native PDF images are extracted without repainting them. Original research files are unchanged. Research-folder imports are allowlisted in `assets.manifest.json`; run `python scripts/import_assets.py <project-slug>`. Owner-supplied assets stored directly in project folders are preserved in Git.

## Acoustic particle focusing

- The owner supplied `3_node.png` in the site repository root. It was moved, without modification, to `src/content/projects/acute-acoustic-focusing/3_node.png` and replaces `three-band-focusing.jpg` in the page. It shows three particle bands in a capillary with a 500 µm scale bar. SHA-256 `c0ba131f566294558c12b8549d348507c67e06629e64b5ae3d3be8cf4afa8d45`.
- The replacement request does not establish its acquisition or processing history. The caption describes only the visible result; the previous figure's ImageJ-composite description is not transferred to it.
- `flow-cell-closeup-selected.png` is the owner's selected retouched setup image, with tubes and glass connectors removed. The original flow-cell photograph remains in the research presentation and original-image downloads. Editing provenance belongs in these source notes rather than the public caption or alt text.
- The approximate single-node drive frequency was supplied from recollection rather than a per-image record. Public copy now uses 370 kHz only as the analytical half-wave estimate for a 2 mm channel, keeping it separate from measured test settings.
- Public AI-editing wording was found only on the acoustic-focusing page, in its cover alt text, flow-cell alt/caption, microscopy captions, extra-image link, closing assurance and Credits metadata. Those public labels have been removed.
- Additional AI-named image variants are present but not referenced by any active page: `bench-setup-ai.png`, `capillary-setup-ai.png`, `flow-cell-closeup-ai.png`, `flow-cell-closeup-ai-v2.png` and `flow-cell-closeup-ai-v3.png`, all in the acoustic-focusing folder.

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

## Electrowetting force model and simulation
- Source folder: `C:/Users/jjoaq/vscode-python/comsol_folder/` and Samsung T7 SSD (`E:/COMSOL_storage/`).
- `quadratic_mesh_check_2026-10-26/positions_and_energy_pairs.png`: geometry of the three tested droplet placements (L01 gap, P11 edge, W38 apex) under 60 V peak (120 Vpp) 250 Hz excitation for a 50 µm droplet, illustrating full-domain energy subtraction pairs.
- `E:/COMSOL_storage/ew_triangle_diamond_cell/figures/D50_paper_style/clean_original.png` (also verified in `comsol_folder/output/D50_current_with_centres_2026-10-28/`): full-cell spatial electrical-energy landscape computed across 206 independent COMSOL simulations for a 50 µm spherical cap, mapped with symmetric logarithmic contrast.
- `ew_analytical/poster_figs/transport_figure_W50.svg`: 2D Python Shapely electrocapillary force model for chevron transport columns.

## Electrowetting drive electronics
- Source folder: `C:/Users/jjoaq/vscode-python/MASc_dir/circuit/`.
- `pcb_renders/pcb_iso.png`: 3D isometric render of the six-channel solid-state relay actuation board.
- `ssr_schematic/ssr_channel.svg`: schematic of one relay channel showing Form A (HV) and Form B (substrate ground clamp).
- `pcb_renders/pcb_layout_top_blue.svg` / `layout-top.svg`: top copper KiCad layout showing optical isolation and high-voltage trace separation.

## Electrowetting device fabrication
- Source folder: `C:/Users/jjoaq/vscode-python/MASc_dir/fabrication/`.
- `MASc_dir/conference/IHTC18_Poster_JR.pdf`, page 1, embedded image 13 (zero-based, PDF xref 61): completed diced electrowetting chip with the poster's original contact-pad and electrode-design annotations. Extracted byte-for-byte as `src/content/projects/electrowetting-device-fabrication/completed-chip.jpeg` (1052 × 572), without cropping or repainting. Used for the cover and results figure.
- The previously selected `graphics/photo_2026-10-20_09-52-31.jpg` is a wafer-stage cleanroom photograph, not the completed diced chip; it is no longer used for that figure.
- `fabrication_schematics/01_lpcvd.svg` through `07_wafer_dicing.svg`: seven-stage microfabrication cross-sectional diagrams.
- `stack.svg`: multi-layer cross-sectional schematic from substrate ground to hydrophobic coating.
- `mask.png`: full wafer photomask layout with 10 chip designs.

## ARIA
- Source folder: `C:/Users/jjoaq/vscode-python/ARIA/` and submission build `tmp/submission_build/`.
- `Figure_1.png` (imported as `architecture.png`): multi-agent system architecture with four modules, researcher checkpoints, and persistent SQL database.
- `Figure_3.png` (imported as `workflow-comparison.png`): end-to-end workflow comparison between ARIA and unaided manual literature review on dropwise condensation.
- `Figure_4.png` (imported as `expert-evaluation.png`): domain-expert evaluation dot plot across the five dimensions.
- `Figure_2.png` (imported as `procedure-structure.png`): conceptual three-layer structure of the generated research procedure.

The other project pages already contain experiment images, device photographs, process diagrams, software architecture figures or video. The user-selected acoustic-focusing channel image remains unchanged.

The embryo-rotation poster schematic labels the membrane thickness as 150 µm. The 105 µm value initially came from recollection. Public copy treats 105 µm only as a trial thickness for an illustrative calculation, explicitly separate from the poster's 150 µm dimension.
