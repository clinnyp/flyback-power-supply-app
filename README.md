# IoT-enabled Flyback Power Supply Controller🔌

## Overview
A digitally-controlled flyback power supply system that provides 0-30V variable output 
with 0.2V resolution (150 discrete steps). The system uses a mobile app to send voltage 
commands through a Node.js server to an ATmega328P microcontroller that drives the 
flyback converter.

## Demo

<p align="center">
  <video src="https://github-production-user-asset-6210df.s3.amazonaws.com/8535203/504057940-e12589e8-9f7a-4bf2-96c6-141cd47c88ba.webm?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251022%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251022T072924Z&X-Amz-Expires=300&X-Amz-Signature=ed7c7d532aeb7d4420f01d2b7a79ac620e470fb16a0e16d07e38f9d2139123be&X-Amz-SignedHeaders=host" autoplay loop muted playsinline>
  </video>
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