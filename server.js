const express = require('express');
const app = express();
const { greeting } = require('./user');

app.get('/', (req, res) => res.send('This App is running properly!'));
app.get('/milan', (req, res) => res.send('Hello, Milanisti indonesia!'));
app.get('/ping', (req, res) => res.send('Pong!'));
app.get('/youtube', (req, res) => res.send('Hello, youtube indonesia!'));
app.get('/hello/:name', (req, res) => {
  res.json({ message: greeting(req.params.name) });
});
module.exports = app;
