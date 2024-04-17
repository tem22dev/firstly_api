const express = require('express');
const path = require('path');

const app = express(); // Init app express
const port = 8080; // Port

// Config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Init Routes
app.get('/', (req, res) => {
    res.send(`<h1>Hello world</h1>`)
});

app.get('/user', (req, res) => {
    res.json({id: 1, name: 'Trung Em', email: 'bakhia123@gmail.com'});
});

app.get('/home', (req, res) => {
    res.render('home.ejs'); // Tạo view động
});

// Run server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});