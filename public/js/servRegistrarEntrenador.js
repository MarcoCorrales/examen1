'use strict';
let listaEntrenador = [];

function obtenerListaEntrenador (){
    let lista = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/mostrarEntrenador',
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


function registrarEntrenador(paInfoEntrenador){
    console.log(paInfoEntrenador);
    let resultado = false;
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarEntrenador',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            Cedula : paInfoEntrenador[0],
			Nombre : paInfoEntrenador[1],
            Tipo : paInfoEntrenador[2],
            foto : paInfoEntrenador[3],
            // foto : imagenUrl,
        }
      });
    
      peticion.done(function(response){
          if (response.success==true){
              //respuesta = response;
              resultado = true
          }
          else{
            //respuesta = response;
            alert("Error");
            console.log(response);
          }
            
      });
    
      peticion.fail(function(response){
          alert("Error");
       console.log(response);
      });

      return resultado;
}
