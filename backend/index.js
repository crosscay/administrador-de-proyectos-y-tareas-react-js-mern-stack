// const express = require('express'); 
import express from 'express';

const app = express();

const port = 4000;

// console.log("Sigue el mismo ");
// console.log("Sigue el mismo ");
app.listen(port, ()=>{
    console.log("Servidor corriendo en puerto " + port);
});