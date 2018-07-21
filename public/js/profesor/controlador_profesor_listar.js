
'use srticit';

// MODIFICADO 13/7/2018 AGREGAR VERSION


// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaProfesores = document.querySelector('#tblProfesores');

//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){filtrarListaProfesores();});

//loads------------------------------------------------------
window.onload = function(){
    ListarProfesores();
};


//funciones--------------------------------------------------
function ListarProfesores(){
    let listaProfesor = obtenerListaProfesores();

    let tbody = document.querySelector('#tblProfesores tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProfesor.length; i++){
        
        if(listaProfesor[i]['Desactivado']){
            continue;
        } else{
        
            let fila = tbody.insertRow();
            let celdaNombre = fila.insertCell();
            let celdaApellido = fila.insertCell();
            let celdaCedula = fila.insertCell();
            let celdaTelefono = fila.insertCell();
            let celdaCorreo = fila.insertCell();
            // let celdaProvincia = fila.insertCell();
            // let celdaCanton = fila.insertCell();
            // let celdaDistrito = fila.insertCell();
            // let celdaDireccionExacta =  fila.insertCell();
            // let celdaGradoAcademico = fila.insertCell();
            // let celdaAñosExperiencia = fila.insertCell();
            // let celdaCursosImpartidos = fila.insertCell();
            let celdaTipoProfesor =  fila.insertCell();

            // let btns = fila.insertCell();


            // let btnVer = document.createElement('input');
            // btnVer.type = 'button';
            // btnVer.value = 'Ver';
            // btnVer.name = listaProfesor[i]['_id'];
            // btnVer.classList.add('btn-list');
            // btnVer.addEventListener('click', ftnMostrarProfesor);


            // let btnEliminar = document.createElement('input');
            // btnEliminar.type = 'button';
            // btnEliminar.value = 'Eliminar';
            // btnEliminar.name = listaProfesor[i]['_id'];
            // btnEliminar.classList.add('btn-list');
            // btnEliminar.addEventListener('click', ftnEliminarProfesor);

            celdaNombre.innerHTML = listaProfesor[i]['Nombre'];
            celdaApellido.innerHTML = listaProfesor[i]['Apellido'];
            celdaCedula.innerHTML = listaProfesor[i]['Cedula'];
            celdaTelefono.innerHTML = listaProfesor[i]['Telefono'];
            celdaCorreo.innerHTML = listaProfesor[i]['Correo'];
            // celdaProvincia.innerHTML = listaProfesor[i]['Provincia'];
            // celdaCanton.innerHTML = listaProfesor[i]['Canton'];
            // celdaDistrito.innerHTML = listaProfesor[i]['Distrito'];
            
            
            // celdaDireccionExacta.innerHTML = listaProfesor[i]['DireccionExacta'];
            // celdaGradoAcademico.innerHTML = listaProfesor[i]['GAcademico'];
            // celdaAñosExperiencia.innerHTML = listaProfesor[i]['Aexperiencia'];
            // celdaCursosImpartidos.innerHTML = listaProfesor[i]['CImpartidos'];
            celdaTipoProfesor.innerHTML = listaProfesor[i]['TipoProfesor'];


     
      
            // btns.appendChild(btnVer);
            // btns.appendChild(btnEliminar);
        }
    }

};









function filtrarListaProfesores(){
    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasProfesores = tablaProfesores.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasProfesores.length; i++) {    
        datosFila = filasProfesores[i];
        datos = datosFila.getElementsByTagName('td');
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
