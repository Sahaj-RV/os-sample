const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { execFile } = require('child_process');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());

app.post('/api/simulate', upload.single('trace'), (req, res) => {
    const algorithm = req.body.algorithm;
    const traceFile = req.file.path;

    // Call the compiled C simulator binary
    const simulatorPath = path.join(__dirname, '../bin/simulator'); // adjust path as needed
    execFile(simulatorPath, [algorithm, traceFile], (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Simulation failed" });
        }
        res.json({ result: stdout });
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));
