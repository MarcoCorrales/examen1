'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const entrenadorModel = require('./entrenador.model');

module.exports.registrar = function(req, res){
    let nuevoEntrenador = new entrenadorModel({
        Cedula : req.body.Cedula,
        Nombre : req.body.Nombre,
        Tipo : req.body.Tipo,
        foto : req.body.foto
    });

    nuevoEntrenador.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el Pokémon, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El Pokémon se registró con éxito'});
        }

    });
};

module.exports.mostrar = function(req, res){ 

    entrenadorModel.find().then(
        function(entrenador){
            res.send(entrenador);
    });        

};
