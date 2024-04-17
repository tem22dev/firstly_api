const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express(); // Init app express
const port = process.env.PORT; // Port
const hostname = process.env.HOST_NAME;

// Config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Init Routes
app.get('/', (req, res) => {
    res.send(`<h1>Hello world</h1>`)
});

app.get('/user', (req, res) => {
    res.json({id: 1, name: 'Trung Em'});
});

app.get('/home', (req, res) => {
    res.render('home.ejs'); // Tạo view động
});

// Run server
app.listen(port, hostname, () => {
    console.log(`App listening on port ${port}`);
});