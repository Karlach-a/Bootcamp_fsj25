//4 pilares POO
/*
Herencia
Polimorfismo

Encapsulamiento
Abstraccion
*/
var Person = /** @class */ (function () {
    function Person(nameParam, ageParam, duiParam) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    Person.prototype.respirar = function () {
        console.log("affff");
    };
    return Person;
}());
var personita = new Person("Karla", 33, "84148465-6");
personita.name = "hector";
console.log(personita);
