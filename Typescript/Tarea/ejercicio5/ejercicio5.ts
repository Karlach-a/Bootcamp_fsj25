/*EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.*/

abstract class persona {
    protected nombre: string;
    protected apellido: string;
    protected dir: string;
    protected tel: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, dir: string, tel: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dir = dir;
        this.tel = tel;
        this.edad = edad;

    }

    //método que en base a la edad imprima un mensaje si es mayor de edad o no.

    public Mayoredad(): void {
        if (this.edad >= 18) {

            console.log(`${this.nombre} eres mayor de edad`);

        }

        else {
            console.log(`${this.nombre} eres menor de edad`);
        }
    }

    //metodo para mostrar los datos persona
    public abstract mostrar():void;

}

//clase empleado que heredara de persona

class Empleado extends persona { 
   

    private sueldo: number;

    //constructor clase empleado

    constructor(nombre:string,apellido:string,dir:string,tel:string,edad:number,sueldo:number){
        super(nombre,apellido,dir,tel,edad); // con super se llama al constructor de la clase persona
        this.sueldo=sueldo;
    }

    //cargar sueldo

    public cargarsueldo(sueldo:number){
        this.sueldo=sueldo;
        console.log(`su sueldo es de: $${this.sueldo}`);
    }

    //imprimir sueldo

    imprimirsueldo(){
        console.log(`El Sueldo de ${this.nombre} es: $${this.sueldo}`);
    }
    
//implementando el metodo abstracto

public mostrar():void{
    console.log(`Nombre: ${this.nombre} ${this.apellido}`);
    console.log(`Dirección: ${this.dir}`);
    console.log(`Teléfono: ${this.tel}`);
    console.log(`Edad: ${this.edad}`);
    this.Mayoredad();

}

}

const empleado= new Empleado('Karla','Chevez','Barrio La Merced','2664-9654',27,150);

//llamamos a los metodos de la clase empleado

empleado.mostrar();
empleado.imprimirsueldo;

//cargar nuevo sueldo

empleado.cargarsueldo(300);
empleado.imprimirsueldo;



