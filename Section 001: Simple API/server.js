const express = require('express');

const app = express();
const PORT = 3000;

//Middleware
app.use(express.json()); // This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

//Test Routes

app.get('/', (req, res) => {
    res.send("Welcome to my REST API");
});

app.listen(PORT, () => {
    console.log(`Server has started listening on port ${PORT} : http://localhost:${PORT}`);
});