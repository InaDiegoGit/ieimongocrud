/* Express es un Infraestructura web rápida, minimalista y flexible para Node.js
comando para instalar:        npm install express --save    */
const express = require('express');
const morgan = require('morgan');            

/* El módulo path proporciona utilidades para trabajar con rutas de archivos y directorios
comando para instalar:        npm install path --save   */
const path = require('path');

/* Handlebars es un lenguaje de plantillas simple.
Permite utilizar una plantilla y un objeto de entrada para generar HTML u otros formatos de texto. 
comando para instalar:        npm install express-handlebars --save   */
const exphbs = require('express-handlebars');

//inicializacion
const app = express();     // Se ejecuta la función para crear una instancia de una aplicación Express. 
require('./database');     // Requiere de database.js que contiene la conexión a MongoBD

//configuracion
app.set('puerto', process.env.PORT||3000); //define la variable puerto, la del servidor o 3000

app.set('views', path.join(__dirname,'vistas')); //define la variable, la cual es la ruta a VISTAS

app.engine('.hbs', exphbs.engine({      //estableciendo los parametros del motor express-handlebars
    defaultLayout:'template',            //maqueta principal se llama inacap.hbs
    runtimeOptions:{
        allowProtoMethodsByDefault:true,
        allowedProtoMethods:true },
    layoutsDir: path.join(app.get('views'),'maquetas'),  //ruta de las maquetas de handlebars 
    partialsDir: path.join(app.get('views'),'parciales'),  //ruta de los parciales
    extname:'hbs'   
}));

app.set('view engine','hbs'); 
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(require('./rutas/index'));      //Donde se almacenan la gestión de las rutas del servidor

app.listen(app.get('puerto'),() => {    //Usando la variable puerto, se activa el servidor Web
    console.log('Servidor web en puerto',app.get('puerto'));
});