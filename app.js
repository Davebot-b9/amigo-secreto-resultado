// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = document.getElementById("listaAmigos");
let inputAmigo = document.getElementById("amigo");
let resultadoAmigoSorteado = document.getElementById("resultado");

function agregarAmigo() {
    // validar que el input no esté vacío
    if (inputAmigo.value === "") return alert("Debes ingresar un nombre de amigo");
    // crear un elemento li y agregarle el valor del input
    let amigo = document.createElement("li");
    // agregar el elemento li a la lista de amigos
    amigo.textContent = inputAmigo.value;
    listaDeAmigos.appendChild(amigo);
    // limpiar el input
    inputAmigo.value = "";
    console.log(listaDeAmigos);
}

function sortearAmigo() {
    let amigos = Array.from(listaDeAmigos.children);
    //sortear un amigo
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(amigoSorteado);
    //mostrar el amigo sorteado
    resultadoAmigoSorteado.textContent = `El amigo secreto es: ${amigoSorteado.textContent}`;
}