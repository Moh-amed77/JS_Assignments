function sayHello(userName){
    console.log(`Hello ${userName}`)
}

sayHello("Mohamed")


console.log("***********************************")


function sayHello2(userName,Age){
    if(Age<=20){
        console.log("This App in Not Suitable for you");
    }else{
        console.log(`Hello ${userName},Your Age is ${Age},And Keep Going`)
    }
}

sayHello2("Mohamed",20)
sayHello2("Mostafa",36)

function rangeYears(start,end,exclude){
    for(var i=start;i<=end;i++){
        if(i === exclude){
            continue
        }
        console.log(i)
    }
}

rangeYears(2005,2026,2020)


console.log("***********************************")


function sum(num1,num2){
    return num1+num2;
    console.log(num1)   //Don't Run
}

let result= sum(10,20)
console.log(result + 100)

function rangeYears2(start,end,exclude){
    for(var i=start;i<=end;i++){
        if(i === exclude){
            return 'Interpt'  //Don't Print Any Thing , For Clarify
        }
        console.log(i)
    }
}

rangeYears2(10,20,15)


console.log("***********************************")


function sayHello3(userName,Age="Unknwon"){
    // if(Age === undefined){
    //     Age= "Unknwon"
    // }
    // Age = Age || "Unknwon"
    console.log(`Hello ${userName} and Your age is ${Age}`)
}

sayHello3("Nabil")
sayHello3("Nabil",20)


console.log("***********************************")


function calc(...numbers){
    var result=0;
    for(var i=0;i<numbers.length;i++){
        result += numbers[i]
    }
    return result
}

console.log(calc(20,40,30,6,120,200))


console.log("***********************************")


function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${us}</h2>`);
    document.write(`<p>Age: ${ag}</p>`);
    document.write(`<p>Hour Rate: $${rt}</p>`);
    if (show === "Yes") {
        if (sk.length > 0) {
            document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
        } else{
            document.write(`<p>Skills: No Skills</p>`);
    }
    } else {
        if(sk.length>0){
            document.write(`<p>Skills Is Hidden</p>`);
        }else{
            document.write(`<p>Skills: No Skills</p>`);
        }
        
    }
    document.write(`</div>`);
} 

showInfo("Mohamed", 38, 20, "No", "Html", "CSS");