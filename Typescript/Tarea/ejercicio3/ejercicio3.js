/*Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.*/
var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }
    //set
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    //get
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    //metodo mostrar los datos
    Cancion.prototype.mostrar = function () {
        console.log("Titulo:".concat(this.titulo));
        console.log("geneto: ".concat(this.genero));
        console.log("Autor: ".concat(this.autor));
    };
    return Cancion;
}());
var cancion = new Cancion("28", "rap");
cancion.setAutor("Agust-D");
cancion.mostrar();
console.log("Autor:", cancion.getAutor());
