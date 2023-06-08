// import modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

// app
const server = express();


// db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));


// middleware
server.use(cors({ origin: true, credentials: true }));


// routes
const port = process.env.PORT || 5000;

// listener
server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    }
);