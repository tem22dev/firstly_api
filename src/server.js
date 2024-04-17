require('dotenv').config();
const express = require('express');

const router = require('./routes/web');
const configViewEngine = require('./config/viewEngine');

const app = express(); // Init app express
const port = process.env.PORT || 3000; // Port
const hostname = process.env.HOST_NAME;

// Config template engine
configViewEngine(app);

// Init Routes
app.use('/test', router)

// Run server
app.listen(port, hostname, () => {
    console.log(`App listening on http://localhost:${port}`);
});