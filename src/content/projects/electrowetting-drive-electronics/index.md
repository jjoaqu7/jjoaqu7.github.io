---
title: Electrowetting drive electronics
summary: A six-channel solid-state relay board that routes one high-voltage AC waveform to any electrode row and actively grounds inactive rows, designed in KiCad and controlled by an Arduino and a Python GUI.
period: grad
track: research
start: 2024-09
role: MASc thesis research, circuit design and firmware
org: SEiL, York University
tags: [PCB design, KiCad, high voltage, Arduino, Python]
cover: ./pcb-iso.png
coverAlt: 3D render of the six-channel relay board, with the BNC high-voltage input, six PhotoMOS relays, output headers and the Arduino Nano Every socket
order: 3
facts:
  - label: Channels
    value: Six, one per electrode row
  - label: Relays
    value: Panasonic AQW614A PhotoMOS (400 V, 1 Form A and 1 Form B)
  - label: Drive signal
    value: 120 Vpp sine at 250 Hz (60 V peak, ×20 linear amplifier)
  - label: Peak surge current
    value: Limited to ~37 mA into capacitive loads
  - label: Controller
    value: Arduino Nano Every firmware (C++) and Python GUI over serial
links:
  - label: The condensation experiments it drives
    href: /projects/electrowetting-condensation/
  - label: Cleanroom device fabrication
    href: /projects/electrowetting-device-fabrication/
  - label: 3D force and energy model
    href: /projects/electrowetting-force-model/
status: Built, bench-tested and operating in the wind-tunnel experimental setup.
---

## The problem

To sweep condensing droplets across a surface, high-voltage electric fields must be switched rapidly across specific electrode rows without allowing unenergized rows to float or drawing dangerous current spikes into capacitive microelectrodes.

This presents three key hardware challenges.

First, the system must route a single high-voltage AC signal (120 Vpp, 250 Hz) across multiple rows in a strict sequence (collection first, then transport).

Second, each electrode row acts as a parallel-plate capacitor across the 100 nm silicon nitride lower dielectric. With metal areas of 5 to 9 mm², the rows present capacitive loads of 3.3 to 6.0 nF. This is 8 to 15 times larger than the maximum capacitive load the laboratory linear amplifier is rated for, risking amplifier instability, overshoot and high surge currents during switching.

Third, inactive rows cannot simply be disconnected. If an unenergized row is left electrically floating, capacitive coupling from adjacent energized electrodes induces stray voltages that trap droplets instead of letting them move forward.

## My contribution

I designed and built the complete electrical actuation subsystem to address these requirements.

I designed the circuit architecture, selected the solid-state PhotoMOS relays, designed the two-layer printed circuit board in KiCad, and calculated the series damping resistors to protect the amplifier. I wrote the microcontroller firmware in C++ with break-before-make timing, developed the desktop Python control interface, assembled the PCB, and fabricated the wire harness bonded to the silicon chips with conductive silver epoxy.

## Visual results and board architecture

![3D isometric render of the six-channel electrowetting actuation board](./pcb-iso.png)
*3D render of the assembled six-channel actuation board. The BNC high-voltage input sits at the bottom left, six optically isolated PhotoMOS relays line the top and left edges, and the Arduino Nano Every microcontroller sits at the bottom right.*

![Schematic of one relay channel from amplifier input to electrode pad](./relay-channel.svg)
*Schematic of one relay channel. The Form A contact connects the active row to the high-voltage amplifier, while the Form B contact actively clamps the row to the grounded silicon substrate when switched off.*

![Top copper layout of the relay board in KiCad](./layout-top.svg)
*Top copper layout designed in KiCad. Galvanic isolation divides the board across the relays, keeping high-voltage AC traces physically separated from low-voltage microcontroller logic lines.*

## How it works and circuit design

### Signal chain and active grounding

The signal originates at a digital function generator (Koolertron DDS) driving a fixed-gain (×20) linear amplifier (Pendulum F20A, ±150 V, 150 mA maximum continuous output).

From the amplifier, the signal enters the board through a global series resistor and branches into six identical relay channels. Each channel uses a Panasonic AQW614A PhotoMOS solid-state relay containing one normally open (Form A) and one normally closed (Form B) contact.

- **Actuation.** Energizing the channel closes the Form A contact, applying the 120 Vpp waveform to the electrode row.
- **Discharge and clamping.** De-energizing the channel opens Form A and closes Form B, connecting the row directly to the boron-doped silicon substrate ground. This actively discharges the electrode capacitance in under 50 µs (RC time constant of approximately 9.8 µs), preventing residual charge accumulation and ensuring zero electrowetting force over inactive rows.

### Series resistance and capacitive load damping

Each electrode row has a capacitance of approximately 0.66 nF per mm² over the 100 nm LPCVD silicon nitride film, giving 3.3 to 6.0 nF per row.

To prevent amplifier oscillation and limit switching surges, the signal path incorporates two series resistances, comprising a global series resistor (R_g = 100 Ω, 5 W) between the amplifier and board and an inline series resistor (R_pad = 1.5 kΩ, 7 W) on each channel harness.

Together with the relay on-resistance (27 Ω typical), the total series resistance is approximately 1.63 kΩ. This caps the peak transient surge current.

$$I_{\text{peak}} = \frac{V_0}{R_s} = \frac{60\text{ V}}{1.63\text{ k}\Omega} \approx 36.8\text{ mA}$$

This surge current is well below the 150 mA amplifier limit and the 100 mA relay rating. In steady state at 250 Hz, the capacitive reactance is over 106 kΩ, so the 1.63 kΩ series resistance introduces less than 0.01% voltage attenuation and under 0.8° phase lag at the electrode pad.

### Interconnect and chip packaging

Each channel leaves the PCB through a two-pin JST VH header and a 16 AWG jumper to a WAGO 221 lever terminal. The harness continues through 24 AWG silicone-insulated wire carrying the inline 1.5 kΩ resistor, terminating in a fine 30 AWG pigtail.

The pigtail is bonded to the cleanroom chip contact pad using silver-filled conductive epoxy (MG Chemicals 8331S) and encapsulated in potting epoxy (MG Chemicals 832XFC) for insulation, moisture sealing and strain relief. The conductive silicon substrate is grounded to the BNC shell through a dedicated silver-epoxy bonded lead, forming a single shared reference plane.

### Firmware timing and software control

The Arduino Nano Every microcontroller controls the relays via optocoupled inputs.

Firmware written in C++ (PlatformIO) enforces break-before-make switching with a 200 ms dead-time margin. A row is never connected to the amplifier and ground simultaneously. At power-up, all channels default to the grounded state.

A desktop Python interface (Tkinter) connects over USB serial. It displays live channel statuses, allows manual single-channel toggles or global shut-off, and executes automated stepping sequences synchronized with the high-speed camera in the wind tunnel.
