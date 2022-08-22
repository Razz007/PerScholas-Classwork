class Hamster {
    constructor(name) {
        this.name = name;
        this.owner = "";
        this.price = 15;
    }

    wheelRun() {
        console.log("squeak squeak");
    }

    eatFood() {
        console.log("nibble nibble");
    }

    getPrice() {
        return this.price;
    }
}
// instantiate an object from Hamster
const newHamster = new Hamster("Squeky", "Razz");
console.log(newHamster);

class Person {
    constructor(name) {
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getWeight() {
        return this.weight;
    }

    greet() {
        console.log(`Hi I am ${Person.name}`);
    }

    eat() {
        return this.eat++, this.mood++;
    }

    ageUp() {
        return this.age++, this.height++, this.weight++, this.mood--, this.bankAccount += 10;
    }

    buyHamster() {
        this.hamsters.push(Hamster), this.mood += 10, this.bankAccount - this.getPrice();
    }
}