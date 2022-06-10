const normalPerson = {
        fristnName: 'rahim',
        lastName: 'Uddin',
        Salary: 15000,
        //anonimous Function
        getFullName: function() {
            console.log(this.fristnName, this.lastName)

        },
        chargeBill: function(amount, tips, tax) {
            console.log(this);
            this.Salary = this.Salary - amount - tips - tax;
            return this.Salary;
        }
    }
    // normalPerson.chargeBill(200);
    // console.log(normalPerson.Salary);
const heroPerson = {
    fristnName: 'Hero',
    lastName: 'Balam',
    Salary: 25000,
}

const friendlyPerson = {
        fristnName: 'Hero',
        lastName: 'Golam',
        Salary: 25000,
    }
    // normalPerson.chargeBill();
    // const heroBulid = normalPerson.chargeBill.bind(heroPerson);
    // heroBulid(2000);
    // heroBulid(3000);
    // heroBulid(4000);
    // normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
    // normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
    // console.log(heroPerson.Salary);
    // normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
    // console.log(friendlyPerson.Salary);
    // console.log(normalPerson.Salary);
normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40]);
console.log(heroPerson.Salary);