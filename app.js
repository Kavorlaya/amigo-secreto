// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//array para almacenar los nombres ingresados por el usuario
let amigos = [];
let amigoEnArray = "";
let listaDeAmigos = (document.getElementById("listaAmigos"));

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


    

    



