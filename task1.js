/* Assignment 1 */
function sayHello(theName, theGender) {
    if(theGender === "Male"){
        console.log(`Hellp Mr ${theName}`)
    }else if(theGender === "Female"){
        console.log(`Hello Miss ${theName}`)
    }else{
        console.log(`Hello ${theName}`)
    }
}

sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"


console.log("*********************************************")
/* Assignment 2 */
function calculate(firstNum, secondNum, operation) {
    if (secondNum == undefined){
        console.log("Second Number Not Found")
        return;
    }
    if (operation === "add"){
        console.log(firstNum + secondNum)
    }else if(operation === "subtract"){
        console.log(firstNum - secondNum)
    }else if(operation === "multiply"){
        console.log(firstNum * secondNum)
    }else{
        console.log(firstNum + secondNum)
    }
}

calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600


console.log("*********************************************")
/* Assignment 3 */
function ageInTime(theAge) {
    if(theAge < 10 || theAge > 100){
        console.log("Age Out Of Range");
        return;
    }
    var Months = theAge * 12;
    console.log(`Months is ${Months}`)
    var Weeks = theAge * 48;
    console.log(`Weeks is ${Weeks}`)
    var Days = theAge * 365 ; 
    console.log(`Days is ${Days}`)
    var Hours = theAge * 365 * 24 ;    
    console.log(`Hours is ${Hours}`)
    var Minutes = theAge * 365 * 24 * 60 ;   // 24 * 60* 365  
    console.log(`Minutes is ${Minutes}`)
    var Seconds = theAge * 365 * 24 * 60 * 60 ;
    console.log(`Seconds is ${Seconds}`)
}

ageInTime(110); // Age Out Of Range
ageInTime(20); // Months Example => 456 Months

console.log("*********************************************")
/* Assignment 4 */
//Like Challenge.

console.log("*********************************************")
/* Assignment 5 */
function createSelectBox(startYear, endYear) {
    document.write(`<form>`)
    document.write(`<select>`)
    for(var i =startYear; i<= endYear; i++ ){
        document.write(`<option value="${i}" >${i}</option> "`)
    }
    document.write(`</select>`)
    document.write(`</form>`)
}
createSelectBox(2000, 2021);


console.log("*********************************************")
/* Assignment 6 */
function multiply(...numbers){

    var result = 1;
    for(var i = 0 ; i< numbers.length;i++){
        if(typeof numbers[i] === "string"){
            continue
        }
        result *= Math.floor(numbers[i]);
    }

    console.log(result)
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000