// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log(`My first name is ${firstName} and my last name is ${lastName} and here is a math formular: ${2 + 4} 
- notice the type inference, when printing to the console. It is now a string, NOT number`)

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2

console.log(Number(year) + number)

console.log(parseInt("102a2131231")); // Changes all possible numbers it can, one by one - when it arrives at 'a', it crashes and stops
console.log(Number("102a2321312")) // Gives NaN, as this is not a number - expects to recieve convertible string-number

const newYear = + year + number; // Converts the string to a number -- prefix operator der ændrer en string til number
console.log(newYear)


// --------------------------------------
