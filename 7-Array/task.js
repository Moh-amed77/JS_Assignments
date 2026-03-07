/* Assignment 1 */

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.pop()
// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends.length = num;
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

console.log("*********************************************************")
/* Assignment 2 */

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]


console.log("*********************************************************")
/* Assignment 3 */

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let letter = arrTwo.pop();
let finalArr =  arrOne.reverse().concat(arrTwo);
finalArr.unshift(letter)
// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


console.log("*********************************************************")
/* Assignment 4 */

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length-words.includes("Facebook")][0].substring(words.includes("Facebook")+words.includes("Facebook")).toUpperCase()); // ZERO


console.log("*********************************************************")
/* Assignment 5 */

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if(haystack.includes(needle)){
    console.log("Found")
}

let index1 = haystack.indexOf(needle)
if(index1>-1){
    console.log("Found")
}

let index2 = haystack.lastIndexOf(needle)
if(index2>-1){
    console.log("Found")
}


console.log("*********************************************************")
/* Assignment 6 */

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs.unshift(arr2.pop(),arr1.pop(),arr2.pop())   ;     //yxf
console.log(allArrs.reverse().join("").toLowerCase()); // fxy