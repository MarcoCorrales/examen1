'use strict';
let mongoose = require('mongoose');

let PokemonSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.ObjectId, auto: true},
    Cedula : {type : Number, unique : true, required: true},
    Nombre : {type : String, unique : true, required : true},
    Tipo : {type : Number, unique : true, required : true}
    // Direccion : {type : String, required : true},
    // Telefono : {type : Number, unique : true, required: true},    
    // Correo : {type : String, required : true},
    
    // Carrera : {type : String, required : true},
    // Materias : {type : String, required : true},   
    // NombreEmergencia : {type : String, required : true},
    // ApellidoEmergencia : {type : String, required : true},
    // TelefonoEmergencia : {type : Number, required : true}, 
    // Contrasenna : {type: String, required: true},
    // TipoUsuario: {type: Number, required: true}
});

module.exports = mongoose.model('Pokemon', PokemonSchema);