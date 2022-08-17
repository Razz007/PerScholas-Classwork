// Objects: a collection of zero or more properties
// Property: Key:value pairs(referred to as dictionaries)
// key is a string. value is an object

// Creating an object literal
let cat = {
    name: "Junkie",
    fur: "orange",
    legs: 4,
    favoriteThings: ["yarn", "fish"]
}
// console.log(cat);

// acces a property with dot notation
// console.log(cat.name);
// console.log(cat.fur);
// console.log(cat.legs);

// access properties with brackets
// console.log(cat["name"]);
// console.log(cat["fur"]);
// console.log(cat["legs"]);

// add property to an object
// cat.breed = "calico";
// cat.temperment = "mild";
// cat.tails = 1;

// change object properties
cat.temperment = "angry";
cat.legs = 2;

console.log(cat);
