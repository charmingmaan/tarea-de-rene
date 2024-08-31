const express = require ("express");
require('dotenv').config();
const app = express();
const indexRouter = require('./rutas');
const inicioRouter = require('./rutas');
const feedRouter = require('./rutas');

app.use('/', indexRouter);
app.use('/inicio', inicioRouter);
app.use('/feed', feedRouter);


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("servidor en http://localhost:"+port);
    
});