let myFriends = ["Mohamed","Manal","Shaima",["Mostafa","Hassan"]]

console.log(`Hello ${myFriends[0]}`)
console.log(`Hello ${myFriends[2]}`)

console.log(`${myFriends[3][1]}`)

console.log(myFriends)
myFriends[0]="Ali"
console.log(myFriends)
myFriends[3]=["Abdallah","Yousef"]
console.log(myFriends)

console.log(typeof myFriends)  //object
console.log(Array.isArray(myFriends))  //true


console.log("************************************")  


let newFriends = ["Moaz","Ayman","Mahmoud"];

console.log(newFriends);
console.log(newFriends.length)

newFriends[newFriends.length]="Gamal"
console.log(newFriends);
console.log(newFriends.length)

newFriends[newFriends.length-1]="Marwan"
console.log(newFriends);
console.log(newFriends.length);

newFriends[6]="Saber"
console.log(newFriends);
console.log(newFriends.length);

newFriends.length=2;
console.log(newFriends);


console.log("************************************")  


let myFamily = ["Alaa","Ebrahim","Menna"]
console.log(myFamily)

myFamily.unshift("Ashraf","Asaad")
console.log(myFamily)

myFamily.push("Mariam","Talla")
console.log(myFamily)

let myCousin = myFamily.shift()
console.log(myFamily)
console.log(`Name of My }ousin is ${myCousin}`)

let myCousin_gril=myFamily.pop()
console.log(myFamily)
console.log(`Name of My }ousin is ${myCousin_gril}`)


console.log("************************************")


let my_Friends=["Mohamed","Alaa","Ebrahim","Menna","Mohamed"]

console.log(my_Friends.indexOf("Mohamed"))
console.log(my_Friends.indexOf("Mohamed",2))
console.log(my_Friends.indexOf("Osama"))

console.log(my_Friends.lastIndexOf("Mohamed"))
console.log(my_Friends.lastIndexOf("Mohamed",-2))

console.log(my_Friends.includes("Alaa"))
console.log(my_Friends.includes("Osama"))


console.log("************************************")


let randomArray = [10,20,"90",1000,-10,-90,"120","Mohamed","Mostafa"]
console.log(randomArray)
console.log(randomArray.reverse())
console.log(randomArray.sort())
console.log(randomArray.reverse())


console.log("************************************")


let myFriendss = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log(myFriendss)

console.log(myFriendss.slice())
console.log(myFriendss.slice(2))
console.log(myFriendss.slice(-2))      // print Gamal , Ameer
console.log(myFriendss.slice(1,4))     // print index 1 , 2 and 3 only
console.log(myFriendss.slice(-4,-2))   // print -4:Ali , -3:Osama    only not print -2

console.log(myFriendss)

myFriendss.splice(0,0,"Mohamed","Magdy")
console.log(myFriendss)

myFriendss.splice(1,3,"Mostafa",10,"Nabil")
console.log(myFriendss)


console.log("************************************")


let myOldFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myOldFriends.concat(myNewFriends,schoolFriends)
console.log(allFriends)

allFriends = myOldFriends.concat(myNewFriends,schoolFriends,"Gameel",[1,32])
console.log(allFriends)

console.log(allFriends.join())
console.log(allFriends.join(""))
console.log(allFriends.join(" | "))
console.log(allFriends.join(" | ").toUpperCase())


console.log("************************************")