// const express = require('express'); 
import express from 'express';
import conectarDB from './config/db.js';

const app = express();

const port = 4000;

conectarDB();

// console.log("Sigue el mismo ");
// console.log("Sigue el mismo ");
app.listen(port, ()=>{
    console.log("Servidor corriendo en puerto " + port);
});