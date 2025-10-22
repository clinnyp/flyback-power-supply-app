# IoT-enabled Flyback Power Supply Controller🔌

## Overview
A digitally-controlled flyback power supply system that provides 0-30V variable output 
with 0.2V resolution (150 discrete steps). The system uses a mobile app to send voltage 
commands through a Node.js server to an ATmega328P microcontroller that drives the 
flyback converter.

## Demo

<p align="center">
  <img src="iot-flyback-controller-demo.gif" alt="IoT Flyback Controller Demo">
</p>
<p align="center"><i>Mobile control of variable voltage output (0-30V)</i></p>

## Architecture

### 📱 Mobile App (React Native)
- Cross-platform mobile interface
- Real-time voltage input and control
- Toast notifications for user feedback
- Communicates via HTTP to middleware server 

### 🖥️ Server (Node.js/Express)
- REST API endpoint for voltage commands
- Serial communication bridge (9600 baud)
- Single-byte protocol for efficient MCU communication

### 🔌 Firmware (ATmega328P)
- Receives 8-bit voltage commands (0-150 range)
- PWM-based flyback converter control
- USB serial interface for command reception