// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const sum = + numberOne + numberTwo;
console.log(sum)
console.log(parseFloat(numberOne) + parseFloat(numberTwo))

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const totalAmount = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2) 
// Bemærk at toFixed har konverteret vores float til en String
console.log(totalAmount)
console.log(anotherTotalAmount)

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;


// Show in the console the avg. with 5 decimals

const totalAverage = ((one + two + three)/3).toFixed(5)
console.log(totalAverage)



// --------------------------------------
// Exercise 6 - Get the character by index


// Get me the character "c"

const letters = "abc";
console.log(letters[2])
console.log(letters.charAt(2))
console.log(letters[letters.search("c")])
console.log(letters.charAt(letters.search("c")))
console.log(letters.match("c"))

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const newFact = fact.replace("j","J")
console.log(newFact)

// --------------------------------------



