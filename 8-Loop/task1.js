/* Assignment 1 */
let start = 10;
let end = 100;
let exclude = 40;

for(;start <= end ;start+=10){    // there is a problem
    if(start === exclude){
        continue;
    }
    console.log(start);
}

console.log("********************************")
/* Assignment 2 */
let start2 = 10;
let end2 = 0;
let stop = 3;

for(;start2>=stop;start2--){
    if(start2<10){
        console.log(`${end2}`+start2)
    }else{
        console.log(start2)
    }   
}

console.log("********************************")
/* Assignment 3 */
let start3 = 1;
let end3 = 6;
let breaker = 2;

for(;start3<=end3;start3++){
    console.log(start3)
    for(breaker = 2;breaker<=4;breaker+=2){
        console.log("--",breaker)
    }
}

console.log("********************************")
/* Assignment 4 */
let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
    index -=jump;
    if(index==jump){
        break;
    }
}


console.log("********************************")
/* Assignment 5 */
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
var j=1;

for(var i =0 ; i<friends.length;i++){
    if(friends[i][0].toLowerCase() != letter ){
        console.log(`${j} => ${friends[i]}`)
        j++;
    }
}

console.log("********************************")
/* Assignment 6 */
let start4 = 0;
let swappedName = "elZerO";
let checkname= swappedName.toUpperCase();
let newname=[]

for(;start4<swappedName.length;start4++){
    if(swappedName[start4] == checkname[start4]){
        newname.push(swappedName[start4].toLowerCase());
    }else{
        newname.push(swappedName[start4].toUpperCase())
    }
}

console.log(newname.join(""))


console.log("********************************")
/* Assignment 7 */
let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(;start5<mix.length;start5++){
    if(typeof mix[start5] === "string" || mix[start5] == 1){
        continue
    }
    console.log(mix[start5])
}

console.log("********************************")
/* Assignment 8 */
let friendss = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index2 = 0;
let counter = 0;
let count=1;
while(counter<friendss.length){
    if(typeof friendss[counter] != "number"){
        if(friendss[counter][index2].toLowerCase() != 'a'){
            console.log(`${count} => ${friendss[counter]}`)
            count++;
        }
    }
    counter++;
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"