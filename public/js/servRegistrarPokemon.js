'use strict';
let listaPokemon = [];

function obtenerListaPokemon (){
    let lista = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/mostrarPokemon',
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


function registrarPokemon(paInfoPokemon){
    console.log(paInfoPokemon);
    let resultado = false;
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarPokemon',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            Cedula : paInfoPokemon[0],
			Nombre : paInfoPokemon[1],
            Tipo : paInfoPokemon[2],
            foto : paInfoPokemon[3],
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
