require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Fact = require('./routes/fact');

const app = express();

// Bodyparse middleware 
app.use(bodyParser.json());

// DB Config
const db = process.env.DB_API_KEY

// Connect to mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/facts', Fact);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));