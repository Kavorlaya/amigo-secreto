// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//array para almacenar los nombres ingresados por el usuario
let amigos = [];

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
        document.getElementById('amigo').value = '';
        console.log(amigos);
        return true;
    }
    
}


