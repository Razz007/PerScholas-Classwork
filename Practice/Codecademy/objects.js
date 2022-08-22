// Introduction to Objects (1/10)

/* 
JavaScript objects are containers storing related data and functionality, 
*/

// ******** Creating Object Literals (2/10) ********

// Write your fasterShip object literal below

// let fasterShip = {
//   color: 'silver',
//   'Fuel Type': 'Turbo Fuel'
// }

// Accessing Properties (3/10)
// Using Dot notation

// let spaceship = {
//     homePlanet: "Earth",
//     color: "silver",
//     "Fuel Type": "Turbo Fuel",
//     numCrew: 5,
//     flightPath: ["Venus", "Mars", "Saturn"]
// };

// let crewCount = spaceship.numCrew;
// let planetArray = spaceship.flightPath;

// Using bracket notation (4/10)

// let spaceship = {
// 	"Fuel Type": "Turbo Fuel",
// 	"Active Mission": true,
// 	homePlanet: "Earth",
// 	numCrew: 5,
// };

// let propName = "Active Mission";

// // Write your code below
// let isActive = spaceship["Active Mission"];
// console.log(isActive);

// Property Assignment (5/10)

/* We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property. 
*/

// let spaceship = {
// 	"Fuel Type": "Turbo Fuel",
// 	homePlanet: "Earth",
// 	color: "silver",
// 	"Secret Mission": "Discover life outside of Earth.",
// };

// spaceship.color = "glorious gold";
// spaceship.numEngines = 5;
// delete spaceship["Secret Mission"];

// ********** Methods (6/10) **********

/* When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does. 
*/

// let retreatMessage =
// 	"We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// // Write your code below
// const alienShip = {
// 	retreat() {
// 		console.log(retreatMessage);
// 	},
// 	takeOff() {
// 		console.log("Spim... Borp... Glix... Blastoff!");
// 	},
// };
// alienShip.retreat();
// alienShip.takeOff();

// Nested Objects (7/10)

// let spaceship = {
// 	passengers: null,
// 	telescope: {
// 		yearBuilt: 2018,
// 		model: "91031-XLT",
// 		focalLength: 2032,
// 	},
// 	crew: {
// 		captain: {
// 			name: "Sandra",
// 			degree: "Computer Engineering",
// 			encourageTeam() {
// 				console.log("We got this!");
// 			},
// 			"favorite foods": ["cookies", "cakes", "candy", "spinach"],
// 		},
// 	},
// 	engine: {
// 		model: "Nimbus2000",
// 	},
// 	nanoelectronics: {
// 		computer: {
// 			terabytes: 100,
// 			monitors: "HD",
// 		},
// 		"back-up": {
// 			battery: "Lithium",
// 			terabytes: 50,
// 		},
// 	},
// };

// // create a capFave variable assign captains favorite foods
// let capFave = spaceship.crew.captain["favorite foods"][0];
// spaceship.passengers = [
// 	{
// 		name: "Captain Kirk",
// 		age: 140,
// 	},
// ];
// let firstPassenger = spaceship.passengers[0];

// Pass by Reference (8/10)

/* 
Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).
*/

// let spaceship = {
// 	"Fuel Type": "Turbo Fuel",
// 	homePlanet: "Earth",
// };

// // Write your code below
// let greenEnergy = (obj) => {
// 	obj["Fuel Type"] = "avocado oil";
// };

// let remotelyDisable = (obj) => {
// 	obj.disabled = true;
// };

// greenEnergy(spaceship);

// remotelyDisable(spaceship);

// console.log(spaceship);


// Looping through Objects (9/10)

/* 
Loops are programming tools that repeat a block of code until a condition is met. We learned how to iterate through arrays using their numerical indexing, but the key-value pairs in objects aren’t ordered! JavaScript has given us alternative solution for iterating through objects with the for...in syntax .

for...in will execute a given block of code for each property in an object.
*/

// let spaceship = {
//     crew: {
//     captain: { 
//         name: 'Lily', 
//         degree: 'Computer Engineering', 
//         cheerTeam() { console.log('You got this!') } 
//         },
//     'chief officer': { 
//         name: 'Dan', 
//         degree: 'Aerospace Engineering', 
//         agree() { console.log('I agree, captain!') } 
//         },
//     medic: { 
//         name: 'Clementine', 
//         degree: 'Physics', 
//         announce() { console.log(`Jets on!`) } },
//     translator: {
//         name: 'Shauna', 
//         degree: 'Conservation Science', 
//         powerFuel() { console.log('The tank is full!') } 
//         }
//     }
// }; 

// // Write your code below
// for (const crewMember in spaceship.crew) {
//     console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
//     }

// for (let crewMember in spaceship.crew) {
//   console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
// };


/* 
********** Review **********

Let’s review what we learned in this lesson:

Objects store collections of key-value pairs.

Each key-value pair is a property—when a property is a function it is known as a method.

An object literal is composed of comma-separated key-value pairs surrounded by curly braces.

You can access, add or edit a property within an object by using dot notation or bracket notation.

We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.

We can navigate complex, nested objects by chaining operators.

Objects are mutable—we can change their properties even when they’re declared with const.

Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.

We can iterate through objects using the For...in syntax.
*/


