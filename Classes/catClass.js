// Exercise 1

// class Cat {
//     constructor(name, legs, color) {
//         this.name = name;
//         this.legs = legs;
//         this.color = color;
//     }

//     purr() {
//         console.log("I am purring");
//     }

//     walking() {
//         console.log("I am walking");
//     }

//     eating() {
//         console.log("I am eating");
//     }
// }

// const coolCat = new Cat("Charlie", 4, "Orange");
// const badCat = new Cat("Odin", 2, "Green");

// console.log(coolCat, badCat);
// coolCat.walking();
// badCat.eating();


// Exercise 2

class Pirate {
    constructor(name, legs, boat) {
        this.name = name;
        this.legs = legs;
        this.boat = boat;
    }

    sound() {
        console.log("Aaargh");
    }

    patch() {
        console.log("I have a patch on my eye");
    }

    woodenLeg() {
        console.log("I have two wooden legs");
    }
}

    let pirate1 = new Pirate("Ichobob", 4, "Big Booty");
    let pirate2 = new Pirate("Black Eye", 1, "Black Pearl");
    let pirate3 = new Pirate("One Leg", 2, "Mystery Ghost");



pirate1.woodenLeg();
pirate1.patch();


// Bonus Exercise

// class Vehicle {
//     constructor(make, model, year, color) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const freight = [];
// for (let i = 0; i < 100; i++) {
//     freight.push(new Vehicle("Ford", "F-150", "2018", "Red"));
// }

// console.log(freight);
