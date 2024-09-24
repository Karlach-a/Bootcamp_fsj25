/*Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.*/

class CabeceraPagina {

    //atributos
    private titulo: string;
    private color: string;
    private fuentepag: string;
    private alineado: string;

    //constructor'
    constructor(titulo: string, color: string, fuentepag: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuentepag = fuentepag;
        this.alineado = 'izquierda';
    }

    //primer metodo obtenerpropiedades
    public Obtpropiedades(): { titulo: string; color: string; fuentepag: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuentepag: this.fuentepag,
        };
    }

    //segundo metodo alinear titulo 
    public daralineacion(alineado: 'centrado' | 'derecha' | 'izquierda'): void {
        this.alineado = alineado;
    }

    //tercer metodo
    public imprimir(): void {
        console.log(`Titulo:${this.titulo}`);
        console.log(`color: ${this.color}`);
        console.log(`fuente:${this.fuentepag}`);
        console.log(`alineacion:${this.alineado}`);

    }


}

//ejemplo

const cabecera = new CabeceraPagina('Prueba1', 'Azul', 'Arial');
cabecera.daralineacion('centrado');
cabecera.imprimir(); 