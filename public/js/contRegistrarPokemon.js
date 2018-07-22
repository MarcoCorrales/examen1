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
// let inputDireccion = document.querySelector('#txtDireccion');
// let inputTelefono = document.querySelector('#txtTelefono');
// let inputEmail = document.querySelector('#txtEmail');
// let inputCarrera = document.querySelector('#txtCarrera');
// let inputMaterias = document.querySelector('#txtMateriasAprob');
// let inputEmergNombre = document.querySelector('#txtContactEmergNombre');
// let inputEmergApellido = document.querySelector('#txtContactEmergApellido');
// let inputEmergTelefono = document.querySelector('#txtContactEmergTelefono');

function obtenerDatos(){
    let infoPokemon =[];
    let bError = false;

    let sCedula = Number(inputCedula.value); 
    let sNombre = inputNombre.value;    
    let sTipo = Number(inputTipo.value);
    // let sDireccion = inputDireccion.value; 
    // let sTelefono = Number(inputTelefono.value);
    // let sEmail = inputEmail.value;
    // let sCarrera = inputCarrera.value; 
    // let sMaterias = inputMaterias.value; 
    // let sEmergNombre = inputEmergNombre.value; 
    // let sEmergApellido = inputEmergApellido.value; 
    // let sEmergTelefono = Number(inputEmergTelefono.value); 

    infoPokemon.push(sCedula, sNombre, sTipo);
    
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
       if (resultado == true){
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El usuario se registró adecuadamente',
            confirmButtonText : 'Entendido'
        })
        .then(
            function(){
                window.location.href = "../html/tablaPokemon.html"
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
        //let cDireccion = fila.insertCell();
        // let cTelefono = fila.insertCell();
        // let cEmail = fila.insertCell();
        
       // /let cCarrera = fila.insertCell();
        //let cMaterias = fila.insertCell(); 
       // let cEmergNombre = fila.insertCell(); 
        //let cEmergApellido = fila.insertCell(); 
        //let cEmergTelefono = fila.insertCell(); 

        cCedula.innerHTML = listaPokemon[i].Cedula;
        cNombre.innerHTML = listaPokemon[i].Nombre;
        cTipo.innerHTML = listaPokemon[i].Tipo;
        //cDireccion.innerHTML = listaPokemon[i].Direccion;
        // cTelefono.innerHTML = listaPokemon[i].Telefono;
        // cEmail.innerHTML = listaPokemon[i].Correo;
       
        //cCarrera.innerHTML = listaPokemon[i].Carrera;
        //cMaterias.innerHTML = listaPokemon[i].Materias;
        //cEmergNombre.innerHTML = listaPokemon[i].NombreEmergencia;
        //cEmergApellido.innerHTML = listaPokemon[i].ApellidoEmergencia;
        //cEmergTelefono.innerHTML = listaPokemon[i].TelefonoEmergencia;
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
        //let cDireccion = fila.insertCell();
        // let cTelefono = fila.insertCell();
        // let cEmail = fila.insertCell();
        
        //let cCarrera = fila.insertCell();
        //let cMaterias = fila.insertCell(); 
        //let cEmergNombre = fila.insertCell(); 
        //let cEmergApellido = fila.insertCell(); 
        //let cEmergTelefono = fila.insertCell(); 

        cCedula.innerHTML = listaFiltrada[i].Cedula;
        cNombre.innerHTML = listaFiltrada[i].Nombre;
        cTipo.innerHTML = listaFiltrada[i].Tipo;
        //cDireccion.innerHTML = listaFiltrada[i].Direccion;
        // cTelefono.innerHTML = listaFiltrada[i].Telefono;
        // cEmail.innerHTML = listaFiltrada[i].Correo;
        
        //cCarrera.innerHTML = listaFiltrada[i].Carrera;
        // cMaterias.innerHTML = listaFiltrada[i].Materias;
        // cEmergNombre.innerHTML = listaFiltrada[i].NombreEmergencia;
        // cEmergApellido.innerHTML = listaFiltrada[i].ApellidoEmergencia;
        // cEmergTelefono.innerHTML = listaFiltrada[i].TelefonoEmergencia;
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
            // inputDireccion.value = '';
            // inputTelefono.value = '';
            // inputEmail.value = '';
        
            // inputCarrera.value = '';
            // inputMaterias.value = '';
            // inputEmergNombre.value = '';
            // inputEmergApellido.value = '';
            // inputEmergTelefono.value = '';   
    }     
    

    imprimirListaPokemon();
    //filtrarListaPokemon('Prueba', 'lkflkashshfj')
