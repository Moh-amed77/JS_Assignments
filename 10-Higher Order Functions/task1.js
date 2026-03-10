/* Assignmet 1*/
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMix = mix.map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
}).reduce(function (acc, current) {
    return acc + current;
})
console.log(newMix)
// Elzero


console.log("********************************************")
/* Assignmet 2*/

let myString = "EElllzzzzzzzeroo";

let newString = myString.split("").filter(function (ele, index) {
    return myString.indexOf(ele) === index;
}).reduce(function (acc, current) {
    return acc + current
})
console.log(newString)
// Elzero


console.log("********************************************")
/* Assignmet 3*/

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce(function (acc, current) {
    return acc + current;
}).split("").filter(function (ele) {
    return ele !== ",";
}).reduce(function (acc, current) {
    return acc + current;
})

console.log(newArray)
// Elzero


console.log("********************************************")
/* Assignmet 4*/

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNum = numsAndStrings.filter(function (ele) {
    return !isNaN(parseInt(ele));
}).map(function (ele) {
    return -ele;
})
console.log(newNum)
// [-1, -10, 10, 20, -5, -3]


console.log("********************************************")
/* Assignmet 5*/

let nums = [2, 12, 11, 5, 10, 1, 99];
let newNums = nums.reduce(function (acc, current) {
    return current % 2 === 0 ? current * acc : current + acc;
}, 1)
console.group(newNums)
// 500