/*Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
• Define un objeto de la clase Cuenta y llama sus métodos.

*/

class cuenta{
    nombre:string;
    cantidad:number;
    tipocuenta:string;
    numerocuenta:number;

    constructor(nombre:string,cantidad:number,tipocuenta:string,numerocuenta:number){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.tipocuenta=tipocuenta;
        this.numerocuenta=numerocuenta;

    }

    //metodo depositar

    depositar(deposito:number){
        if(deposito<5.00){
            console.log("el valor a depositar debe ser mayor a $5.00");
        }

        else{
            this.cantidad= this.cantidad+deposito;
            console.log(`se ha depositado correctamente la cantidad $ ${deposito.toFixed(2)} y tu saldo actual es de $ ${this.cantidad.toFixed(2)}`);
        }

    }

    //retirar cantidad
    retirar(valor:number){
        if(valor<5.00)
        {
            console.log("No se puede retirar menos de $5.00");

        }
        else if(valor > this.cantidad){
            console.log("No tienes suficiente saldo para retirar");

        }

        else{
            this.cantidad= this.cantidad-valor;
            console.log(`Ha retirado $${valor.toFixed(2)} y su saldo actual es de $${this.cantidad.toFixed(2)}`);
        }

    }

    //mostrar datos

    mostrar(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipocuenta}`);
        console.log(`Número de cuenta: ${this.numerocuenta}`);
    }
}

const Cuenta = new cuenta("Karla Chevez", 100.00, "Ahorros", 1235);

//llamaremos a los metodos
 Cuenta.mostrar()
 Cuenta.depositar(100.0); //Depositamos $100
 Cuenta.retirar(20.0);   // Retiramos
 Cuenta.retirar(3.0);   //retiramos menos de 5
 Cuenta.retirar(150.0); // retiramos mas de lo que tiene la cuenta 