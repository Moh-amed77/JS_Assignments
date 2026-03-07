console.log(10 == "10")   //True
console.log(10 != "10")   //False

console.log(10 === "10")  //False
console.log(10 !== "10")  //True

console.log("Mohamed" === "Osama")  //False
console.log(typeof "Mohamed" === typeof "Osama")  //True 


console.log("********************************")

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true ){
    price -= discountAmount;
} else if (country === "Egypt"){
    
    if (student === true){
        price -= discountAmount + 30;
    }else{
        price -= discountAmount;
    }
}else{
    price -= 10;
}

console.log(price)

console.log("********************************")

let theName = "Mohamed";
let theGender = "Male";
let theAge = 30;

if (theGender === "Male") {
    console.log("Mr");
} else {
    console.log("Mrs");
}

theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let result = theGender === "Male" ? "Mr" : "Mrs";
console.log(result)

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`)

theAge < 20 ? console.log(20) : theAge>20 && theAge<60 ? console.log("20 to 60") : console.log("Unknown");

console.log("********************************")

let newPrice = "";

console.log(`the Price is ${newPrice || 200}`)
console.log(`the Price is ${newPrice ?? 200}`)

console.log("********************************")

let day = 5;

switch(day){
    case 1:
        console.log("Sat_Day");
        break;
    case 2:
        console.log("Sun_Day");
        break;
    case 3:
        console.log("Mon_Day");
        break;
    default:
        console.log("You Enter Unvalid Nmuber.")
}
