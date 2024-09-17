//declaracion de variable js
var varieable = "karla";
//declaracion de variable = tipo de dato de js
var cadenaTexto = "Karla";
var numero = 1;
var boleano = false;
//Declaracion de array
var arraycito = ["asd", "sdsd", "sdfs"];
var arrayNumerico = [11, 12, 45, 16.5];
//nunca utilizzar
var arrayMalo = ["asd", 12, false];
//Array numerico o string
//Tuplas-> es un array con indice limitado y sus tipos de tados declarado 
var datosUsuario;
datosUsuario = ["Karla", 33];
// funciones en TS
function tipoVoidts() {
    console.log("chauchis");
}
function sumarts() {
    return 2 + 2;
}
function sumarOConcatenar() {
    return 3 + 5;
}
function saludar(nombre) {
    //template string ->plantillas literales -> ingresar un dato JS en un string 
    return "hola como estar? ".concat(nombre);
}
console.log(saludar("Karla"));
