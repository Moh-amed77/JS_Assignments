/*  
    Number Challenge
*/

let a = 1_00;    // 100
let b = 2_00.5;  // 200.5
let c = 1e2;     // 100
let d = 2.4;     // 2.4

// Find Smallest Number in All Variables And Return Integer
console.log(Math.trunc(Math.min(a,b,c,d)))

// Use Variable a + d One time To Get The Needed Output
console.log(Math.pow(a,Math.floor(d))); // 10000

// Get Integer 2 from d variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(Number(d.toFixed(0)));

//Use Varible b and d To Get This Values  200.5  2.4
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2))  // 66.67 => string 
console.log(Math.floor(Math.floor(b) / Math.ceil(d)))  // 66    => Number