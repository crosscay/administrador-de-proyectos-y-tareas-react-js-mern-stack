// const express = require('express'); 
import express from 'express';
import conectarDB from './config/db.js';
import dotenv from "dotenv";



const app = express();

dotenv.config();

conectarDB();

// console.log("Sigue el mismo ");
// console.log("Sigue el mismo ");
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`);
});