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
    // let contrasennaAutogenerada = ftnGeneradorContrasenna();
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
	        // Direccion : paInfoPokemon[2],
	        // Telefono :  paInfoPokemon[3],
	        // Correo :  paInfoPokemon[4], 
	       	// Carrera : paInfoPokemon[6],
	        // Materias :  paInfoPokemon[7],
	        // NombreEmergencia :  paInfoPokemon[8],
	        // ApellidoEmergencia :  paInfoPokemon[9],
            // TelefonoEmergencia :  paInfoPokemon[10],
            // Contrasenna: contrasennaAutogenerada,
    
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

// function ftnGeneradorContrasenna() {

//     let length = 5,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (let i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }

