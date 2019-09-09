#!/usr/bin/env node

const argv=  process.argv;
const rutaArchivo =  argv[2];
const prueba = require("./index.js");


prueba(rutaArchivo);
 