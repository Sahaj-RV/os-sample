# Page Replacement Simulator

## Overview
Simulates FIFO, LRU, Clock, and Optimal page replacement algorithms with a GUI frontend and Node backend. Core simulation is implemented in C.

## Folder Structure
- `frontend/` → GUI HTML/CSS/JS
- `backend/` → Node.js server for API
- `src/` → C code for algorithms
- `traces/` → Input traces
- `results/` → Simulation output
- `README.md` → Project info

## Usage

### Compile C code
```bash
gcc src/*.c -o bin/simulator
