<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Replacement Simulator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="container">
    <h1>Page Replacement Simulator</h1>

    <label>Algorithm:</label>
    <select id="algorithm">
        <option>FIFO</option>
        <option>LRU</option>
        <option>Clock</option>
        <option>Optimal</option>
    </select>

    <label>Frames:</label>
    <input type="number" id="frames" min="1" max="64" value="4">

    <label>Trace File:</label>
    <input type="file" id="tracefile">

    <button id="runBtn">Run Simulation</button>

    <h2>Metrics</h2>
    <div id="metrics">
        <p>Page Faults: <span id="faults">0</span></p>
        <p>Hits: <span id="hits">0</span></p>
        <p>Replacements: <span id="replacements">0</span></p>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
