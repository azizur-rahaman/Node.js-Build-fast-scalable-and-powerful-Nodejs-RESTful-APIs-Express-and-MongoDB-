const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Load Models
const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');



dotenv.config({ path: './config.env' });
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json()); // This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use('/api/v1/users/', userRoutes);


//MongoDB Connection

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server has started listening on port ${PORT} : http://localhost:${PORT}`);
});