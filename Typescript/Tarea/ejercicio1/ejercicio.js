/*Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.*/
var CabeceraPagina = /** @class */ (function () {
    //constructor'
    function CabeceraPagina(titulo, color, fuentepag) {
        this.titulo = titulo;
        this.color = color;
        this.fuentepag = fuentepag;
        this.alineado = 'izquierda';
    }
    //primer metodo obtenerpropiedades
    CabeceraPagina.prototype.Obtpropiedades = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuentepag: this.fuentepag,
        };
    };
    //segundo metodo alinear titulo 
    CabeceraPagina.prototype.daralineacion = function (alineado) {
        this.alineado = alineado;
    };
    //tercer metodo
    CabeceraPagina.prototype.imprimir = function () {
        console.log("Titulo:".concat(this.titulo));
        console.log("color: ".concat(this.color));
        console.log("fuente:".concat(this.fuentepag));
        console.log("alineacion:".concat(this.alineado));
    };
    return CabeceraPagina;
}());
//ejemplo
var cabecera = new CabeceraPagina('Prueba1', 'Azul', 'Arial');
cabecera.daralineacion('centrado');
cabecera.imprimir();
