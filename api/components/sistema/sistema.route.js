'use strict';
// MODIFICADO 14/7/2018 AGREGAR VERSION
const express = require('express');
const router = express.Router();
const parametro = require('./sistema.api');


router.route('/registrarParametros')
    .post(function(req, res){
    parametro.registrar(req, res);
});



module.exports = router;