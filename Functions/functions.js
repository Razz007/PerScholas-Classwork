// ************** Defining Functions **************

// function sayHello() {
//     console.log('Hello');
// }
// sayHello();

// function expression
// const sayHi = function() {    
//     console.log('Hi!');
// }
// sayHi();

// arrow function 
// const sayHey = () => {
//     console.log('Hey!');
// }
// sayHey();

// ************** Function with Parameters **************

// function add(num1, num2) {    // ()    list of parameters
//     return num1 + num2;
// }
// console.log(add(10, 25));
// console.log(add(2, 3, 4, 5))     // 2 + 3 + undefined + undefined
// console.log(add(5, 5))   
// console.log(add(10, 1))
// console.log(add(3, 8))

// console.log(add('Bob', 'The Builder'))

// ************** Exercises **************

// function computeArea(width, height) {
//     return "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + (width * height) + " square units."
// }
// console.log(computeArea(5, 10));

// Arrow Function
// const computeArea = (width, height) => {
//     return "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + (width * height) + " square units."
// }
// console.log(computeArea(20, 35));

// Planet has Water
// function planetHasWater(planet) {
//     if (planet === "Earth") {
//         return "Yes, the " + planet + " has water";
//     } else {
//         return "No, the " + planet + " does not have water";
//     }
// }
// console.log(planetHasWater("Earth"));

// ************ Planet has water arrow function **************

// const planetHasWater = planet => {
//     if (planet === "Earth") {
//         return "Yes, the " + planet + " has water";
//     } else {
//         return "No, the " + planet + " does not have water";
//     }
// }
// console.log(planetHasWater("Moon"));

// Fizz buzz
for (let i = 0; i < 100;) {
    console.log(
        (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "buzz") || i); //(++i) ++ operator before the operand increments before returning it
    // valIf true     valIfFalse
}
    

//     let paid = 10;
//     let cost = 4;
//     let change = paid - cost;
//     let quarters = 0;
//     while (change >= 0.25) {
//         quarters++;
//         change -= 0.25;
//     }

// console.log("number of quarters is: " + quarters);

