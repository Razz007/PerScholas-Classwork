// STRINGS

let firstVariable = "Hello World";
firstVariable = 0;
secondVariable = firstVariable;
secondVariable = "Any string";
let myName = "Razz";
let greeting = `Hello, my name is ${myName}`;
// console.log(greeting);

// BOOLEANS

//Replace the blanks so all statements print true
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kevin";

// console.log(a < b);
// console.log(c > d);
// console.log("Name" === "Name");
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false == false);
// console.log(e == "Kevin");
// console.log(a !== b !== c);
// console.log(a === a !== d);
// console.log(48 == "48");

// // The Farm
// let animal = "Panther";
// if (animal === "cow") {
//     console.log(`mooooo`);
// } else {
//     console.log("Hey, You are not a cow")
// }

// Drivers Ed
// let age = 2;
// if (age >= 16) {
//     console.log("Here are the keys!");
// } else {
//     console.log("Sorry, you're too young");
// }

// LOOPS

// The Basics
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Get even
// for (let num = 1; num <= 100; num++) {
// 	if (num % 5 === 0 && num % 3 === 0) {
// 		console.log(` I found ${num}. Three is a crowd. High Five!`);
// 	}
//     else if (num % 5 === 0) {
// 		console.log(`I found a ${num}. Hight five!`);
// 	}

//     else if (num % 3 ===  0){
// 		console.log(`I found a ${num}. Three is a crowd`);
// 	}

//     else {
//         console.log(`${num}`);
//     }
// }

// Savings Account
// let savings = 0;
// let savings = 1;
// while (savings <= 10) {
//     savings += savings;
//     savings++;
// }
// console.log(savings);

// let savings = 1;
// let bank_account = 0;
// while (savings <= 100) {
// 	bank_account += savings;
// 	savings++;
// }
// console.log(
// 	"$" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 3 }).format(bank_account * 2));

// ARRAYS & CONTROL FLOW

// Talk about it
// 1. What are the things in an array called: Answer: Indicies
// 2. Do arrays guarantee those things will be in order > Answer: No
// 3. What real-life thing could you model with an array > Answer: Databases

// Easy Does It
// let qoutes = ["Forest, I wanna go home", "Life is like a box of chocolates", "Mama said not to talk to strangers"];

// Accessing Elements
// const randomThings = [1, 10, "Hello", true];
// console.log(`${randomThings[0]}`);
// randomThings[2] = "World";
// console.log(`${randomThings}`);

// Change Values
// const myArray = [5, 10, 500, 20];
// myArray.push("Aegon"); // add to end of array
// myArray.shift();  // Remove firs element(5) from the array
// myArray.unshift("Bob Marley"); // Add string "Bob Marley" to beginning
// myArray.pop();  // remove string "Aegon", from end of array

// console.log(myArray.reverse()); // reverse array
// 5. reversing the array mutates it. Mutate means changes. The reverse method returns a reference to the same array

// Biggie Smalls
// let num = 101;
// if ( num < 100) {
//     console.log("little number");
// } else {
//     console.log("big number");
// }

// Monkey in the Middle
// let num2 = 6;

// if (num2 < 5) {
//     console.log("little number");
// }
// else if (num2 > 10) {
//     console.log("big number");
// }
// else {
//     console.log("monkey")
// }

// // WHAT's IN YOUR CLOSET

// const kristynsCloset = [
// 	"left shoe",
// 	"cowboy boots",
// 	"right sock",
// 	"GA hoodie",
// 	"green pants",
// 	"yellow knit hat",
// 	"marshmellow peeps",
// ];

// const thomsCloset = [
// 	// Thom's shirts
// 	[
// 		"grey button-up",
// 		"dark grey button-up",
// 		"light blue button-up",
// 		"blue button-up",
// 	],

// 	// Thom's pants
// 	["grey jeans", "jeans", "PJs"],

// 	// Thom's accessories
// 	["wool mittens", "wool scarf", "raybans"],
// ];

// // What's Kristyn wearing?
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// //add raybans after yellow knit hat
// kristynsCloset.splice(6, 0, 'raybans'); 

// // change yellow knit hat to stained knit hat
// kristynsCloset.splice(5, 1, 'stained knit hat');

// // Thom's outfit
// target Thom's grey button-up shirt
// let thomsShirt = thomsCloset[0][0];

// // target Thom's PJs
// let thomsPants = thomsCloset[1][1];

// // target Thom's raybans
// let thomsAccessory = thomsCloset[1][1, 2];

// console.log(thomsShirt);
// console.log(thomsPants);
// console.log(thomsAccessory);
// console.log(`Thom is looking fierce in a ${thomsShirt}, ${thomsPants} and ${thomsAccessory}!`);

// change PJs to Footie pajamas
// thomsCloset[1][2] = "Footie pajamas";
// console.log(thomsCloset);

// console.log(kristynsCloset);