let calc = function (num1,num2){
    return num1 + num2 ;
}
console.log(calc(20,40))

function sayHello(){
    document.write("Hello Mohamed")
}
document.getElementById("show").onclick = sayHello


console.log("*****************************************************")


function sayMessage(fName,lName){
    let message = `Hello`
    function Conca(){
        function fullName(){
            return `${fName} ${lName}`
        }
        return `${message} ${fullName()}`
    }
    return Conca()
}
console.log(sayMessage("Mohamed", "Magdy"))


console.log("*****************************************************")


let print1 = () => {
    return 90;
}
console.log(print1())

let print2 = () => 10;  //Arrow function
console.log(print2())

let print3 = _ => 20;  //Arrow function
console.log(print3())

let print4 = num => num;
console.log(print4(500))

let print5 = (num,num2) => num * num2;
console.log(print5(500, 50))


console.log("*****************************************************")


