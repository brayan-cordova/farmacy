'use strict'

const express = require ('express')
const logger = require('morgan');

const app = express()
app.use(logger('dev'))


app.get('/',(req, res)=>{
    res.send("hola mundo - desde ruta")
  });
  

app.listen(3000)
console.log(`server activo' ${3000}`) 