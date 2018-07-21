'use strict'

/*Sobre registro/listar/filtrar del cliente*/
//imprimirListaClientes();
let botonGuardar = document.querySelector('#btnGuardar');

botonGuardar.addEventListener('click' , obtenerDatos);

let inputCodigoTiquete = document.querySelector('#txtCodigoTiquete');
let inputNombreEmpresa = document.querySelector('#txtNombreEmpresa');
let inputCedula = document.querySelector('#txtCedula');
let inputDescripcion = document.querySelector('#txtDescripcion');
let inputFecha = document.querySelector('#txtFecha');
let inputEstadoTiquete = document.querySelector('#EstadoTiquete');
let inputPrimerNombre = document.querySelector('#txtPrimerNombre');
let inputPrimerApellido= document.querySelector('#txtPrimerApellido');
let inputTelefonoContacto= document.querySelector('#txtTelefonoContacto');
let inputCorreo = document.querySelector('#txtCorreo');
let desactivar = false;


/*se supope que este es el filtrar que estams usando todos pero no me funciona*/
/*function FiltrarListaClientes (){

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

/*inputFiltro.addEventListener('keyup' , function(){
    imprimirListaClientes(inputFiltro.value)
});*/

function obtenerDatos(){
    let infoTiquete =[];
    let bError = false;

    
    let sCodigoTiquete = inputCodigoTiquete.value;
    /*let sNombreEmpresa = inputNombreEmpresa.value;*/
    let sCedula = inputCedula.value;
    let sDescripcion = inputDescripcion.value;
    let sFecha = inputFecha.value;
    let sEstado = inputEstado.value;
    let sPrimerNombre = inputPrimerNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sTelefonoContacto = inputTeleonoContacto.value;
    let sCorreo = inputCorreo.value;
   

    infoTiquete.push(sCodigoTiquete, /*sNombreEmpresa*/ sCedula, sDescripcion, sFecha, sEstado, sPrimerNombre, sPrimerApellido, sTelefonoContacto, sCorreo);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el tiquete',
            /*text: 'Por favor revise los campos en rojo',*/
            confirmButtonText : 'Entendido'
        });
        
        console.log('No se pudo registrar el tiquete');
    }else{
        registrarTiquete(infoTiquete);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El tiquete se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        limpiarFormulario();
    }
    
}

/*function imprimirListaClientes() {
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

};*/

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;

    //Validación del Codigo
    if(inputCodigoTiquete.value == '' || (regexSoloNumeros.test(inputCodigoTiquete.value)==false) ){
        inputCodigoTiquete.classList.add('error-input');
        bError = true;
    }else{
        inputCodigoTiquete.classList.remove('error-input');
    }
    /*Validación de la fecha
    if(inputFechavalue == ''){
        inputFechavalue.classList.add('error-input');
        bError = true;
    }else{
        inputFechavalue.classList.remove('error-input');
    }*/
     //Validación de la Descripcion
     if(inputDescripcion.value == ''){
        inputDescripcion.classList.add('error-input');
        bError = true;
    }else{
        inputDescripcion.classList.remove('error-input');
    }
     //Validación de la nombrre contacto
     if(inputPrimerNombre.value == ''){
        inputPrimerNombre.classList.add('error-input');
        bError = true;
    }else{
        inputPrimerNombre.classList.remove('error-input');
    }
     //Validación de la apellido contacto
     if(inputPrimerApellido.value == ''){
        inputPrimerApellido.classList.add('error-input');
        bError = true;
    }else{
        inputPrimerApellido.classList.remove('error-input');
    }
    //Validación de la correo
    if(inputCorreo.value == ''){
        inputCorreo.classList.add('error-input');
        bError = true;
    }else{
        inputCorreo.classList.remove('error-input');
    }
    
    return bError;
}

function limpiarFormulario(){
    inputCodigoTiquete.value = '';    
    inputFecha.value = '';
    inputDescripcion.value = '';
    inputPrimerNombre.value = '';
    inputPrimerApellido.value = '';
    inputCorreo.value ='';
}