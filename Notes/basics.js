//"use strict";

// Total global variabel - dårlig praksis og bliver fanget af "use strict"
//insaneVariable = "This is not good";

let person1 = "Christina" // "Forkert" praksis - et navn er sådan set permanent. Burde være const

let age = 27 // Rigtigt - Alder ændrer sig

const person = {
    name: "Christina"
}

// This is possible even though it is a const
person.name = "John"
person.favouriteFood = "Lasagna"
console.log(person)

// This is not possible, because it is a const
// person = "Derp"; We can not assign a new value to a const

const immutablePerson = Object.freeze(person)
immutablePerson.name = "Test" // This does nothing, as the entire object is frozen from changes. "use strict" will also stop this

// Never use var (anymore)
var oldSchoolJavascript = -10;

// This is a body of an unnamed function, immediately executed
{
    var thingy = "hello";
    let someValue = "Some value";
    {
        let someValue = "Other value"
        console.log(someValue)
    }
    console.log(someValue) // This is still "Some value", as the someValue variable inside the inner function, is local scope
}

console.log(thingy) // This works, as var is globally defined - or atleast outside of this function
//console.log(thingy2) // this does not work, as thingy2 is only defined in the function, and exists only there

{
    var newValue = true;
    {
        var newValue = false;
        console.log(newValue)
    }
    console.log(newValue) // This is now false, as the var in line 45 is global scope and overrides the value of line 43
}


for(let x = 0; x <= 5; x++)
{
    setTimeout(function() {
        console.log(x)
    }, 1000);
}

for(var y = 0; y <= 5; y++)
{
    setTimeout(function() { // setTimeout kører i en "bunke" i hinanden, så den bliver kørt 5 gange oven i hinanden
        console.log(y)
    }, 1000); // One second is longer than the time it will take to run the loop through - therefor the loop will end up being 6
}

/*
i++ -> 1
i++ -> 2
...
i++ -> 6
One second has passed
timeOut calls function i (in a more global scope) which is 6, 

*/