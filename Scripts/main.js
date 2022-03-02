let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/vuelopogo1.jpg') {
      miImage.setAttribute('src','images/reinayobrera.jpg');
    } else {
      miImage.setAttribute('src', 'images/vuelopogo1.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduce tu nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Bienvenido hormiga ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido hormiga ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}