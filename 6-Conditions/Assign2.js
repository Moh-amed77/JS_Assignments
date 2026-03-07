/* Assignment 1 */

// Test Case 1
let num1 = 9; // "009"
if( num1 < 10){
    console.log("00"+num1)
}

// Test Case 2
let num2 = 20; // "020"
if(num2>10 && num2<100){
    console.log("0"+num2)
}
// Test Case 3
let num3 = 110; // "110"
if(num3>100){
    console.log(num3)
}

console.log("************************************")
/* Assignment 2 */
let num4 = 9;
let str = "9";
let str2 = "20";

// Output
if(num4 == str){
    console.log(`${num4} Is The Same Value As ${str}`)
}

if(num4 !== str){
    console.log(`${num4} Is The Same Value As ${str} But Not The Same Type`)
}

if(num4 !== str2){
    console.log(`${num4} Is Not The Same Value Or The Same Type As ${str2}`)
}
if(str != str2 && typeof str === typeof str2 ){
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
}


console.log("************************************")
/* Assignment 3 */
let num11 = 10;
let num22 = 30;
let num33 = "30";

if(num33 > num11 && num33 !== num22){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}

if(num33 > num11 && num33 !== num22 && num33 == num22){
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}

if(num33 !== num11 && typeof num33 !== typeof num22){
    console.log(`${num33} Value And Type Is Not The Same As ${num11} And Type Is Not The Same As ${num22}`)
}


console.log("************************************")
/* Assignment 4 */

// Edit What You Want Here

let num111 = "11";
let num222 = 10;
let num333 = "11";
let num444 = 33;



/*
    Do Not Edit Below This Line
    Needed Output
    True 7 Times
*/

// Condition 1

if (num111 > num222) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num111 > num222 && num111 < num444) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num111 > num222 && num111 === num333) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((Number(num111) + num222) < num444) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((Number(num111) + Number(num333)) < num444) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((Number(num111) + num222 + Number(num333)) < num444) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num444 - (Number(num111) + Number(num333)) + num222 === 21) {  
    console.log("True");
} else {
    console.log("False");
}


