const express = require('express');
const app = express();
const { greeting } = require('./user');

app.get('/', (req, res) => res.send('This App is running properly!'));
app.get('/milan', (req, res) => res.send('Hello, milanisti jakarta!'));

module.exports = app;
