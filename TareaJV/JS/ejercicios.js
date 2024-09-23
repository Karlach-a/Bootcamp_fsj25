/*EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un 
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.*/

function edadP() {
    let Personaedad = document.getElementById('edad').value;
    Personaedad >= 18 ? document.getElementById('resp').value = " eres mayor de edad" : document.getElementById('resp').value = "No eres mayor de edad";
}

/*EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.*/


function notafinal() {

    let nombre = document.getElementById('nombre').value;
    let carnet = document.getElementById('carnet').value;
    let examen = document.getElementById('examen').value * 0.20;
    let tareas = document.getElementById('tareas').value * 0.40;
    let asistencia = document.getElementById('asistencia').value * 0.10;
    let investigacion = document.getElementById('investigacion').value * 0.30;
    let calculo;

    if (examen <= 10 && tareas <= 10 && asistencia <= 10 && investigacion <= 10) {
        calculo = examen + tareas + asistencia + investigacion;
        document.getElementById('notafinal').value = "Nota final de " + nombre + " " + "con carnet " + carnet + " es " + calculo;
    }

    else {
        document.getElementById('notafinal').value = "introdusca nota de 0 a 10";
    }

}

/*EJERCICIO 3:
CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.*/

function aumentoSalarial() {

    let nombre = document.getElementById('nombree').value;
    let salario = document.getElementById('salario').value;
    let categoria = document.getElementById('categoria').value;

    if (categoria == document.getElementById('a').value) {
        Calcaumento = salario * 0.15;
        let totalapagar = parseFloat(salario) + parseFloat(Calcaumento);
        document.getElementById('aumento').value = "Usted " + nombre + " esta en la categoria " + document.getElementById('a').value + " de aumento salarial y su aumento es de: " + Calcaumento.toFixed(2) + " y su salario a recibir es " + totalapagar;
    }

    else if (categoria == document.getElementById('b').value) {
        Calcaumento = salario * 0.30;
        let totalapagar = parseFloat(salario) + parseFloat(Calcaumento);
        document.getElementById('aumento').value = nombre + " Usted esta en la categoria " + document.getElementById('b').value + " de aumento salarial y su aumento es de: " + Calcaumento.toFixed(2) + " y su salario a recibir es " + totalapagar;
    }

    else if (categoria == document.getElementById('c').value) {
        Calcaumento = salario * 0.10;
        let totalapagar = parseFloat(salario) + parseFloat(Calcaumento);
        document.getElementById('aumento').value = nombre + " Usted esta en la categoria " + document.getElementById('c').value + " de aumento salarial y su aumento es de: " + Calcaumento.toFixed(2) + " y su salario a recibir es " + totalapagar;
    }

    else if (categoria == document.getElementById('d').value) {
        Calcaumento = salario * 0.20;
        let totalapagar = parseFloat(salario) + parseFloat(Calcaumento);
        document.getElementById('aumento').value = nombre + " usted esta en la categoria " + document.getElementById('d').value + " de aumento salarial y su aumento es de: " + Calcaumento.toFixed(2) + " y su salario a recibir es " + totalapagar;
    }

    else {
        document.getElementById('aumento').value = "selecciona categoria";
    }

}

/*EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo.*/

function enteros() {
    let entero1 = document.getElementById('entero1').value;
    let entero2 = document.getElementById('entero2').value;

    //evalua si el numero ingresado es un numero entero
    if (entero1 % 1 != 0 || entero2 % 1 != 0) {
        document.getElementById('resultado').value = "Introduzca solo numeros enteros";

    }
    else {
        if (entero1 > entero2) {
            document.getElementById('resultado').value = " el primer numero ingresado es mayor que el segundo numero ingresado"
        }
        else if (entero2 > entero1) {
            document.getElementById('resultado').value = " el segundo numero ingresado es mayor que el primer numero ingresado"
        }

    }

}

/*
EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario*/

function DescuentoAuto() {

    let modelo = document.getElementById('modelo').value;
    let Preciovehiculo = document.getElementById('preciovehiculo').value;

    //compara el valor que se eligio 
    if (modelo == document.getElementById('FFO').value) {
        Calcdes = Preciovehiculo * 0.05;
        let totalapagar = parseFloat(Preciovehiculo) - parseFloat(Calcdes);
        document.getElementById('descuentov').value = "EL Vehiculo que compro fue " + modelo + " Tiene un descuento del 5%, por lo tanto su precio final es de " + totalapagar;
    }

    else if (modelo == document.getElementById('FF').value) {
        Calcdes = Preciovehiculo * 0.10;
        let totalapagar = parseFloat(Preciovehiculo) - parseFloat(Calcdes);
        document.getElementById('descuentov').value = "EL Vehiculo que compro fue " + modelo + " Tiene un descuento del 10%, por lo tanto su precio final es de " + totalapagar;
    }

    else if (modelo == document.getElementById('FE').value) {
        Calcdes = Preciovehiculo * 0.20;
        let totalapagar = parseFloat(Preciovehiculo) - parseFloat(Calcdes);
        document.getElementById('descuentov').value = "EL Vehiculo que compro fue " + modelo + " Tiene un descuento del 20%, por lo tanto su precio final es de " + totalapagar;
    }
}

/* Ejercicio 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%*/



function descuentoviaje() {
    let origen = document.getElementById('origen').value;
    let destino = document.getElementById('destino').value;
    let precioViaje = document.getElementById('precioViaje').value;
    let Calcdescuento = 0;
    let total;

    //compara la eleccion de lugar de destino 
    switch (destino) {
        case document.getElementById('lacostadelsol').value:
            Calcdescuento = precioViaje * 0.05;
            break;

        case document.getElementById('panchimalco').value:
            Calcdescuento = precioViaje * 0.10;
            break;

        case document.getElementById('panchimalco').value:
            Calcdescuento = precioViaje * 0.15;
            break;



    }
    total = parseFloat(precioViaje) - parseFloat(Calcdescuento);
    document.getElementById('descuentovi').value = "su total a pagar es  " + total;
}


/* ejercicio 7- Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.*/


function valores() {
    let cantidadNegativos = 0;
    let cantidadPositivos = 0;
    let cantidadMultiplosDe15 = 0;
    let acumuladoPares = 0;

    // recorre los 10 datos ingresados 
    for (let i = 0; i < 10; i++) {
        let numero = parseInt(document.getElementById(`n${i}`).value); //insertamos valor dinamico con ${} que evaluara JV

        if (isNaN(numero)) {
            alert(`El numero ${i + 1} no es valido. Ingrese un valor entero.`);
            return;
        }

        // contar positivos y negativos
        if (numero < 0) {
            cantidadNegativos++;
        } else if (numero > 0) {
            cantidadPositivos++;
        }

        // contar multiplos de 15
        if (numero % 15 === 0) {
            cantidadMultiplosDe15++;
        }

        // acumular pares
        if (numero % 2 === 0) {
            acumuladoPares += numero;
        }
    }

    // para mostrar resultados
    document.getElementById('negativos').textContent = `Cantidad de valores negativos: ${cantidadNegativos}`;
    document.getElementById('positivos').textContent = `Cantidad de valores positivos: ${cantidadPositivos}`;
    document.getElementById('multiplosDe15').textContent = `Cantidad de multiplos de 15: ${cantidadMultiplosDe15}`;
    document.getElementById('acumuladoPares').textContent = `Acumulado de numeros pares: ${acumuladoPares}`;

}

/*EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.*/

function tablas() {

    let numerotabla = document.getElementById('numerom').value;
    let tabla = document.getElementById('tabla');

    let getiqueta = "<ul>" //para imprimir las tablas en lista

    for (let i = 1; i <= 10; i++) {
        getiqueta += `<li>${numerotabla} x ${i} = ${numerotabla * i}</li>`;
    }
    getiqueta += "</ul>";

    // Mostrar la tabla de multiplicar
    tabla.innerHTML = getiqueta;
}



/*ejercicio 9 : Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida” */



function temperatura() {
    let cel = document.getElementById('celcious').value;
    let fa = 0;


    fa = (cel * 9 / 5) + 32;//fromula para convertir grados de celcious a farenheit 

    if (fa >= 14 && fa < 32) {
        document.getElementById('f').textContent = `La temperaturas en fareneheit es ${fa}` + " y es Temperatura baja";
    }

    else if (fa >= 32 && fa < 68) {
        document.getElementById('f').textContent = `La temperaturas en fareneheit es ${fa}` + " y es Temperatura adecuada";
    }

    else if (fa >= 68 && fa < 96) {
        document.getElementById('f').textContent = `La temperaturas en fareneheit es ${fa}` + " y es Temperatura alta";
    }

    else {
        document.getElementById('f').textContent = `La temperaturas en fareneheit es ${fa}` + " y es desconocida";
    }



}

/*
EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.*/

function promedioedades() {

    //Promedio Mañana
    let m1 = document.getElementById('m1').value || 0;
    let m2 = document.getElementById('m2').value || 0;
    let m3 = document.getElementById('m3').value || 0;
    let m4 = document.getElementById('m4').value || 0;
    let m5 = document.getElementById('m5').value || 0;


    let promediom = (parseInt(m1) + parseInt(m2) + parseInt(m3) + parseInt(m4) + parseInt(m5)) / 5;
    document.getElementById('promediom').textContent = "El promedio de las edades de estudiantes del turno de la mañana es de " + parseInt(promediom);

    //Promedio tarde
    let t1 = document.getElementById('t1').value || 0;
    let t2 = document.getElementById('t2').value || 0;
    let t3 = document.getElementById('t3').value || 0;
    let t4 = document.getElementById('t4').value || 0;
    let t5 = document.getElementById('t5').value || 0;
    let t6 = document.getElementById('t6').value || 0;


    let promediot = (parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4) + parseInt(t5) + parseInt(t6)) / 6;
    document.getElementById('promediot').textContent = "El promedio de las edades de estudiantes del turno de la tarde es de " + parseInt(promediot);

    //promedio noche

    let n1 = document.getElementById('n1').value || 0;
    let n2 = document.getElementById('n2').value || 0;
    let n3 = document.getElementById('n3').value || 0;
    let n4 = document.getElementById('n4').value || 0;
    let n5 = document.getElementById('n5').value || 0;
    let n6 = document.getElementById('n6').value || 0;
    let n7 = document.getElementById('n7').value || 0;
    let n8 = document.getElementById('n8').value || 0;
    let n9 = document.getElementById('n9').value || 0;
    let n10 = document.getElementById('n10').value || 0;
    let n11 = document.getElementById('n11').value || 0;


    let promedion = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5) + parseInt(n6) + parseInt(n7) + parseInt(n8) + parseInt(n9) + parseInt(n10) + parseInt(n11)) / 11;
    document.getElementById('promedion').textContent = "El promedio de las edades de estudiantes del turno de la noche es de " + parseInt(promedion);
}

function Promedios() {
    let edadmanana = [
        parseInt(document.getElementById('m2').value) || 0,
        parseInt(document.getElementById('m3').value) || 0,
        parseInt(document.getElementById('m1').value) || 0,
        parseInt(document.getElementById('m4').value) || 0,
        parseInt(document.getElementById('m5').value) || 0
    ];

    let promediom = edadmanana.reduce((a, b) => a + b, 0) / edadmanana.length; // sumar los elementos del arreglo 
    let edadtarde = [
        parseInt(document.getElementById('t1').value) || 0,
        parseInt(document.getElementById('t2').value) || 0,
        parseInt(document.getElementById('t3').value) || 0,
        parseInt(document.getElementById('t4').value) || 0,
        parseInt(document.getElementById('t5').value) || 0,
        parseInt(document.getElementById('t6').value) || 0

    ];
    let promediot = edadtarde.reduce((a, b) => a + b, 0) / edadtarde.length;

    let edadnoche = [
        parseInt(document.getElementById('n1').value) || 0,
        parseInt(document.getElementById('n2').value) || 0,
        parseInt(document.getElementById('n3').value) || 0,
        parseInt(document.getElementById('n4').value) || 0,
        parseInt(document.getElementById('n5').value) || 0,
        parseInt(document.getElementById('n6').value) || 0,
        parseInt(document.getElementById('n7').value) || 0,
        parseInt(document.getElementById('n8').value) || 0,
        parseInt(document.getElementById('n9').value) || 0,
        parseInt(document.getElementById('n10').value) || 0,
        parseInt(document.getElementById('n11').value) || 0

    ];

    let promedion = edadnoche.reduce((a, b) => a + b, 0) / edadnoche.length; 
    //Imprimir promedios

    let resultado = `
    Promedio Turno Mañana: ${promediom}<br>
    Promedio Turno Tarde: ${promediot}<br>
    Promedio Turno Noche: ${promedion}<br>
`;


    /*Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
    promedio de edades mayor.*/

    let mayorPromedio = Math.max(promediom, promediot, promedion);
    if (mayorPromedio === promediom) {
        resultado += "El turno con el promedio de edades mayor es: Mañana";
    } else if (mayorPromedio === promediot) {
        resultado += "El turno con el promedio de edades mayor es: Tarde";
    } else {
        resultado += "El turno con el promedio de edades mayor es: Noche";
    }

    document.getElementById('resultadoedad').innerHTML = resultado;





}