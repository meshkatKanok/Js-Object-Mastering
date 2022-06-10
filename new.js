class Person {
    constructor(fristName, lastName, salery) {
        this.fristName = fristName;
        this.lastName = lastName;
        this.salery = salery;
    }
}
const heroPerson = new Person('hero', 'balam', 2000);
console.log(heroPerson)
const frindlyPerson = new Person('help', 'balam', 2500);
console.log(frindlyPerson)

function Person1(fristName, lastName, salery) {
    this.fristName = fristName;
    this.lastName = lastName;
    this.salery = salery;
}
const HeroTWo = new Person1('kanok', 'reza', 200050);
console.log(HeroTWo);