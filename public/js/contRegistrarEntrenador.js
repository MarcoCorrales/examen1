'use strict';
let botonRegEntrenador = document.querySelector('#btnRegEntrenador');


if (botonRegEntrenador != undefined) {
    botonRegEntrenador.addEventListener('click' , obtenerDatos);
}

let inputFiltro = document.querySelector('#txtFiltro');


if (inputFiltro != undefined) {
    inputFiltro.addEventListener('keyup' , filtrarListaEntrenador);
}

let inputCedula = document.querySelector('#txtCedula');
let inputNombre = document.querySelector('#txtNombre');
let inputTipo = document.querySelector('#txtTipo');
let inputFoto = document.querySelector('#inputFoto');

function obtenerDatos(){
    let infoEntrenador =[];
    let bError = false;

    let sCedula = Number(inputCedula.value); 
    let sNombre = inputNombre.value;    
    let sTipo = Number(inputTipo.value);

    infoEntrenador.push(sCedula, sNombre, sTipo, imagenUrl);
    
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
        let resultado = registrarEntrenador(infoEntrenador);
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
                window.location.href = "../html/registrarEntrenador.html"
            }
        );

       }
       
        //imprimirListaEntrenador();
        limpiarFormulario();
    }
    
};

function imprimirListaEntrenador(){
    let listaEntrenador = obtenerListaEntrenador();

    let tbody = document.querySelector('#tblEntrenador tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEntrenador.length; i++){
        let fila = tbody.insertRow();

        let cCedula = fila.insertCell();
        let cNombre = fila.insertCell();
        let cTipo = fila.insertCell();
        let cFoto = fila.insertCell();

        // let imagen = document.createElement('img');
        // imagen.src = listaEntrenador[i]['foto'];
        // imagen.classList.add('imageSettings');

        // cFoto.appendChild(imagen);
 

        cCedula.innerHTML = listaEntrenador[i].Cedula;
        cNombre.innerHTML = listaEntrenador[i].Nombre;
        cTipo.innerHTML = listaEntrenador[i].Tipo;
        cFoto.innerHTML = '<img src="'+listaEntrenador[i]['Foto']+ '">';

    }

};

function filtrarListaEntrenador(){
    let filtro = $("#txtFiltro").val();
    let listaEntrenador = obtenerListaEntrenador();
    filtro = filtro.toLowerCase();

    let listaFiltrada = [];

    for(let i = 0; i < listaEntrenador.length; i++){
        let nombreCompleto = listaEntrenador[i].Nombre.toLowerCase(); // + " " + listaEntrenador[i].Tipo.toLowerCase()       

        if(nombreCompleto.includes(filtro)){
            listaFiltrada.push(listaEntrenador[i]);
        }
    }

    let tbody = document.querySelector('#tblEntrenador tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaFiltrada.length; i++){
        let fila = tbody.insertRow();

        let cCedula = fila.insertCell();
        let cNombre = fila.insertCell();
        let cTipo = fila.insertCell();
        let cFoto = fila.insertCell();

        // let imagen = document.createElement('img');
        // imagen.src = listaEntrenador[i]['foto'];
        // imagen.classList.add('imageSettings');

        // cFoto.appendChild(imagen);
 

        cCedula.innerHTML = listaFiltrada[i].Cedula;
        cNombre.innerHTML = listaFiltrada[i].Nombre;
        cTipo.innerHTML = listaFiltrada[i].Tipo;
        cFoto.innerHTML = listaFiltrada[i].Foto;
        cFoto.innerHTML = '<img src="'+listaEntrenadores[i]['Foto']+ '">';

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
    imprimirListaEntrenador();
 });

   //filtrarListaEntrenador('Prueba', 'lkflkashshfj')
