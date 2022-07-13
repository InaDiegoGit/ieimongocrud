const mongoose = require('mongoose');    //requerimos de mongoose para utilizar el esquema
const { Schema } = mongoose;

const PeliculasSchema = new Schema({      //se define el equema de los animales
    titulo: String,
    genero: String,
    director: String,
    estreno: String
});

module.exports = mongoose.model('Peliculas', PeliculasSchema);  //se exporta el modelo de esquema 
                                                              //para la coleccion de Animales