let botonIngresar =  document.querySelector('#btnIngresar');
botonIngresar.addEventListener('click',ocultarBoton);

let botonSalir = document.querySelector('#btnSalir');
botonSalir.addEventListener('click',ocultarBoton);
// botonSalir.classList.add('ocultar'); //lo hice directo en el html y css como una clase, pero también puede ser de esta manera, lo ùnico que pasaría es que por alguna micronésima de segundo, podría ser que el botón se vea

function ocultarBoton(){
    botonIngresar.classList.add('ocultar');  
    botonSalir.classList.remove('ocultar'); 
}

