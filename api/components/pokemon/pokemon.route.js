'use strict';
const express = require('express');
const router = express.Router();
const pokemonApi = require('./pokemon.api');


router.route('/registrarPokemon')
    .post(function(req, res){
        pokemonApi.registrar(req, res);
});

router.route('/mostrarPokemon')
    .get(function(req, res){
        pokemonApi.mostrar(req,res);
    });

module.exports = router;