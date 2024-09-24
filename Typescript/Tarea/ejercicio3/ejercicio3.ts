/*Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.*/

class Cancion{

    public titulo:string;
    public genero:string;
    private autor:string;

    constructor(titulo:string , genero:string){
        this.titulo = titulo;
        this.genero = genero;
        this.autor="";
    }

    //set
    setAutor(autor:string){
        this.autor=autor;
    }

    //get

    getAutor(){
        return this.autor;
    }

    //metodo mostrar los datos

mostrar(){
    console.log(`Titulo:${this.titulo}`);
    console.log(`geneto: ${this.genero}`);
    console.log(`Autor: ${this.autor}`);
}


}

const cancion=new Cancion("28","rap");
cancion.setAutor("Agust-D");
cancion.mostrar();
console.log("Autor:",cancion.getAutor());