// Loops (1/10)

/* loops iterate or repeat an action until a specific condition is met. When the condition is met, the loop stops and the computer moves on to the next part of the program. */

// Repeatin tasks manually (2/10)

// const vacationSpots1 = ["Japan", "Barbados", "Antartica"];
// console.log(vacationSpots1[0]);
// console.log(vacationSpots1[1]);
// console.log(vacationSpots1[2]);

// The for loop (3/10)

// for (let nums = 5; nums <= 10; nums++) {
//   console.log(nums);
// }

// Looping in reverse (4/10)
// The loop below loops from 0 to 3.

// for (let counter = 3; counter >= 0; counter--){
//   console.log(counter);
// }

// Looping through arrays (5/10)
// const vacationSpots = ["Bali", "Paris", "Tulum"];

// Write your code below
// for (let i = 0; i < vacationSpots.length; i++) {
// console.log("I would love to visit " + vacationSpots[i]);
// }

// Nested loops (6/10)

// const bobsFollowers = ["Jim", "Jack", "Jesse", "Jake"];
// const tinasFollowers = ["Shirley", "Jack", "Jesse"];
// const mutualFollowers = [];
// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//     mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
// }
// console.log(mutualFollowers);

// The While loop
// Convert a for loop into a while loop

//for loop
// for (let counterOne = 0; counterOne < array.length; counterOne++) {
//     // console.log(counterOne);
// }

// while loop
// let counterTwo = 1;
// while (counterTwo < 5) {
//     // console.log(counterTwo);
//     counterTwo++;
// }

// Exercise (7/10)
// const cards = ['diamond', 'spade', 'heart', 'club'];

// 1. Below the cards array, declare a variable, currentCard, with the let keyword but don’t assign it a value.

// let currentCard;

// 2.Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.

// while (currentCard != 'spade') {

//random number from 0 to 3. number will be used to index the cards array
// currentCard = cards[Math.floor(Math.random() * 4)];
//     console.log(currentCard);
// }

// ******** do...While Statements ********

/* A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:

let countString = "";
let i = 0;

do {
    countString = countString + i;
    i++;
} while (i < 5);
console.log(countString);
 */

// const firstMessage = 'I will print this';
// const secondMessage = 'I will not print!';

// // A do while with a stopping condition that evaluates to false
// do {
//  console.log(firstMessage)
// } while (true === false);

// // A while loop with a stopping condition that evaluates to false
// while (true === false){
//   console.log(secondMessage)
// };

// Exercise (8/10)

// let cupsOfSugarNeeded = 2;
// let cupsAdded = 0;

// do {
//     cupsAdded++;
// } while (cupsAdded < cupsOfSugarNeeded) {
//     console.log(cupsAdded);
// }

// The Break keyword (9/10)
// The break keyword allows programs to “break” out of the loop from within the loop’s block.

// const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// for (let i = 0; i < rapperArray.length; i++) {

// 	console.log(rapperArray[i]);

// 	if (rapperArray[i] === "Notorious B.I.G.") {
// 		break;
// 	}
// }
// console.log("And if you don't know, now you know.");

/* Review

*Loops perform repetitive actions so we don’t have to code that process  manually every time.

A nested for loop is a loop inside another loop

while loops allow for different types of stopping conditions
Stopping conditions are crucial for avoiding infinite loops.

do...while loops run code at least once— only checking the stopping condition after the first execution

The break keyword allows programs to leave a loop during the execution of its block
*/

// ********** Higher order Functions (1/4) **********

/*  Higher-order functions are functions that accept other functions as arguments and/or return functions as output.

Using abstraction allows us to write more modular code, which is easier to read and debug.
*/

// Functions as Data (2/4)

/* const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name); 
*/

// Functions as Parameters (3/4)

/* A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call functions that get passed in as parameters callback functions. Callback functions get invoked during the execution of the higher-order function.
 */

// const addTwo = (num) => {
// 	return num + 2;
// };

// const checkConsistentOutput = (func, val) => {
// 	let checkA = val + 2;
// 	let checkB = func(val);

// 	// check if checkA value is equal to checkB val.  If true return the result of the callback function if false return the string 'inconsistent results.

// 	return checkA === checkB ? func(val) : "inconsistent results";

// 	// log the invocation of checkConsistentOuput with two args: the addTwo() and any number
// };
// 	console.log(checkConsistentOutput(addTwo, 5));


// ******** Higher-Order Functions Review (4/4) ********

/* Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.

We can work with functions the same way we work with any other type of data, including reassigning them to new variables.

JavaScript functions are first-class objects, so they have properties and methods like any other object.

Functions can be passed into other functions as parameters.

A higher-order function is a function that either accepts functions as parameters, returns a function, or both. 
*/

// ********** Iterators **********
// (1/9)

// Using forEach() method executes a function once for each array element

// const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

// artists.forEach((artist) => {
// 	console.log(artist + " is one of my favorite artists.");
// });

// Using the map() method creates a new array with the results of calling squareNumbers() function on every element in the array

// const numbers = [1, 2, 3, 4, 5];

// const squareNumbers = numbers.map((number) => {
// 	return number * number;
// });

// console.log(squareNumbers);

// The filter() method creates a copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// const things = ["desk", "chair", 5, "backpack", 3.14, 100];

// const onlyNumbers = things.filter((thing) => {
// 	return typeof thing === "number";  // if a number is present, return it
// });

// console.log(onlyNumbers);

// Iterate forEach (2/9)

// const fruits = ["mango", "papaya", "pineapple", "apple"];

// // Iterate over fruits
// fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));

// Iterate map() (3/9)

// const animals = [
// 	"Hen",
// 	"elephant",
// 	"llama",
// 	"leopard",
// 	"ostrich",
// 	"Whale",
// 	"octopus",
// 	"rabbit",
// 	"lion",
// 	"dog",
// ];

// Create the secretMessage array below
// Use map() to loop through array and return the first character of each animal

// const secretMessage = animals.map((animal) => {
// 	return animal[0];  // returns the first character of each animal
// });

// console.log(secretMessage.join(""));

// // Use map() to divide bigNumbers by 100 and save in smallNumbers variable
// const bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below

// const smallNumbers = bigNumbers.map((numbers) => {
// 	return numbers / 100;
// });
// console.log(smallNumbers);


// Filter method (4/9)

/* .filter() returns an array of elements after filtering out certain elements from the original array. 
*/

// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// // Call .filter() on randomNumbers below
// const smallNumbers = randomNumbers.filter((number) => {
// 	return number < 250;
// });

// console.log(smallNumbers);

// // Call .filter() to filter out elements with lengths > 7
// const favoriteWords = [
// 	"nostalgia",
// 	"hyperbole",
// 	"fervent",
// 	"esoteric",
// 	"serene",
// ];

// // Call .filter() on favoriteWords below
// const longFavoriteWords = favoriteWords.filter((words) => {
// 	return words.length > 7;
// });

// console.log(longFavoriteWords);


// .findIndex() Method
/* Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function. 
*/

// const animals = [
// 	"hippo",
// 	"tiger",
// 	"lion",
// 	"seal",
// 	"cheetah",
// 	"monkey",
// 	"salamander",
// 	"elephant",
// ];
// const foundAnimal = animals.findIndex(animal1 => {
//   return animal1 === "elephant";
// });
// console.log(foundAnimal);

// const startsWithS = animals.findIndex((animal) => {
// 	return animal[0] === "s" ? true : false;
// });
// console.log(startsWithS)


// ****** The .reduce() Method (6/9) ********

/* The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array 
*/

// const newNumbers = [1, 3, 5, 7];
// const newSum = newNumbers.reduce((accumulator, currentValue) => {
// 	console.log("The value of accumulator: ", accumulator);
// 	console.log("The value of currentValue: ", currentValue);
// 	return accumulator + currentValue;
// }, 10);
// console.log(newSum);


// ******** The some()  and every() method (7/9) ********
/*
tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
*/

// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// // Something is missing in the method call below

// console.log(words.some((word) => {
//   return word.length < 6;
// }));

// // Use filter to create a new array
// const interestingWords = words.filter((word) => {
// 	return word.length > 5;
// });

// // Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => {
//     return word.length > 5; 
// }));


// Choose the right iterator (8/9)

// const cities = [
// 	"Orlando",
// 	"Dubai",
// 	"Edinburgh",
// 	"Chennai",
// 	"Accra",
// 	"Denver",
// 	"Eskisehir",
// 	"Medellin",
// 	"Yokohama",
// ];

// const nums = [1, 50, 75, 200, 350, 525, 1000];

// //  Choose a method that will return undefined
// cities.forEach((city) => console.log("Have you visited " + city + "?"));

// // Choose a method that will return a new array
// const longCities = cities.filter((city) => city.length > 7);

// // Choose a method that will return a single value
// const word = cities.reduce((acc, currVal) => {
// 	return acc + currVal[0];
// }, "C");

// console.log(word);

// // Choose a method that will return a new array
// const smallerNums = nums.map((num) => num - 5);

// // Choose a method that will return a boolean value
// nums.some((num) => num < 0);



// Review (9/9)

/*

.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

.map() executes the same code on every element in an array and returns a new array with the updated elements.

.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

.reduce() iterates through an array and takes the values of the elements and returns a single value.
All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.

Instructions
If you want to challenge yourself:

Define a callback function before you use it in a iterator.

Chain two iteration methods on the same array.

Use the optional arguments in an iterator to include the index or the entire array. (Check out MDN’s Array iteration methods page for more information)

Use .reduce() to take a multi-layered array and return a single layer array from scratch.
*/
