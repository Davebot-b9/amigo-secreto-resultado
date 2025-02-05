// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = document.getElementById("listaAmigos");
let inputAmigo = document.getElementById("amigo");
let resultadoAmigoSorteado = document.getElementById("resultado");
let friendContainer = document.querySelector(".friend-container");
let mensaje = document.getElementById("mensaje");

function agregarAmigo() {
    // validar que el input no esté vacío
    if (inputAmigo.value === "") return mostrarMensaje("Debes ingresar un nombre de amigo");
    // validar que el input solo contenga letras y espacios
    if (!/^[a-zA-Z]+$/.test(inputAmigo.value)) return mostrarMensaje("El nombre del amigo solo puede contener letras sin espacios");
    // validar que el amigo no esté repetido
    if (Array.from(listaDeAmigos.children).some((amigo) => amigo.textContent.toLowerCase() === inputAmigo.value.toLowerCase())) {
        return mostrarMensaje("El amigo ya fue agregado");
    }
    // validar que tenga al menos 3 caracteres el inputAmigo
    if (inputAmigo.value.length < 3) return mostrarMensaje("El nombre del amigo debe tener al menos 3 caracteres");
    // crear un elemento li y agregarle el valor del input
    let amigo = document.createElement("li");
    amigo.textContent = inputAmigo.value;

    // crear un botón de eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = '<img src="assets/delete.png" alt="Eliminar">';
    botonEliminar.classList.add("button-remove");
    botonEliminar.onclick = function() {
        listaDeAmigos.removeChild(amigo);
        actualizarVisibilidadContenedor();
    };

    // agregar el botón de eliminar al elemento li
    amigo.appendChild(botonEliminar);

    // agregar el elemento li a la lista de amigos
    listaDeAmigos.appendChild(amigo);
    // limpiar el input
    inputAmigo.value = "";
    console.log(listaDeAmigos);
    actualizarVisibilidadContenedor();
}

function sortearAmigo() {
    let amigos = Array.from(listaDeAmigos.children);
     //validar si hay amigos para sortear
    if (amigos.length === 0) return mostrarMensaje("No hay amigos para sortear");
    // validar que haya más de tres amigos
    if (amigos.length < 3) return mostrarMensaje("Deben haber al menos 3 amigos para sortear");
    //sortear un amigo
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(amigoSorteado);
    mostrarMensaje("Hemos sorteado a tu amigo secreto");
    //mostrar el amigo sorteado
    resultadoAmigoSorteado.textContent = `El amigo secreto es: ${amigoSorteado.textContent}`;
    document.getElementById('seccionListaAmigo').style.display = 'none';
    // si ya se sorteó, deshabilitar el botón de sortear
    disableButtonReset('botonSortear');
}

function eliminarAmigo() {
    //validar si hay amigos para eliminar
    if (listaDeAmigos.children.length === 0) return mostrarMensaje("No hay amigos para eliminar");
    //eliminar el último amigo
    listaDeAmigos.removeChild(listaDeAmigos.lastChild);
    actualizarVisibilidadContenedor();
}

function actualizarVisibilidadContenedor(){
    //validar si hay amigos para mostrar el contenedor
    if(listaDeAmigos.children.length > 0){
        friendContainer.classList.remove("hidden");
    }else{
        friendContainer.classList.add("hidden");
    }
}

function resetearLista(){
    //validar si hay amigos para eliminar
    if (listaDeAmigos.children.length === 0) return mostrarMensaje("No hay amigos para resetear la lista");
    //limpiar la lista de amigos
    listaDeAmigos.innerHTML = "";
    resultadoAmigoSorteado.textContent = "";
    //mostrar el mesaje original
    mostrarMensaje("Digite el nombre de sus amigos");
    enableButtonReset('botonSortear');
    actualizarVisibilidadContenedor();
}

function enableButtonReset(id){
    // habilitar el botón de sortear
    document.getElementById(id).disabled = false;
}

function disableButtonReset(id){
    // deshabilitar el botón de sortear
    document.getElementById(id).disabled = true;
}

function mostrarMensaje(texto){
    mensaje.textContent = texto;
}

enableButtonReset('botonSortear');
actualizarVisibilidadContenedor();