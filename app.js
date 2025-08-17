// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //array para almacenar los nombres ingresados por el usuario
let amigoEnArray = ""; //va a guardar el amigo elegido en el array
let listaDeAmigos = (document.getElementById("listaAmigos")); //variable que tendrá el contenido de la lista de amigos
let amigoSorteado = (document.getElementById("resultado")); //variable que contendrá el amigo elegido en el sorteo
let indiceAmigo = 0; //variable que tiene el índice del elemento, dentro del array de amigos.

function ingresoNombre(){ //función que almacenará el nombre ingresado por el usuario en el array de amigos 

    let amigoIngresado = (document.getElementById('amigo').value).toString();
    return validoIngreso(amigoIngresado);
}

function validoIngreso(amigo){ //valida que el campo no esté vacio, si lo está le informa al usuario
    if (amigo.trim() === "") {
        alert("Por favor, inserte un nombre");
        return;

    } else {//Si el campo no está vacio, se agrega el amigo al array y se limpia el campo de entrada para un nuevo ingreso.
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        //console.log(amigos);
        limpiaListaAmigos();
        //llamo a la función que recorre el array y carga la lista de amigos en pantalla.
        return ingresoAmigoALista(amigos);
    }
    
}

function limpiaListaAmigos(){
    listaDeAmigos.innerHTML = "";
}

function ingresoAmigoALista(amigos){ //recorre con un for la lista y el contenido lo muestra en la página.
    let htmlItem = '';

    for (let i = 0; i < amigos.length; i++){
        htmlItem +=`<li>${amigos[i]} </li>`;
    };

    listaDeAmigos.innerHTML = htmlItem;

}

function validoArrayAmigosVacio(amigos){ //valida que no esté vacio el array. De estarlo, no se realiza el sorteo y se avisa al usuario
    if (amigos.length === 0){
        alert("Debe ingresar al menos un amigo");
        return true; //variable de control (flag)
        }else {
            return false //variable de control (flag)
        };
}
                
function generaAmigoAleatorio(amigos){  //lógica para elegir aleatoriamente el índice del elemento dentro del array de amigos.
    let cantidadAmigos = amigos.length; //limito los valores que la fórmula debe tomar para elegir.
    let amigoAleatorio = Math.floor(Math.random() * cantidadAmigos) + 1; 
    //console.log(amigoAleatorio);
    return amigoAleatorio;
}

function sortearAmigo(){ //realiza la lógica del sorteo
    if(validoArrayAmigosVacio(amigos)){ //si el flag fue "true" entonces el array está vacio y no se realiza el sorteo.
        return; 
    }else{
        amigoAleatorio = generaAmigoAleatorio(amigos); //variable que contendrá al amigo que salió en el sorteo
        return mostrarAmigo(amigoAleatorio); //llamo a la función que tiene que mostrar el resultado en la página.
    }
}

function mostrarAmigo(amigoAleatorio){

    let htmlItem = "";
    let indiceAmigoenArray = amigos[amigoAleatorio - 1]; //guardo el índice de la posición donde está el amigo que salió sorteado
    htmlItem = `<li>El amigo secreto es: ${indiceAmigoenArray}</li>`;
    amigoSorteado.innerHTML = htmlItem; 

}


    

    



