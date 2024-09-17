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

class Person {
    private name: string;
    private age: number;
    private dui: string;

    constructor(nameParam: string, ageParam: number, duiParam: string) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }

    respirar() {
        console.log("affff");
    }

    //Getters y Setters

    getName(): string {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getDui() {
        return this.dui;
    }

    setAge(ageParam: number) {
        this.age = ageParam;
    }


}

let personita = new Person("Karla", 33, "84148465-6");
//personita.name = "hector";
console.log(personita);
console.log(personita.getName());


class Developer extends Person{
    private exp:number;
    private techSkills:string[];
    private softSkills:string[];
    private gitUser:string;
    private area:string;
    private projects:string[];

    constructor(nameParam:string,ageParam:number,duiParam:string,expParam:number,techSkillsParam:string[],softSkillsParam:string[],gitUserParam:string,areaParam:string,projectsParam:string[]){
        super(nameParam,ageParam,duiParam);
        this.exp = expParam;
        this.techSkills = techSkillsParam;
        this.softSkills = softSkillsParam;
        this.gitUser = gitUserParam;
        this.area = areaParam;
        this.projects = projectsParam;
    }

    getArea():string{
        return this.area;
    }

    respirar(): void {
        console.log("Sniff sniff");
    }
}

let developercito = new Developer("Will",19,"1234567-8",3,["Javascript","HTML","CSS","BOOTSTRAP","TYPESCRIPT"],["Comunicacion Efectiva","Proactivo","Liderazgo","Autocritica"],"willGitUser","Backend Developer",["APIS"]);
developercito.getArea();


personita.respirar();
developercito.respirar();