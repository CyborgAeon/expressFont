const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS for all requests
app.use(cors());

// Serve static files (fonts, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Manually set CORS headers for font files
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS"); // Allow only GET and OPTIONS
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
