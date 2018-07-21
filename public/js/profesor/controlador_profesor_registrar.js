// MODIFICADO 13/7/2018 AGREGAR VERSION

'use strict';


const botonRegistrar = document.querySelector('#btnRegistrarProfesor');
botonRegistrar.addEventListener('click', obtenerDatos);

const inputNombre = document.querySelector('#txtNombreProfesor');
const inputApellido = document.querySelector('#txtApellidoProfesor');
const inputCedula = document.querySelector('#txtCedulaProfesor');
const inputTelefono = document.querySelector('#txtTelefonoProfesor');
const inputCorreo = document.querySelector('#txtCorreoProfesor');

const inputProvincia = document.querySelector('#txtProvinciaProfesor');
const inputCanton = document.querySelector('#txtCantonProfesor');
const inputDistrito = document.querySelector('#txtDistritoProfesor');
const inputDireccionExacta = document.querySelector('#txtDireccionExactaProfesor');

const inputGAcademico = document.querySelector('#txtGAcademico');
const inputAexperiencia = document.querySelector('#txtAexperiencia');
const inputCImpartidos = document.querySelector('#txtCImpartidos');


//Como obtener los datos de un selection #txtTipoProfesor
const inputTipoProfesor =  document.querySelector('#txtTipoProfesor');



function obtenerDatos() {

    let infoProfesor = [];
    let bError = false;

    let sNombre = inputNombre.value;
    let sApellido = inputApellido.value;
    let sCedula = inputCedula.value;
    let sTelefono = inputTelefono.value;
    let sCorreo = inputCorreo.value;

    let sProvincia = inputProvincia.value;
    let sCanton = inputCanton.value;
    let sDistrito = inputDistrito.value;
    let sDireccionExacta = inputDireccionExacta.value;

    let sGAcademico = inputGAcademico.value;
    let sAexperiencia = Number(inputAexperiencia.value);
    let sCImpartidos = inputCImpartidos.value;
    let sTipoProfesor = inputTipoProfesor.value;
    let sDesactivado = false;


    infoProfesor.push(sNombre, sApellido, sCedula, sTelefono, sCorreo, sProvincia, sCanton, sDistrito, sDireccionExacta, sGAcademico, sAexperiencia, sCImpartidos, sTipoProfesor, sDesactivado);

    bError = validar();

    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el profesor',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar el profesor');
    } else {
        registrarProfesor(infoProfesor);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'El Profesor se registró adecuadamente',
            confirmButtonText: 'Entendido'
        }).then(
            function(){
                window.location.href = "../../html/profesor/profesor_listar.html"
            }
        );
        limpiarFormulario();
    }

}

function imprimirListaProfesores() {
    let listaProfesores = obtenerListaProfesores();
    let tbody = document.querySelector('#tblProfesor tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cApellido = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cCorreo = fila.insertCell();
        let cGAcademico = fila.insertCell();

        cNombre.innerHTML = listaProfesores[i]['Nombre'];
        cApellido.innerHTML = listaProfesores[i]['Apellido'];
        cTelefono.innerHTML = listaProfesores[i]['Telefono'];
        cCorreo.innerHTML = listaProfesores[i]['Correo'];
        cGAcademico.innerHTML = listaProfesores[i]['GAcademico'];

    }

};


function validar() {

    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del Nombre Profesor
    if (inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value) == false)) {
        inputNombre.classList.add('error-input');
        bError = true;
    } else {
        inputNombre.classList.remove('error-input');
    }

    //Validación del Apellido Profesor
    if (inputApellido.value == '' || (regexSoloLetras.test(inputApellido.value) == false)) {
        inputApellido.classList.add('error-input');
        bError = true;
    } else {
        inputApellido.classList.remove('error-input');
    }

    //Validación de la Cedula Profesor
    if (inputCedula.value == '') {
        inputCedula.classList.add('error-input');
        bError = true;
    } else {
        inputCedula.classList.remove('error-input');
    }

    //Validación de la Telefono Profesor
    if (inputTelefono.value == '') {
        inputTelefono.classList.add('error-input');
        bError = true;
    } else {
        inputTelefono.classList.remove('error-input');
    }

    //Validación de la Correo Profesor
    if (inputCorreo.value == '') {
        inputCorreo.classList.add('error-input');
        bError = true;
    } else {
        inputCorreo.classList.remove('error-input');
    }



    //Validación de la Provincia
    if (inputProvincia.value == '') {
        inputProvincia.classList.add('error-input');
        bError = true;
    } else {
        inputProvincia.classList.remove('error-input');
    }



    //Validación de la Canton
    if (inputCanton.value == '') {
        inputCanton.classList.add('error-input');
        bError = true;
    } else {
        inputCanton.classList.remove('error-input');
    }

    //Validación de la Distrito
    if (inputDistrito.value == '') {
        inputDistrito.classList.add('error-input');
        bError = true;
    } else {
        inputDistrito.classList.remove('error-input');
    }

    //Validación de la Direccion Exacta
    if (inputDireccionExacta.value == '') {
        inputDireccionExacta.classList.add('error-input');
        bError = true;
    } else {
        inputDireccionExacta.classList.remove('error-input');
    }




    //Validación del Grado Academico
    if (inputGAcademico.value == '') {
        inputGAcademico.classList.add('error-input');
        bError = true;
    } else {
        inputGAcademico.classList.remove('error-input');
    }

    //Validación del Años de Experiencia
    // Ponerle Validacion de Numeros || (regexSoloNumeros.test(inputTelefono.value) == false)
    if (inputAexperiencia.value == '') {
        inputAexperiencia.classList.add('error-input');
        bError = true;
    } else {
        inputAexperiencia.classList.remove('error-input');
    }

    //Validación de Cursos Impartidos
    if (inputCImpartidos.value == '') {
        inputCImpartidos.classList.add('error-input');
        bError = true;
    } else {
        inputCImpartidos.classList.remove('error-input');
    }


        //Validación de Tipo Profesores
        if (inputTipoProfesor.value == '') {
            inputTipoProfesor.classList.add('error-input');
            bError = true;
        } else {
            inputTipoProfesor.classList.remove('error-input');
        }

    return bError;
}



function limpiarFormulario() {

    inputNombre.value = '';
    inputApellido.value = '';
    inputCedula.value = '';
    inputTelefono.value = '';
    inputCorreo.value = '';


    inputProvincia.value = '';
    inputCanton.value = '';
    inputDistrito.value = '';
    inputDireccionExacta.value = '';

    inputGAcademico.value = '';
    inputAexperiencia.value = '';
    inputCImpartidos.value = '';
}








