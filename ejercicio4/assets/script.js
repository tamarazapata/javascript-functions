redSquare = document.getElementById('divRojo')
blueSquare = document.getElementById('divAzul')
greenSquare = document.getElementById('divVerde')
yellowSquare = document.getElementById('divAmarillo')


function aNegro(elemento) {
    elemento.style.backgroundColor = 'black'
}

redSquare.addEventListener("click", () => aNegro(redSquare));
greenSquare.addEventListener("click", () => aNegro(greenSquare));
yellowSquare.addEventListener("click", () => aNegro(yellowSquare));
blueSquare.addEventListener("click", () => aNegro(blueSquare));


function agregarElemento() {
    // Obtenemos el elemento contenedor por su ID
    contenedor = document.getElementById("contenedor");
    contenedor.style.backgroundColor = 'pink'
    // Creamos un nuevo elemento <div>
    nuevoElemento = document.createElement("div");

    // Asignamos un texto al nuevo elemento
    nuevoElemento.textContent = "Elemento agregado";
    // Agregamos el nuevo elemento al contenedor
    contenedor.appendChild(nuevoElemento);
    }
    // Función para eliminar el elemento
    function eliminarElemento() {
    contenedor = document.getElementById("contenedor");
    // Obtenemos todos los elementos <div> dentro del contenedor
    elementos = contenedor.querySelectorAll("div");
    // Verificamos si hay elementos para eliminar
    if (elementos.length > 0) {
    // Eliminamos el último elemento agregado
    contenedor.removeChild(elementos[elementos.length - 1]);
    }
    }

    function pintar(element, color='green') {
        element.style.backgroundColor = color
        return element
    }
// Agregamos un evento para escuchar las teclas presionadas
document.addEventListener("keydown", function(event) {
    // Comprobamos si la tecla presionada es "A" o "a"
    if (event.key === "a" || event.key === "A") {
    // Si es "A" o "a", llamamos a la función agregarElemento
    agregarElemento();
    } else if (event.key === "d" || event.key === "D") {
    // Si es "D" o "d", llamamos a la función eliminarElemento
    eliminarElemento();
    }});
    