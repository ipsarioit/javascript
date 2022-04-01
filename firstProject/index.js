let a = "Hello!";
let b = "1";
let c = 1;
let d = true;

let sum1 = b + c; //string
console.log(sum1);
console.log(typeof(sum1));

let sum2 = Number(b) + c; 
console.log(sum2);
console.log(typeof(sum2));

let sum3 = d + b;
console.log(sum3);
console.log(typeof(sum3));

let sum4 = d + c;
console.log(sum4);
console.log(typeof(sum4));
console.log(typeof(d));

console.log("-------");
console.log(c == b);
console.log(c === b);
console.log(c == d);
console.log(c === d);

console.log("*******");
console.log(undefined == null);
console.log(undefined === null);

console.log([] == 0);
console.log([] === 0);

console.log('' == 0);
console.log('' === 0);