'use strict';
const express = require('express');
const router = express.Router();
const entrenadorApi = require('./entrenador.api');


router.route('/registrarEntrenador')
    .post(function(req, res){
        entrenadorApi.registrar(req, res);
});

router.route('/mostrarEntrenador')
    .get(function(req, res){
        entrenadorApi.mostrar(req,res);
    });

module.exports = router;