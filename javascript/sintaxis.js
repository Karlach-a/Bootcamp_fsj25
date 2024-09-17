console.log("imprimiendo en la consola");

//operadores matematicos//


let resta = 4-2;
let division= 135/5;
let multiplicacion= 1354*356;
let residuo= 10 % 2;
let suma = 2+2;
console.log(suma);
console.log(resta);
console.log(division);
console.log(multiplicacion);
console.log(residuo);

//concatenacion- unir valores  y cualquiera de los dos es un string
let sumaFalsa = 2+ "2";
console.log(sumaFalsa);

//operadores logicos
//ejecutamos comparaciones


//la igualdad solo compara el valor de las cosas 
let igualdad =10 == "10";

//igualdad estricta 

let Igualdadestricta=10==="10";
console.log(igualdadEstricta);

//desigualdad

let desigualdad = 10 != 10;
console.log(desigualdad);

//desigualdad estricta , compara si los valores y el dipo de datos es diferente

let desigualdadestricta = 10 !== 10;
console.log(desigualdadestricta);

//&& segunda comparacion
//para que el operador and de true ambas comparaciones tienen que dar true 



let operadorAND = 10 =="10" && 10==="10";
console.log(operadorAND);

// || operador or da true si alguna de las condiciones da true 

let operadorOR = 10 =="10" || 10 =="10";
console.log(operadorOR);

//declaracion de funciones
//una funcion es una porcion de codigo que hace algo en concreto 
//ventaja se vuelve reutilizable 
//function palabra reservada para expresar una funcion 
//nombreFuncion esto es remplazado por el nombre de la funcion normalmente verbos 


function nombreFuncion(){
console.log("hola te saluda la funcion");

}

//llamar a ejecutar una funcion 
//nombre()

nombreFuncion();

//Tipos de funcion 
//funcion tipo void --> Vacia 
function tipoVoid(){
    console.log("soy una funcion tipo void");
}

tipoVoid();

//Tipo REturn

function tipoReturn(){
    console.log("HOla se puede? Si ")
    retrun("soy una funcion tipo Return");
}

tipoReturn();

//tipoReturn();
//console.log(tipoReturn())

let ejecucion1= tipoVoid();
let ejecucion2 = tipoReturn();

console.log(ejecucion1);
console.log(ejecucion2);

//funciones con parametros->informacion que vienen de fuera

function sumar(num1,num2){
    return num1+num2;
}

let resultado= sumar(15,5); //se puede guardar en variables el resultado de una funcion 
console.log(resultado); //NaN error NotaNumber->no es un numero loq ue se intenta aplicar a un operador matermatico

//funcion flecha
//declaracion
/*
se declara con constante 
CONSTANTE nombreFuncion asignamos con el signo de = 
luego los () para parametro
y luego la flecha => luego se colocan directamente las {}
const funcionFlecha = () => { log() }
*/
const funcionFlecha = () =>{

}

//callback una funcion que recibe otra funcion para qeu funcione es decir que depende de otra 
 function funcionCallback(funcion){
    
    //recibi una funcion por lo tanto la ejecuto 
    funcion();
 }

 function funcionAuxiliar(){
    console.log("estoy funcionando pero desde el callback")
 }
 
 funcionCallback(funcionAuxiliar);

 //callback con funcionflecha Anonima

 //callback con funcionflecha anonima

 funcionCallback(() => {console.log("Te saludo desde la funcion anonima")});
 funcionCallback(function (){
    console.log("hola, desde una funcion anonima expresada");})


 //estructura de control 


