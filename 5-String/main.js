let Name = "  Mohamed  "

console.log(Name)

console.log(Name[4])
console.log(Name.charAt(4))

console.log(Name.length)

console.log(Name.trim())

console.log(Name.toUpperCase())
console.log(Name.toLowerCase())

console.log(Name.trim().charAt(3).toUpperCase())

console.log("********************************************")

let a = "Mohamed Software Engineering"

console.log(a.indexOf("Soft"))
console.log(a.indexOf("Soft",10))

console.log(a.indexOf("e"))
console.log(a.lastIndexOf("e"))  // start from end 

console.log(a.slice(2,6))
console.log(a.slice(-6,-2))

console.log(a.repeat(3))

console.log(a.split(" "))
console.log(a.split("",5))

console.log("********************************************")

a = "Mohamed Software Engineering"

console.log(a.length)

console.log(a.substring(2,6))
console.log(a.substring(6,2))    //The Same thing

console.log(a.substring(-10,6))
console.log(a.substring(0,6))    //The Same Thing

console.log(a.substring(a.length-5 , a.length -3))

console.log(a.substr(0,6))
console.log(a.substr(15))
console.log(a.substr(-3));
console.log(a.substr(-5, 2));

console.log(a.includes("Web"));
console.log(a.includes("Web", 8));

console.log(a.startsWith("S",2))

console.log(a.endsWith("g"))
console.log(a.endsWith("e"))