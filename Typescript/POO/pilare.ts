//4 pilares POO

/*
Herencia 
Polimorfismo

Encapsulamiento -> limitar el acceso  a algo de moodificacores de Acceso public, private, protected
Abstraccion -> proporciona metodos para poder interactuar algo limitado , Nos da herramientas para interactura con lo que este limitado de una clase 
*/

/*modificadores de acceso 
public-> Todo el mundo puede acceder
Private-> algo que es complementamente privado , solo la misma clase tendra acceso
PRotected-> tendra acceso la misma clase y sus hijos 


*/

class Person{
private name:string;
private age:number;
private dui:string;

constructor(nameParam:string,ageParam:number,duiParam:string){
    this.name=nameParam;
    this.age=ageParam;
    this.dui=duiParam;
}

respirar(){
    console.log("affff");
}

//Getters y Setters

getName():string{
    return this.name;

}

setAge(ageParam:number){
    this.age=ageParam;

}

}

let personita = new Person("Karla", 33, "84148465-6");
personita.name="hector";
console.log(personita);
