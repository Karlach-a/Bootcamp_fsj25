"use strict";
class Calculador {
    //sumar
    sumar(n1, n2) {
        return n1 + n2;
    }
    //restar
    restar(n1, n2) {
        return n1 - n2;
    }
    //multiplicar 
    multiplicar(n1, n2) {
        return n1 * n2;
    }
    //dividir
    dividir(n1, n2) {
        if (n2 === 0) {
            console.log("no se puede dividir entre 0");
        }
        return n1 / n2;
    }
    //calcular potencia 
    potencia(n1, n2) {
        return Math.pow(n1, n2);
    }
    //factorial de un numero 
    factorial(n1) {
        let resul = 1;
        for (let i = 2; i <= n1; i++) {
            resul *= 1;
        }
        return resul;
    }
}
const calculadora = new Calculador();
console.log("Suma: ", calculadora.sumar(8, 5));
console.log("Resta: ", calculadora.restar(10, 4));
console.log("Multiplicación: ", calculadora.multiplicar(9, 2));
console.log("División: ", calculadora.dividir(11, 3));
console.log("Potencia: ", calculadora.potencia(5, 4));
console.log("Factorial: ", calculadora.factorial(8));
