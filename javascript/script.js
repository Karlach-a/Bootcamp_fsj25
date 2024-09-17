//imprimir  todas las pocisiones de un array numerico

function recorrerArray() {
    // code goes here

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);

    }


}

let array = [1, 2, 3, 4, 5];
console.log(array[0]);

// recorrer un array y devolver un array con los numeros pares
let i = 0;
let arrayAux = [];//array donde guardamos los numeros pares

function numParesArray(arr) {
    if (arr.legth == 0) {//validamos si el array tienen datos
        return arr;//devolvemos un array vacio
    }

 
    while (i < arr.length) {

        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
            arrayAux.push(arr[i]);
        }
        i++;
    }
    return arrayAux;
}

let arraycito = [1,2,3,4,5,6,7,8];
numParesArray(arraycito);