'use strict';


/*Sobre Registro tiquete*/
function obtenerListaTiquetes(){
    let lista = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarTiquetes',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return lista;
}

function registrarTiquete(pTiquete){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarTiquete',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            codigotiquete : pTiquete[0],
            /*nombreempresa : pTiquete[1],*/
            cedula: pTiquete[1],
            descripcion : pTiquete[2],
            fecha : pTiquete[3],
            estado : pTiquete[4],
            primernombre : pTiquete[5],
            primerapellido : pTiquete[6],
            telefonocontacto : pTiquete[7],
            correocontacto : pTiquete[8]
        }
      });

    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}

