import express from 'express';

const app = express();
const port = 8080;

app.get('/user', (req, res) => {
    res.json({id: 1, name: 'Trung Em', email: 'bakhia123@gmail.com'});
});

app.get('/', (req, res) => {
    res.send(`<h1>Hello world</h1>`)
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});