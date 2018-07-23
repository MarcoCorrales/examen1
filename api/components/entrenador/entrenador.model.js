'use strict';
let mongoose = require('mongoose');

let EntrenadorSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.ObjectId, auto: true},
    Cedula : {type : Number, unique : true, required: true},
    Nombre : {type : String, unique : true, required : true},
    Tipo : {type : Number, unique : true, required : true},
    foto  : {type : String}
});

module.exports = mongoose.model('Entrenador', EntrenadorSchema);