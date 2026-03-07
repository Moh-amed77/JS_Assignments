/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// document.write(`<div>We Have X Admins</div>`);

var i =0;
for(;i<myAdmins.length;i++){
    if(myAdmins[i] === "Stop"){
        break;
    }
}
var y = 1 , z=1,t=1;
document.write(`<div>We Have ${i} Admins</div><hr>`);

for(var j =0; j<myAdmins.length;j++){
    if(myAdmins[j] === "Stop"){
        break;
    }
    document.write(`The Admin For Team ${j+1} Is ${myAdmins[j]}<br>`)
    document.write(`<h4>Team Members</h4>`)
    for(var k=0;k<myEmployees.length;k++){
        if(myEmployees[k][0].toLowerCase() == "a" && myAdmins[j] == "Ahmed"){
            document.write(`(${y}) ${myEmployees[k]} <br><br>`)
            y++
        }else if(myEmployees[k][0].toLowerCase() == "o" && myAdmins[j] == "Osama"){
            document.write(`(${z}) ${myEmployees[k]} <br><br>`)
            z++
        }else if(myEmployees[k][0].toLowerCase() == "s" && myAdmins[j] == "Sayed"){
            document.write(`(${t}) ${myEmployees[k]} <br><br>`)
            t++
        }
    }
    document.write(`<hr>`)
}
