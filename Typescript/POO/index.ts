//Programacion Orientada a Objetos 
//programar las cosas como si fueran objetos 
//es una forma de programar intentando siempre de describir o pensar si la cosas fueran objetos 

//Conceptos principares de POO -> Clases y Los Objetos 
// Clases -> un molden para generar algo 
//Objeto -> lo que podamos crea en base a ese molde 

//Declaracion de clase

class Carro{
    //Caracteristicas generales -> propiedades o atributos de un carro 
    numChasis:number;
    motor:string;
    color:string;
    tipoCombustible:string;
    transmision:string;
    CantKM:string;
    plazas:number;
    frenos:string;
    modelo:string;
    AnioFab:number; 

//Constructir -> Metodo Reservado que nos sirven para instanciar objetos
constructor(numChasisParam:number,motorParam:string,colorparam:string,tipoCombustibleparam:string,transmisionparam:string,CantKMparam:string,plazasparam:number,frenosparam:string,modeloparam:string,anioFabParam:number)
{
    this.numChasis=numChasisParam;
    this.motor =motorParam;
    this.color=colorparam;
    this.tipoCombustible=tipoCombustibleparam;
    this.transmision=transmisionparam;
    this.CantKM=CantKMparam;
    this.plazas=plazasparam;
    this.frenos=frenosparam;
    this.modelo=modeloparam;
    this.AnioFab= anioFabParam;

}



    //metodos ->acciones
//son funciones
encender():void { 
    console.log("brum re brum");

}

apagar():void{
    console.log("chauchis")
}

}

//instanciar crear objetos a traves de una clase-> Crear un objeto 
let autito:Carro =new Carro();
console.log(autito);

//asignamos propiedad a un objeto 

autito.modelo = "Huayra";

console.log(autito);

//asignamos una propiedad al objeto
//autito.modelo ="huayra"
//console.log(autito)

autito.motor ="v12"
console.log(autito);