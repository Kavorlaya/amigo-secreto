// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//array para almacenar los nombres ingresados por el usuario
let amigos = [];

function ingresoNombre(){

    //función donde se va a almacenar el nombre ingresado por el usuario
    //en la lista de amigos 

    let amigoIngresado = (document.getElementById('amigo').value).toString();
    return amigoIngresado;
}

function validoIngreso(){
    if (amigoIngresado.trim() == "") {
        console.log("La cadena está vacía o solo contiene espacios en blanco, intente nuevamente")

    }


}