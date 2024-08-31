var express = require('express');
var app = express();
var {date, mensaje } = require('./middlewares');

app.get("/", (req, res) => {
    res.send("Estás en la raiz");
});

app.get("/inicio", date, (req, res) => {
    res.send("Estás en inicio");
});

app.get("/feed", mensaje, (req, res) => {
    res.send("Estás en el feed");
});

module.exports = app;
