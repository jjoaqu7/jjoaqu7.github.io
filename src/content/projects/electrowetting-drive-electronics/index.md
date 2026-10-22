---
title: Electrowetting drive electronics
summary: A six-channel solid-state relay board that routes one high-voltage AC waveform to any electrode row and grounds every row that is off, controlled from an Arduino and a Python GUI.
period: grad
track: research
start: 2024-09
role: MASc thesis research, circuit design and firmware
org: SEiL, York University
tags: [PCB design, KiCad, high voltage, Arduino, Python]
cover: ./cover.jpg
coverAlt: 3D render of the six-channel relay board, with the BNC high-voltage input, six PhotoMOS relays, output headers and the Arduino Nano Every socket
order: 3
facts:
  - label: Channels
    value: Six, one per electrode row
  - label: Relays
    value: Panasonic AQW614A PhotoMOS, 400 V, 1 Form A and 1 Form B
  - label: Drive signal
    value: 120 Vpp sine at 250 Hz from a ×20 amplifier
  - label: Control
    value: Arduino Nano Every firmware and a Python (Tkinter) GUI over USB serial
  - label: Design tool
    value: KiCad 9, two-layer board
links:
  - label: The condensation experiments it drives
    href: /projects/electrowetting-condensation/
  - label: The devices it connects to
    href: /projects/electrowetting-device-fabrication/
credits: I designed the circuit and the board and wrote the firmware and the GUI.
---

## What it had to do

The transport mechanism needs electrode rows switched on in a set order, collection rows first and then transport rows one after another. That set four requirements.

1. Connect one high-voltage waveform from a single amplifier to any of six electrode rows.
2. Hold every row that is off at the potential of the grounded silicon substrate, never leaving it floating.
3. Switch a row on or off well within a second, without exceeding the current ratings of the amplifier or the relays.
4. Keep the low-voltage control side galvanically isolated from the high-voltage side.

Only AC actuation was used, to limit charge build-up in the dielectric stack.

## Signal path

A function generator (Koolertron DDS) drives a fixed-gain ×20 linear amplifier (Pendulum F20A, ±150 V). The amplifier output passes through a 100 Ω series resistor and a coaxial cable to a BNC input on the board, where it forms a common high-voltage trunk feeding six relays. Each relay output leaves through a two-pin header and a short harness with a 1.5 kΩ series resistor, and ends at a fine wire bonded to the chip's contact pad with silver epoxy. A separate lead from the BNC shell to the silicon substrate makes the substrate, the coaxial shield and the board's high-voltage ground a single reference node.

![Schematic of one relay channel, from the amplifier through the PhotoMOS relay to one electrode pad](./relay-channel.svg)
*One of the six identical channels. The Form A contact connects the row to the amplifier; the Form B contact ties it to ground when it is off, which also discharges the electrode.*

## Why the series resistors

Each electrode row is a metal film separated from the grounded substrate by 100 nm of silicon nitride, so electrically it is a parallel-plate capacitor of about 0.66 nF per mm² of metal. Rows of 5 to 9 mm² come to roughly 3 to 6 nF, which is 8 to 15 times the capacitive load the amplifier is specified for. The 100 Ω and 1.5 kΩ resistors limit the charging current when a row switches on and set how quickly it discharges through the Form B contact when it switches off.

## Board

The board was laid out in KiCad 9 with the low-voltage and high-voltage sides kept apart. The two ground pours are separated by a gap under the relays, which is where the optical isolation sits, and the high-voltage tracks are wider and spaced further apart than the logic tracks.

![Top copper layout of the relay board](./layout-top.svg)
*Top copper layout. The BNC input (J8) is at the lower left, the six relays (IC1 to IC6) and their output headers (J1 to J6) along the top and left, and the Arduino Nano Every at the lower right.*

## Firmware and GUI

The Arduino drives two LEDs per relay, one for each contact. Switching uses break-before-make with a 200 ms dead time, so a row is never connected to the amplifier and to ground at the same moment, and every row starts clamped to ground at power-up. A Python GUI talks to the Arduino over USB serial. It shows the state of each channel, switches channels individually or all off at once, and runs preset sequences, in which the firmware switches rows off before switching the next ones on.
