// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let Amigos = [];

function asignarTextoAlElemento(elemento, texto) {    
 let elementoHTML = document.querySelector(elemento);
 elementoHTML.innerHTML = texto;
 return;
}

function agregarAmigo(){
 nombreIngresado = document.getElementById("Amigo");
 nombre = nombreIngresado.value;
    if (nombre == ""){
        alert("Escribir un nombre");
    }else if(amigos.includes(nombre)) {
        alert("Este nombre ya está registrado");
        nombreIngresado.value = "";
    }
    else{
        amigos.push(nombre);
        nombreIngresado.value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${Amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}