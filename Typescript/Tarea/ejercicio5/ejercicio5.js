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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var persona = /** @class */ (function () {
    function persona(nombre, apellido, dir, tel, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dir = dir;
        this.tel = tel;
        this.edad = edad;
    }
    //método que en base a la edad imprima un mensaje si es mayor de edad o no.
    persona.prototype.Mayoredad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " eres mayor de edad"));
        }
        else {
            console.log("".concat(this.nombre, " eres menor de edad"));
        }
    };
    return persona;
}());
//clase empleado que heredara de persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    //constructor clase empleado
    function Empleado(nombre, apellido, dir, tel, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, dir, tel, edad) || this; // con super se llama al constructor de la clase persona
        _this.sueldo = sueldo;
        return _this;
    }
    //cargar sueldo
    Empleado.prototype.cargarsueldo = function (sueldo) {
        this.sueldo = sueldo;
        console.log("su sueldo es de: $".concat(this.sueldo));
    };
    //imprimir sueldo
    Empleado.prototype.imprimirsueldo = function () {
        console.log("El Sueldo de ".concat(this.nombre, " es: $").concat(this.sueldo));
    };
    //implementando el metodo abstracto
    Empleado.prototype.mostrar = function () {
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.dir));
        console.log("Tel\u00E9fono: ".concat(this.tel));
        console.log("Edad: ".concat(this.edad));
        this.Mayoredad();
    };
    return Empleado;
}(persona));
var empleado = new Empleado('Karla', 'Chevez', 'Barrio La Merced', '2664-9654', 27, 150);
//llamamos a los metodos de la clase empleado
empleado.mostrar();
empleado.imprimirsueldo;
//cargar nuevo sueldo
empleado.cargarsueldo(300);
empleado.imprimirsueldo;
