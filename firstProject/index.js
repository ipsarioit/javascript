//condition ? ifTrue : ifFalse

let age = 1;
let drink = 
(age < 18) ? "juice" 
: (age == 18) ? "beer" 
: (age < 50) ? "vodka" 
: "wine";

console.log("You drink " + drink + " today");