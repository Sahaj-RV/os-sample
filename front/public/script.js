async function runSimulation() {
    const fileInput = document.getElementById('traceFile');
    const algorithm = document.getElementById('algorithm').value;

    if (!fileInput.files[0]) {
        alert("Please select a trace file");
        return;
    }

    const formData = new FormData();
    formData.append('trace', fileInput.files[0]);
    formData.append('algorithm', algorithm);

    try {
        const response = await fetch('http://localhost:5000/api/simulate', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        console.error(err);
        alert("Error running simulation");
    }
}
