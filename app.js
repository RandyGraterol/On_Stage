const router = require('./router/routerClient.js');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const app = express();
const {PORT} = process.env;
//Archivos estaticos
app.use(express.static(path.join(__dirname,'/public')));
//configuracion de recuperacion de datos y envio 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//configuracion del motor de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use('/',router);

app.listen(PORT,()=>{
console.log(`Servidor corriendo el puerto ${PORT}`);
})