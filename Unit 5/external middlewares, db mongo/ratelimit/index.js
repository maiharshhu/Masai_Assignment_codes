const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

// Use the router for /api routes
app.use('/api', apiRoutes);

// Handle undefined routes (404)
app.use((req, res) => {
    res.status(404).json({ error: "404 Not Found" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});