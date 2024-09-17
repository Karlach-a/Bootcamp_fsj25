/*
//estructuras de contro -> condicionales (funcionan con condiciones)
//IF -> evalua casos verdaderos
//if else -> evalua caso true y false 

let condicion = 10 === "10";
if(condicion){

    console.log("Este codigo se ejecuta en caso true ")
} else {
    console.log("este codigo se ejecuta si da false")
}

/* OPERARDORES DE COMPRACION NUMERICO
Evaluan de manera numerica

mayor que >
menor que <
menor o igual <=t
mayor o igual >=


if(10<20){
    console.log("afirmativo")
}else{
    console.log("negativo")
}

//operador ternario : remplazo de sintaxis para el IF ELSE
//condicion ? codigo true : codigo false

10<10 ? console.log("Afirmativo") : console.log("negativo");

//if else

let variableAux=10;

//preguntamos si es mayor 
if(variableAux<10){
    console.log("afirmativo")

//realizamos una pregunta

}else if(variableAux>5){
    console.log("si es mayor")
}else{
    console.log("no cumplio las espectativa");
}

//bucles o estructuras repetitivas 
//while -> mientras
//colorcar condicion de corte 

let numero=1;

while(numero <10){
    console.log(numero);
    numero++;
}

// do while -> hacer mientras

do{
    console.log(numero);
    numero++;

}while(numero<10 && numero>2){

}*/

//for->funciona por fases 
//for (inicializacion;condicion de corte;incremento o decremento )
for(let numero=1;numero<10 ;numero++){
    console.log(numero);
}

//fase 1= Inicializacion + condicion de corte + ejecutar  + incrementar/decrementar
//fase2 = condicion de corte +ejecutar+incremento


//estructura de dato completa  permite guardar mas de un valor 


let cohorterfsj25=["Erick","Isis","Guille","Bryan","Eduardo","Karla","Claudia","Jared"]


console.log(cohorterfsj25);

//metodos de array
//agrgar valores al final de un array
let variableCompleja = [];
variableCompleja.push("Jairo");//agrega nuevos elementos al final de un array
variableCompleja.push(26)
console.log(variableCompleja);

//Eliminar el valor al final de un array
let datoEliminado=variableCompleja.pop();
console.log(variableCompleja);
console.log(datoEliminado);

//agregar un valor al principio de un array

variableCompleja.unshift("Jorge")//agrega un elemento 
console.log(variableCompleja);

//propiedad de array 

console.log("---Largo del ARRAY ---");
let largor = variableCompleja.length;
console.log(largor);

