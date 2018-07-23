'use strict';
let botonRegPokemon = document.querySelector('#btnRegPokemon');


if (botonRegPokemon != undefined) {
    botonRegPokemon.addEventListener('click' , obtenerDatos);
}

let inputFiltro = document.querySelector('#txtFiltro');


if (inputFiltro != undefined) {
    inputFiltro.addEventListener('keyup' , filtrarListaPokemon);
}

let inputCedula = document.querySelector('#txtCedula');
let inputNombre = document.querySelector('#txtNombre');
let inputTipo = document.querySelector('#txtTipo');

function obtenerDatos(){
    let infoPokemon =[];
    let bError = false;

    let sCedula = Number(inputCedula.value); 
    let sNombre = inputNombre.value;    
    let sTipo = Number(inputTipo.value);

    infoPokemon.push(sCedula, sNombre, sTipo, imagenUrl);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el usuario',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el usuario');
    }else{
        let resultado = registrarPokemon(infoPokemon);
        console.log(imagenUrl); //Juank
       if (resultado == true){
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El Pokémon se registró adecuadamente',
            confirmButtonText : 'Entendido'
        })
        .then(
            function(){
                window.location.href = "../html/registrarPokemon.html"
            }
        );

       }
       
        //imprimirListaPokemon();
        limpiarFormulario();
    }
    
};

function imprimirListaPokemon(){
    let listaPokemon = obtenerListaPokemon();

    let tbody = document.querySelector('#tblPokemon tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaPokemon.length; i++){
        let fila = tbody.insertRow();

        let cCedula = fila.insertCell();
        let cNombre = fila.insertCell();
        let cTipo = fila.insertCell();
        let cFoto = fila.insertCell();

        // let imagen = document.createElement('img');
        // imagen.src = listaPokemon[i]['foto'];
        // imagen.classList.add('imageSettings');

        // cFoto.appendChild(imagen);
 

        cCedula.innerHTML = listaPokemon[i].Cedula;
        cNombre.innerHTML = listaPokemon[i].Nombre;
        cTipo.innerHTML = listaPokemon[i].Tipo;
        cFoto.innerHTML = '<img src="'+listaPokemon[i]['Foto']+ '">';

    }

};

function filtrarListaPokemon(){
    let filtro = $("#txtFiltro").val();
    let listaPokemon = obtenerListaPokemon();
    filtro = filtro.toLowerCase();

    let listaFiltrada = [];

    for(let i = 0; i < listaPokemon.length; i++){
        let nombreCompleto = listaPokemon[i].Nombre.toLowerCase(); // + " " + listaPokemon[i].Tipo.toLowerCase()       

        if(nombreCompleto.includes(filtro)){
            listaFiltrada.push(listaPokemon[i]);
        }
    }

    let tbody = document.querySelector('#tblPokemon tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaFiltrada.length; i++){
        let fila = tbody.insertRow();

        let cCedula = fila.insertCell();
        let cNombre = fila.insertCell();
        let cTipo = fila.insertCell();
        let cFoto = fila.insertCell();

        // let imagen = document.createElement('img');
        // imagen.src = listaPokemon[i]['foto'];
        // imagen.classList.add('imageSettings');

        // cFoto.appendChild(imagen);
 

        cCedula.innerHTML = listaFiltrada[i].Cedula;
        cNombre.innerHTML = listaFiltrada[i].Nombre;
        cTipo.innerHTML = listaFiltrada[i].Tipo;
        cFoto.innerHTML = listaFiltrada[i].Foto;
        cFoto.innerHTML = '<img src="'+listaPokemones[i]['Foto']+ '">';

    }

};

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;


    //Validación del Cédula
    if(inputCedula.value == ''){
        inputCedula.classList.add('error-input');
        bError = true;
    }else{
        inputCedula.classList.remove('error-input');
    }

    //Validación del nombre 
    if(inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value)==false) ){
        inputNombre.classList.add('error-input');
        bError = true;
    }else{
        inputNombre.classList.remove('error-input');
    }

    //Validación del tipo
    if(inputTipo.value == ''){
        inputTipo.classList.add('error-input');
        bError = true;
    }else{
        inputTipo.classList.remove('error-input');
    }

    return bError;
};

function limpiarFormulario(){
    
        inputCedula.value = '';
        inputNombre.value = '';
        inputTipo.value = '';  
    }     
    
 $(document).ready(function() {
    imprimirListaPokemon();
 });

   //filtrarListaPokemon('Prueba', 'lkflkashshfj')
