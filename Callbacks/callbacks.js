// Call-back methods ----> .map(), .filter(), .forEach()
// forEach

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
// const panagram = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
// array methods take a coll-back function as an argument
// call-backs are function that will run at a later time



// // .every()
// let test = nums.every(theCallback); // returns either true or false
// // create call-back function
// function theCallback(element) {
//     if (element >= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let test2 = panagram.every((element) => element.length < 8)
// console.log(`The result of our every method check is ${test2}`)

// .filter() Method
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

// const filtered = nums.filter(num => num < 4);
// const filtered2 = panagram.filter(word => word.length % 2 === 0);

// console.log(filtered);
// console.log(filtered2);


// .find() Array Method
// const find1 = nums.find(num => num % 5 === 0); // finds first number divisible by 3
// const find2 = panagram.find(element => element.length >= 5);
// console.log(find1);
// console.log(find2);

// .findIndex() Method
// const findInd = nums.findIndex(num => num % 3 === 0);
// const findInd2 = panagram.findIndex(element => element.length <= 2)
// console.log(findInd);
// console.log(findInd2);

// forEach() Method
// nums.forEach(element => console.log(element * 3)); // returns undefined (forEach does not return)
// panagram.forEach(element => console.log(element + "!"));


// .map() Method
// const map1 = nums.map( x => x * 100);
// const map2 = panagram.map(words => words.toUpperCase());
// console.log(map1);
// console.log(map2);


// .some() Method tests whether at least one element passes the test implemented by the callback function. Returns a boolean value

// const divBy7 = (element) => element % 7 === 0;
// const haveLetter = element => element.includes("a","A");
// console.log(panagram.some(haveLetter));
// console.log(nums.some(divBy7));

// *****.reduce() Method *****

// add all the numbers in the array
// const initialVals = 0;
// const sum = nums.reduce((acumulator, nums) => acumulator + nums, initialVals);
// console.log(sum);

// // concatenate all the words in panagram array
// const concat = panagram.reduce((acumulator, word) => acumulator + " " + word, "");
// console.log(concat);


// .sort() Method

// sort nums array in ascending order
console.log(nums.sort((a, b) => a - b));

// sort nums array in descending order
console.log(nums.sort((a, b) => a - b).reverse());

// sort panagram array in ascending order
console.log(panagram.sort((a, b) => a - b));

// sort panagram array in descending order
console.log(panagram.sort((a, b) => a - b).reverse());