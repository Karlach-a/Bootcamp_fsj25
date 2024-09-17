//declaracion de variable js
let varieable="karla";

//declaracion de variable = tipo de dato de js

let cadenaTexto:string = "Karla";
let numero:number=1;
let boleano:boolean = false;

//Declaracion de array

let arraycito:string[] =["asd","sdsd","sdfs"];
let arrayNumerico:number[]=[11,12,45,16.5];

//nunca utilizzar
let arrayMalo:any[]=["asd",12,false];

//Array numerico o string
//Tuplas-> es un array con indice limitado y sus tipos de tados declarado 

let datosUsuario:[string,number];
datosUsuario=["Karla",33];

// funciones en TS

function tipoVoidts():void {
    console.log("chauchis");
}

function sumarts():number{
    return 2+2;
}

function sumarOConcatenar():number|string{
    return  3+5;
}

function saludar(nombre:string):string{
    //template string ->plantillas literales -> ingresar un dato JS en un string 
    return `hola como estar? ${nombre}`
}
console.log(saludar("Karla"));