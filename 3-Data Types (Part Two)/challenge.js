/* Challenge 1 */

let a = 10; //11  -- 12  -- 13 -- 14 -- 13 -- 12
let b = "20";  //21  -- 22
let c = 80;  //81  -- 82 -- 81

console.log(++a +b++ + +c++ - +a++)   //11 + 20 + 80 - 11 = 100 
console.log(++a + -b + +c++ - -a++ + +a)  //13 + -21 + 81 - -13 + 14 = 100
console.log(--c + +b + --a * +b++ - +b * a +  --a - +true); //81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 81 + 21 + 273 - 286 + 12 - 1 = 100


console.log("******************************************************");
/* Challenge 2 */

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Rules: Only use variables value - Don't Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d + ++e * ++g + ++f); // 100 + 21 * 2 + 31 = 100 + 42 + 31 = 173