// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//array para almacenar los nombres ingresados por el usuario
let amigos = [];
let amigoEnArray = "";
let listaDeAmigos = (document.getElementById("listaAmigos"));
let amigoSorteado = (document.getElementById("resultado"));
let indiceAmigo = 0;

function ingresoNombre(){

    //función donde se va a almacenar el nombre ingresado por el usuario
    //en la lista de amigos 

    let amigoIngresado = (document.getElementById('amigo').value).toString();
    return validoIngreso(amigoIngresado);
}

function validoIngreso(amigo){
    //valido que el campo no esté vacio, si lo está le informo al usuario
    if (amigo.trim() === "") {
        alert("Por favor, inserte un nombre");
        return;

    } else {
        //caso contrario agrego el nombre ingresado al array de nombres
        // y limpio el campo de entrada para un nuevo ingreso.
        amigos.push(amigo);
        //limpio el campo para el ingreso de un nuevo dato
        document.getElementById('amigo').value = '';
        console.log(amigos);
        //limpio la lista de amigos para que se cargue con las novedades.
        limpiaListaAmigos();
        //llamo a la función que recorre el array y carga la lista de amigos en pantalla.
        return ingresoAmigoALista(amigos);
    }
    
}

function limpiaListaAmigos(){
    listaDeAmigos.innerHTML = "";
}

function ingresoAmigoALista(amigos){
    let htmlItem = '';

    for (let i = 0; i < amigos.length; i++){
        htmlItem +=`<li>${amigos[i]} </li>`;

    };

    listaDeAmigos.innerHTML = htmlItem;

}

function validoArrayAmigosVacio(amigos){
    if (amigos.length === 0){
        alert("Debe ingresar al menos un amigo")
        //validoIngreso(amigo);
    }

}
//función con la lógica para elegir un elemento del array al azar.
function generaAmigoAleatorio(amigos){

    let cantidadAmigos = amigos.length;
    //calculo de una posición aleatoria dentro del array
    let amigoAleatorio = Math.floor(Math.random() * cantidadAmigos) + 1;
    console.log(amigoAleatorio);
    return amigoAleatorio;
}

function sortearAmigo(){
    //Valido que se haya cargado al menos una persona
    validoArrayAmigosVacio(amigos);
    //cargo una variable con el amigo que surja de llamar al generador aleatorio.
    amigoAleatorio = generaAmigoAleatorio(amigos);
    //llamo a la función que se encarga de mostrar el resultado por pantalla
    return mostrarAmigo(amigoAleatorio);
}

function mostrarAmigo(amigoAleatorio){

    let htmlItem = "";
    //guardo el índice de la posición en donde está el amigo que salió sorteado.
    let indiceAmigoenArray = amigos[amigoAleatorio - 1];
    htmlItem = `<li>${indiceAmigoenArray}</li>`;
    amigoSorteado.innerHTML = htmlItem; 

}


    

    



