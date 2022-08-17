// ************** Variables **************

/*
* var, let, const

** var and let are both used for variable decleration but the difference is:
** var is function scoped( is defined throughout the program)
** var allows you to declare a variable multiple times even it it has been defined previously
* Example:

console.log(x); //calling x before the definition returns undefined
var x = 5;
console.log(x); // calling x after the definition returns 5

Output: 
undefined
5

** let is block scoped
** You cannot declare a variable more than once with let
* Example:
// Calling y after the definition using let will return 10
let y = 10;
console.log(y); // y will log 10

calling z before the definition using let will return an error
console.log(z); // z will return: "Uncaught ReferenceError: z is not defined"
let z = 3;

Output:
10
"Uncaught ReferenceError: z is not defined" 
*/

// ************** Extra Exercise **************

// let box1 = 10;
// let box2 = 3;
// let temp;
// temp = box1;
// console.log("temp is now " + temp);
// box1 = box2
// console.log("box1 is now " + box1);
// box2 = temp;
// console.log("box2 is now " + box2);

// let num1 = 25;
// let result;
// if (num1 >= 0 && num1 > 100) {
//     result = "Num is positive and greater than 100";
// } else if (num1 >= 0 && num1 < 100) {
//     result = "Num is positive and less that 100";
// } else {
//     result = "num is Negative";
// }
//  console.log(result);

// ************** Grades Exercise **************

// let grade = 88;
// let gradeResult = "";
// if (grade >= 90) {
//     gradeResult = "A";
// } else if (grade >= 80) {
//     gradeResult = "B";
// } else if (grade >= 70) {
//     gradeResult = "C";
// } else if (grade >= 60) {
//     gradeResult = "D";
// } else {
//     gradeResult = "F";
// }

// console.log(gradeResult);


// ************** Switch Statement **************

// let number = 5;
// switch (number) {
// 	case 1:
// 		console.log("case " + number);
// 		break;
// 	case 2:
// 		console.log("case " + number);
// 		break;
// 	case 3:
// 		console.log("case " + number);
// 		break;
// 	case 4:
// 		console.log("case " + number);
// 		break;
// 	case 5:
// 		console.log("case " + number);
// 		break;

// 	default:
//         console.log("Give me a number dude!")
// 		break;
// }

// // ************** Nested Case **************

// let num2 = 6;
// switch (num2) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("case " + num2);
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("case " + num2);
//         break;
//     default:
//             console.log("Gimme somth'n dude!");
//         break;
// }


// ************** Ternary operator **************

// let lighting = "dark";
// lighting === "dark" ? "It's dark" : "It's light";
// console.log(lighting);

// ************** Exercise 1 ***************

let letter = "A";

switch (letter) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log(letter + " is a vowel");
        break;
    default:
        console.log(Letter + " Is not a Vowel");
        break;
}
// ************ Exercise 2 Terenayr Operator ************

let number = 3;

oddEven = number % 2 === 0 ? "It's even" : "It's odd";
console.log(oddEven);














