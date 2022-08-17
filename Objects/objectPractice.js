// const car = {
// 	make: "Ford",
// 	model: "Taurus",
// 	year: 2019,
// 	color: "Black",
// 	wheels: function() {
// 		console.log(4);
// 	},

// 	newYear: function() {
// 		console.log(2020);
// 	},
// };
// car.wheels();
// car.newYear();

// const house = {
// 	doors: 2,
// 	bedrooms: 3,
// 	color: "white",
// 	windows: function() {
// 		console.log(10);
// 	},
// 	pool: function() {
// 		console.log(true);
// 	},
// };
// house.windows();
// house.pool();

// Exercise 1
// function countChars(str) {

// 	let obj = {};

// 	for (let i = 0; i < str.length; i++) {
// 		let char = str[i];
// 		if (obj.char) {
// 			obj.char++;
// 		} else {
// 			obj[char] = 1;
// 		}
// 	}
//     		return obj;
// }
// console.log(countChars("Hello"));


function denominations(price, cash) {
    let change = cash - price;
    const obj = {};

    // TODO: figure out how to get the values to return as a number
    //let denominations = ["Hundreds", "Fifties", "Twenties", "Tens", "Fives", "Ones"];


    denominations = [100, 50, 20, 10, 5, 1];    
    for (let i = 0; i < denominations.length; i++) {
        let denomination = denominations[i];
        let numOfDenoms = Math.floor(change / denomination);
        obj[denomination] = numOfDenoms;
        change = change % denomination;
    }
    return obj;
}
console.log(denominations(27.85, 100));
