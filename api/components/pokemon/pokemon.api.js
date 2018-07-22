'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const pokemonModel = require('./pokemon.model');

module.exports.registrar = function(req, res){
    let nuevoPokemon = new pokemonModel({
        Cedula : req.body.Cedula,
        Nombre : req.body.Nombre,
        Tipo : req.body.Tipo,
        // Direccion : req.body.Direccion,
        // Telefono :  req.body.Telefono,
        // Correo :  req.body.Correo,
        
        // Carrera : req.body.Carrera,
        // Materias :  req.body.Materias,
        // NombreEmergencia : req.body.NombreEmergencia,
        // ApellidoEmergencia : req.body.ApellidoEmergencia,
        // TelefonoEmergencia : req.body.TelefonoEmergencia,
        // Contrasenna : req.body.Contrasenna,
        // TipoUsuario: 3
    });

    nuevoPokemon.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el Pokémon, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El Pokémon se registró con éxito'});
        }

    });
};

module.exports.mostrar = function(req, res){ 

    pokemonModel.find().then(
        function(pokemon){
            res.send(pokemon);
    });        

};

/*
module.exports.mostrar = function(req, res){ 

    pokemonModel.find({}, function(error, pokemon){
        let arraypokemon = [];

        pokemoniantes.forEach(function(pokemon){
            arraypokemon.push(pokemon);
        });

        if(error){
            res.json({success : false, msg : 'Ha ocurrido un error' + error});
        }else{
            res.json({success: true, pokemon: arraypokemon });
        }
    });

};
*/