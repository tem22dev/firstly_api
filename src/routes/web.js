const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1>Hello world</h1>`)
});

router.get('/user', (req, res) => {
    res.json({id: 1, name: 'Trung Em'});
});

router.get('/home', (req, res) => {
    res.render('home.ejs'); // Tạo view động
});

module.exports = router;