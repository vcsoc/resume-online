const express = require('express');
const path = require('path');
const app = express();
const port = 8085;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});