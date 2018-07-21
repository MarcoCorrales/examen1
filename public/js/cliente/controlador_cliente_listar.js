'use srticit';

// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaClientes = document.querySelector('#tblClientes');

//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){ftnFiltrarListaClientes()});

//loads------------------------------------------------------
window.onload = function(){
    ListarClientes();
};

function ListarClientes(){
    let ListaCliente = obtenerListaClientes();
    let tbody = document.querySelector('#tblClientes tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < ListaCliente.length; i++){
        
        if(ListaCliente[i]['desactivado']){
            continue;
        } else { 
        
            let fila = tbody.insertRow();
            let celdaNombreEmpresa = fila.insertCell();
            let celdaNombreContacto = fila.insertCell();
            let celdaTelefonoContacto = fila.insertCell();
            let celdaCorreoContacto = fila.insertCell();
            // let btns = fila.insertCell();
    

            // let btnVer = document.createElement('input');
            // btnVer.type = 'button';
            // btnVer.value = 'Ver';
            // btnVer.name = ListaCliente[i]['_id'];
            // btnVer.classList.add('btn-list');
            // btnVer.addEventListener('click', ftnMostrarCliente);

            // let btnEliminar = document.createElement('input');
            // btnEliminar.type = 'button';
            // btnEliminar.value = 'Eliminar';
            // btnEliminar.name = ListaCliente[i]['_id'];
            // btnEliminar.classList.add('btn-list');
            // btnEliminar.addEventListener('click', ftnEliminarProyecto);

            celdaNombreEmpresa.innerHTML = ListaCliente[i]['Nombre'];
            celdaNombreContacto.innerHTML = ListaCliente[i]['PrimerNombre'] + " " + ListaCliente[i]['PrimerApellido']  ;
            celdaTelefonoContacto.innerHTML = ListaCliente[i]['Telefono'];
            celdaCorreoContacto.innerHTML = ListaCliente[i]['Correo'];
        
            // btns.appendChild(btnVer);
            // btns.appendChild(btnEliminar);
        }
    }

};

function  ftnFiltrarListaClientes (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasClientes = tablaClientes.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasClientes.length; i++) {    
        datosFila = filasClientes[i];
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


