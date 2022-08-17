// Array Methods

// Exercise 1

// function maxOfTwoNumbers(a, b) {
// 	if (a > b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }

// console.log(maxOfTwoNumbers(30, 50)); // Output: 50

// Exercise 2
// Define a function that takes 3 arguments and returns the largest

// function maxOfThree(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;

//     } else if (num2 > num1 && num2 > num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }
// console.log(maxOfThree(12, 25, 62));  // Output: 62

// Exercise 3 is function a vowel

// function isCharAVowel(char) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         return true;
// }
//         return false;
// }
// console.log(isCharAVowel("a")); // Output: true
// console.log(isCharAVowel("b")); // Output: false


// Exercise 4

// function sumArray(...numbers) {
//     let sum = 0;
//     for (let index = 0; index < numbers.length; index++) {
//         sum += numbers[index];
//     }
//     return sum;
// }
// console.log(sumArray(4, 10, 20, 30)); // Output: 64

// Exercise 5
// function multiplyArray takes an array of numbers an returns the product of those nembers

// function multiplyArray(numbers) {
//     let product = 1;
// for(let num of numbers){
//         product *= num;
//     }
//     return product;
// }
// console.log(multiplyArray([1, 2, 3, 4, 5])); // output: 120

// Exercise 6
// function expression numArgs returns the length of number of arguments passed to the function

// const numArgs = function(...args) {
//     return args.length;
// }
// console.log(numArgs(1, 2, 3, 4, 5)); // output: 5

// Exercise 7
//function reverseString returns the string in reverse

// function reverseString(str) {
//     let reversed = 0;
//     for (let index = str.length - 1; index >= 0; index--) {
//         reversed += str[index];
//     }
//     return reversed;
// }
// console.log(reverseString("Hello"));

// Exercise 8

// function expression longestStringArray that takes an array of strings and returns the longest string

// function longestStringArray(...strings) {
//     let longest = "";
//     for (let index = 0; index < strings.length; index++) {
//         if (strings[index].length > longest.length) {
//             longest = strings[index];
//         }
//     }
//     return longest;
// }
// console.log(longestStringArray("all", "banana", "cabbage", "dog", "elephant"));

// Exercise 9
// function stringsLongerThan takes an array of strings and a number as arguments and returns an array of strings that are longer than the number passed to the function

// function stringsLongerThan(strings, num) {
//     const longStr = [];
//     for (let index = 0; index < strings.length; index++) {
//         if (strings[index].length > num) {
//             longStr.push(strings[index]);
//         }
//     }
//     return longStr;
// }
// console.log(stringsLongerThan(["Say", "Hello", "World", "!"], 3));


// ************** Challenge addList **************

// function addList(...nums) {
// if(!nums) {
//     return 0;
// }
//     let sum = 0;
//     for (let index = 0; index < nums.length; index++) {
//         sum += nums[index];
//     }
//     return sum;
// }
// console.log(addList(5, 10, 15, 20));

//  ****************** Homework week 1 ******************

// ********** Homework Challenge For Loops **********

// // let countDown = 10;
// for (let countDown = 10; countDown >= 0; countDown--) {
//     console.log(countDown);
// }

// ********** Homework Challenge For Loops and Arrays **********
// const synonyms = ["fantastic", "wonderful", "great"];
// const greetings =[];
// for (let index = 0; index < synonyms.length; index++) {
//     greetings.push("Have a " + synonyms[index] + " day!");
// }
// console.log(greetings);

// ********** Homework Challenge For Loops an Array Indices **********
// const firstNames = ["John", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lanister",];
// const places = ["The Wall", "Winterfell", "Kings Landing"];
// const bios = [];

// for (let index = 0; index < firstNames.length; index++) {
//     bios.push("My name is " + firstNames[index] + " " + lastNames[index] + " and I am from " + places[index]);
// }
// console.log(bios);

// ********** Homework Challenge For Loops Calculating Array Elements **********
// const increaseByTwo = [1, 2, 3, 4, 5];
// const addTwo = [];
// for (let index = 0; index < increaseByTwo.length; index++) {
//     addTwo.push(increaseByTwo[index] + 2);
// }
// console.log(addTwo);

// Practice using two functions
// function multiplyByNineFifths(number) {
//     return number * (9 / 5);
// };

// function getFahrenheit(celsius) {
//     return multiplyByNineFifths(celsius) +32;
// };
// getFahrenheit(15);

// *************** Array methods
//forEach();
// .filter();
// .map(); 
// .reduce();
// .join();
// .pop();
// .push();
// .shift();
// .unshift();
// .splice();
