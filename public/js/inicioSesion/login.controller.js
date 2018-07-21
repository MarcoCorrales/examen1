let botonInicio = document.querySelector("#btnInicioSesion");
console.log(botonInicio);
botonInicio.addEventListener("click", getCredencialesUsuario); 



// let botonProyectos = document.querySelector('#btnProyectos');
// btnProyectos.addEventListener('click',mostrarBoton);

// let botonProfesor =  document.querySelector('#btnProfesor');
// btnProfesor.addEventListener('click',mostrarBoton);

// let botonEstudiantes =  document.querySelector('#btnEstudiantes');
// botonEstudiantes.addEventListener('click',mostrarBotonEstudiantes);

// let botonCliente =  document.querySelector('#btnCliente');
// botonCliente.addEventListener('click',mostrarBoton);


// function mostrarBoton(){
//     botonProyectos.classList.add('ocultar');  
//     botonProfesor.classList.add('ocultar'); 
//     botonEstudiantes.classList.add('ocultar');  
//     botonCliente.classList.remove('ocultar'); 
//  }



function getCredencialesUsuario() {
    let correo = document.querySelector("#txtCorreoInicio").value;
    let contrasenna = document.querySelector("#txtContrasennaInicio").value;

    document.querySelector("#btnInicioSesion").classList.add("ocultar");

    let valido = validarCredenciales(correo, contrasenna);

    if (valido) {
        console.log("Acceso permitido");
        redireccionarUsuario();
    } else {
        console.log("Acceso denegado");
        document.querySelector("#btnInicioSesion").classList.remove("ocultar");
    }
}

function validarCredenciales(correo, contrasenna) {
    let valido = autenticarCredenciales(correo, contrasenna);
    return valido;
}

function cerrarSesión() {
    removerCredenciales();
    window.location = "";
}

function redireccionarUsuario() {
    let usuarioAutenticado = getUsuarioAutenticado();

    switch (usuarioAutenticado.TipoUsuario) {
        case 0:
            // acciones de administrador
            // function(){
                // window.location.href = "../../html/general/index2.html";
                window.location.href = "../../html/proyecto/proyecto_listar.html";
                // botonEstudiantes.addEventListener('click',mostrarBotonEstudiantes);
                // document.querySelector("#btnProyectos").classList.remove("ocultar");
            // }
            break;
        case 1:
            // acciones de profesor
                // function(){
                    // window.location.href = "../../html/general/index2.html";
                    window.location.href = "../../html/profesor/profesor_listar.html";
                    // botonEstudiantes.addEventListener('click',mostrarBotonEstudiantes);
                    // document.querySelector("#btnProfesor").classList.remove("ocultar");
                    // }

            break;
        case 2:
            // acciones de estudiante
                // function(){
                    // window.location.href = "../../html/general/index2.html";
                    window.location.href = "../../html/estudiante/indexTablaEstud.html";
                    // botonEstudiantes.addEventListener('click',mostrarBotonEstudiantes);
                    // document.querySelector("#btnEstudiantes").classList.remove("ocultar");
                    // }

            break;  
        case 3:
            // acciones de cliente
                // function(){
                    // window.location.href = "../../html/general/index2.html";
                    window.location.href = "../../html/cliente/cliente_listar.html";
                    // botonEstudiantes.addEventListener('click',mostrarBotonEstudiantes);
                    // document.querySelector("#btnCliente").classList.remove("ocultar");


                    // }

            break;                                       
        default:
            break;
    }
}




