/* Mongoose proporciona una solución sencilla basada en esquemas para modelar los datos de la aplicación,
conectandose a un servidor MongoDB (local o cloud)
comando para instalar:        npm install mongoose --save    */
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://InaDiego-Admin:12345&@cluster0.megbccv.mongodb.net/cinema?retryWrites=true&w=majority')       //conexión local a BD zoologico
    .then(db => console.log('DB Contectada'))
    .catch(err => console.error(err));