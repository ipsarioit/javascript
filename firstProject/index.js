let fruits = ["apple", "banana", "cucumber"];
fruits.pop();
fruits.push("pear");
fruits.shift();
fruits.unshift("apple");

console.log(fruits);
console.log(fruits.indexOf("bananana"));
console.log(fruits[2]);
fruits.splice(1,1);
console.log(fruits);

// 1 0 0
// 0 1 0
// 0 0 1

let identityMatrix = [[1,0,0],[0,1,0],[0,0,1]];

console.log(identityMatrix[1][2]);

let fruits2 = fruits.slice(0);
fruits.pop();

console.log(fruits);
console.log(fruits2);

let fruits3 = ["banana", ...fruits2, "cherry", ...fruits];
fruits2.pop();
console.log(fruits3); //spread

let numbers = [4, 5, 7, 2, 1, 9];
let lowestNumber = Math.min(...numbers);
console.log(lowestNumber);

console.log(JSON.stringify(fruits3))