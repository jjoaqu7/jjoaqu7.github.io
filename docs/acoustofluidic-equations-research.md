# Acoustofluidic rotation and valve deflection

Research date: 20 October 2026. Research notes only; the website was not changed.

## Confirmed project evidence

The original one-page conference paper was recovered at:

`C:\Users\jjoaq\Downloads\IEEE_EMBS_2022_Embryo_Rotation_AZ3_JR1.pdf`

Another copy is in `C:\Users\jjoaq\vscode-python\resume_cv\documents\acute_lab\`.

The paper reports prominent out-of-plane rotation at 5 and 90 kHz, a strong linear correlation between voltage amplitude and embryo rotation speed, and an initial valve width of 150 micrometres increasing to approximately 180 micrometres at -60 kPa. It contains no analytical deflection equation and no numerical regression coefficients for rotation. The project image shows rotation speed in rpm versus peak-to-peak voltage at 5 kHz. Do not invent a slope or intercept from the image.

The lab publication list independently records the conference work:
https://rezailab.cec.gmu.edu/publications/

## Rotation: measured response versus theory

For this project's experimental trend, a fitted relation would have the form

`N(Vpp; f = 5 kHz) = m Vpp + b`

where N is rpm. The coefficients require original data or a clearly labelled digitization; they were not recovered. This is an empirical fit, not a universal governing equation.

Ahmed et al. (2016), *Rotational manipulation of single cells and organisms using acoustic waves*, explains small-amplitude bubble-driven streaming and a quadratic voltage dependence at fixed frequency when bubble amplitude is linear in voltage:
https://www.nature.com/articles/ncomms11085

Using dimensional bubble displacement amplitude d, bubble radius a, angular drive frequency omega = 2 pi f, and a flow length scale ell, an order-of-magnitude interpretation is

`U_stream ~ C omega d^2/a`

`Omega_rotation ~ U_stream/ell`

If `d = |H(f)| Vpp`, this gives `Omega_rotation ~ C omega |H(f)|^2 Vpp^2/(a ell)`. This last expression is a synthesis of the scaling arguments, not a calibrated prediction for the embryo device. H includes transducer, substrate, bubble, and fluid response. C depends on geometry and mode. Changing frequency changes H and vortex structure; it does not imply monotonically increasing rotation speed.

Laeubli et al. (2021), *Embedded Microbubbles for Acoustic Manipulation of Single Cells and Microfluidic Applications*, provides a related experimentally quadratic rotation-voltage example and discusses resonance:
https://pmc.ncbi.nlm.nih.gov/articles/PMC8295982/

Its embedded-bubble geometry differs from this project's exposed trapped bubbles.

## Valve sidewall deflection

The closest located geometry-specific reference is Shorr et al. (2019), *High-throughput mechanotransduction in Drosophila embryos with mesofluidics*, Lab on a Chip 19, 1141-1152:
https://doi.org/10.1039/C8LC01055B

The published paper's accessible indexed text gives equations (5)-(6), including a Timoshenko shear correction and an effective modulus for wide sidewalls. The one-wall maximum displacement magnitude is

`u_max = |DeltaP| h^4 (1 - nu^2)/(32 E t^3) * [1 + 4 t^2 (12 + 11 nu)/(5 h^2)]`

Here h is wall height, t is wall thickness, E is Young's modulus, nu is Poisson's ratio, and DeltaP is the pressure difference across the wall. Use SI units. For two symmetric walls opening under vacuum, the centre-height opening is `W_open = W0 + 2 u_max`. With pressure defined positive inward, the paper instead writes the corresponding channel width as `W' = W - 2 u_max`.

The leading bending-only term is `u_bend = |DeltaP| h^4 (1 - nu^2)/(32 E t^3)`. The shear term matters for less slender walls. This is a linear elastic sidewall model; it is not a large-deflection stretching model for a circular diaphragm. Check wall geometry, bonding, material properties and deformation magnitude before applying it to the actual device.

This paper was traced through reference [127] in the locally stored `Zabihihesari_Alireza_2022_PhD.pdf`. The thesis references the model but does not establish that this was the equation used in the missing workbook. The publisher landing page was accessible; full-text publisher downloads failed. Equation text was available in the indexed author-paper copy:
https://www.researchgate.net/publication/322969371_High-Throughput_Mechanotransduction_in_Drosophila_Embryos_with_a_Microfluidic_Device

## Workbook search outcome

No confirmed matching workbook was found.

- Inventoried 567 spreadsheet/CSV files under the user profile, including Downloads, Desktop, Documents, both OneDrive trees, AppData recovery locations, and code folders.
- Inspected text/XML content of 212 modern workbooks, then seven additional application workbooks outside the initial profile inventory.
- Searched worksheet formulas for candidate cube-root and fourth-power/third-power deflection expressions. No candidate was identified.
- Searched legacy XLS bytes for relevant terms; this is less conclusive than parsing their formulas.
- Extended filename traversal to accessible non-system C: folders and Public user folders. Windows, application installation trees, dependencies and caches were excluded from the broad extension scan.
- Attempted 404 ZIP archives and found 56 embedded spreadsheets. No convincing deflection workbook emerged. Eight archives returned corruption errors or read timeouts. Two timeouts were York OneDrive attachment archives named CA_measure.zip and droplet_imaging.zip.
- Some directories denied access, predominantly temporary/dependency directories and Windows compatibility junctions. Cloud-only, deleted, inaccessible or disconnected-drive files cannot be ruled out.

Detailed inventories and scan results are retained in the local `tmp-research/` directory. No original workbook was modified and no macros were executed.
