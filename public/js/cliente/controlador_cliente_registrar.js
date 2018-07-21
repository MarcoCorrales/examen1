'use strict'

/*Sobre registro/listar/filtrar del cliente*/
//imprimirListaClientes();
let botonRegistrar = document.querySelector('#btnRegistrarCliente');

botonRegistrar.addEventListener('click' , obtenerDatos);

let inputNombre = document.querySelector('#txtNombre');
let inputCedula = document.querySelector('#txtCedula');
let inputProvincia = document.querySelector('#txtProvincia');
let inputCanton = document.querySelector('#txtCanton');
let inputDistrito = document.querySelector('#txtDistrito');
let inputUbicacion = document.querySelector('#txtUbicacion');
let inputPrimerNombre = document.querySelector('#txtPrimerNombre');
let inputPrimerApellido = document.querySelector('#txtPrimerApellido');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');
let desactivar = false;

//funciones Obtener datos, filtar lista clientes, imprimir lista clientes, limpiar formulario
function obtenerDatos(){
    let infoCliente =[];
    let bError = false;

    
    let sNombre = inputNombre.value;
    let sCedula = Number(inputCedula.value);
    let sProvincia = inputProvincia.value;
    let sCanton = inputCanton.value;
    let sDistrito = inputDistrito.value;
    let sUbicacion = inputUbicacion.value;
    let sPrimerNombre = inputPrimerNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sTelefono = Number(inputTelefono.value);
    let sCorreo = inputCorreo.value;

    infoCliente.push(sNombre, sCedula, sProvincia, sCanton, sDistrito, sUbicacion, sPrimerNombre, sPrimerApellido,sTelefono, sCorreo, desactivar);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el cliente',
            /*text: 'Por favor revise los campos en rojo',*/
            confirmButtonText : 'Entendido'
        });
        
        console.log('No se pudo registrar el usuario');
    }else{
        registrarCliente(infoCliente);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El cliente se registró adecuadamente',
            confirmButtonText : 'Entendido'
        }).then(
            function(){
                window.location.href = "../../html/cliente/cliente_listar.html"
            }
        );
        limpiarFormulario();
    }
    
}

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;

    //Validación del NombreEmpresa
    if(inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value)==false) ){
        inputNombre.classList.add('error-input');
        bError = true;
    }else{
        inputNombre.classList.remove('error-input');
    }
    //Validación de la CedulaJuridica
    if(inputCedula.value == ''){
        inputCedula.classList.add('error-input');
        bError = true;
    }else{
        inputCedula.classList.remove('error-input');
    }
     //Validación de la Distrito
     if(inputDistrito.value == ''){
        inputDistrito.classList.add('error-input');
        bError = true;
    }else{
        inputDistrito.classList.remove('error-input');
    }
     //Validación de la Provincia
     if(inputProvincia.value == ''){
        inputProvincia.classList.add('error-input');
        bError = true;
    }else{
        inputProvincia.classList.remove('error-input');
    }
     //Validación de la Canton
     if(inputCanton.value == ''){
        inputCanton.classList.add('error-input');
        bError = true;
    }else{
        inputCanton.classList.remove('error-input');
    }
    //Validación de la Ubicacion
    if(inputUbicacion.value == ''){
        inputUbicacion.classList.add('error-input');
        bError = true;
    }else{
        inputUbicacion.classList.remove('error-input');
    }
    //Validación del NombreContacto
    if(inputPrimerNombre.value == '' ){
        inputPrimerNombre.classList.add('error-input');
        bError = true;
    }else{
        inputPrimerNombre.classList.remove('error-input');
    }
    //Validación del ApellidoCOntacto
    if(inputPrimerApellido.value == '' ){
        inputPrimerApellido.classList.add('error-input');
        bError = true;
    }else{
        inputPrimerApellido.classList.remove('error-input');
    }

    //Validación de la TelefonoContacto
    if(inputTelefono.value == '' || (regexSoloNumeros.test(inputTelefono.value) == false) ){
        inputTelefono.classList.add('error-input');
        bError = true;
    }else{
        inputTelefono.classList.remove('error-input');
    }

    //Validación de la CorreoContacto
    if(inputCorreo.value == '' ){
        inputCorreo.classList.add('error-input');
        bError = true;
    }else{
        inputCorreo.classList.remove('error-input');
    }

    return bError;
}

function limpiarFormulario(){
    inputNombre.value = '';    
    inputCedula.value = '';
    inputProvincia.value = '';
    inputCanton.value = '';
    inputDistrito.value = '';
    inputUbicacion.value ='';
    inputPrimerNombre.value = '';
    inputPrimerApellido.value = '';
    inputTelefono.value = '';
    inputCorreo.value = '';
}

//filtrar de gabriel
function FiltrarListaClientes (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasClientes = tblCliente.getElementsByTagName('tbody');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasClientes.length; i++) {    
        datosFila = filasClientes[i];
        datos = datosFila.getElementsByTagName('tbody');
        coincide = false;

        for (let j = 0; j < datos.length; j++) {
            valor = datos[j].innerHTML.toUpperCase();

            if(valor.includes(criterioBusqueda)){
                coincide = true;
            } 
        }
        if(coincide){
            datosFila.classList.remove('esconder');
        } else {
            datosFila.classList.add('esconder');
        }
    }

   
};

//filtar de pabs
// inputFiltro.addEventListener('keyup' , function(){
//     imprimirListaClientes(inputFiltro.value)
// });

function imprimirListaClientes() {
    let listaClientes = obtenerListaClientes();
    let tbody = document.querySelector('#tblCliente tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaClientes.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cPrimerNombre = fila.insertCell();
        let cPrimerApellido = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cCorreo = fila.insertCell();

        cNombre.innerHTML = listaClientes[i]['Nombre'];
        cPrimerNombre.innerHTML = listaClientes[i]['PrimerNombre'];
        cPrimerApellido.innerHTML = listaClientes[i]['PrimerApellido'];
        cTelefono.innerHTML = listaClientes[i]['Telefono'];
        cCorreo.innerHTML = listaClientes[i]['Correo'];

    }

};






