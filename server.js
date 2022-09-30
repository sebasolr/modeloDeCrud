const express = require('express');

const app = express();
const port = 8080
// dejo los middlewares configurados.
app.use(express.json());//sin esto no me trae el json body 
app.use(express.urlencoded({extended:"true"}));

// determino las rutas
app.use(require('./funciones/routes'));

app.listen(port,()=>{console.log("Todo ready papito!");});