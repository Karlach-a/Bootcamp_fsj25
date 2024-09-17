/**
 * realiza una funcion que reciba un array numerico y retorne un array completamente nuevo 
 * solamente con los numeros que sean multiplo de 3 y que la suma de todos sus numeros de menos de 100.
 * 
 */
/*
function mostrar(num){
 numr=[]  // captara el numero que se le coloque a la funcion
 for(let i=0; i<= num;i++){
        numr.push(i);
 }
return numr

}

let numero = mostrar(100);
*/


let i = 0;
let MT= [];//donde guardamos los multiplos de 3 


function numMul(arr) {
 
    while (i < arr.length) {

        if (arr[i] % 3 == 0) {
            console.log(arr[i]);
            MT.push(arr[i]);
        }
        i++;
    }
    return MT;
}

let num = Array.from({ length: 100 }, (_, index) => index + 1); //indicamos secuencia de numeros
numMul(num);


//

function filtrarMultiplosDeTres(arr){
    let resultado = [];
    let suma;
    let i=0;

    while(i < arr.length){
        if(arr[i] % 3 === 0 && suma < 100){
            suma += arr[i];
            resultado.push(arr[i]);
        }

        else{
            return resultado;
        }
        i++;
    }

    return resultado;
}

let array = [12,9,21,33,45,50,12,17]
console.log(filtrarMultiplosDeTres(array));