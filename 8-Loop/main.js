for(var i = 1 ; i<=10;i++){
    console.log(i)
}


console.log("*******************************")


let myFriends = [1,2,"Mohamed","Magdy",5,"Mostafa",8,"Hassan"]
let onlyNames = []

for(var i = 0 ; i<myFriends.length;i++){
    if(typeof myFriends[i] === "string"){
        onlyNames.push(myFriends[i])
    }
}
console.log(onlyNames)


console.log("*******************************")


let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"]
let colors = ["Red", "Green", "Black"]

for(var i = 0 ; i<products.length;i++){
    console.log(products[i])
    if(products[i] === "Pen"){
        break;
    }
}

console.log("******")

for(var i = 0 ; i<products.length;i++){
    if(products[i] === "Pen"){
        continue;
    }
    console.log(products[i])
}

console.log("******")

mainloop:for(var i = 0 ; i<products.length;i++){
    console.log(products[i])
    nestedloop:for(var j =0 ; j<colors.length;j++){
        console.log(`--${colors[j]}`)
        if(colors[j]==="Green"){
            break mainloop;
        }
    }
}


console.log("*******************************")


let productss = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"]
var i =0;
for(;;){
    console.log(productss[i])
    i++
    if(i === productss.length) break;
}


console.log("*******************************")


let _products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"]
let _colors = ["Red", "Green", "Black"]
let showCount = 5;

document.write(`<h1> show ${showCount} Products </h1>`)
for(var i =0; i<showCount;i++){
    document.write(`<div>`)
    document.write(`<h3>[${i+1}] ${_products[i]} </h3> `)
    // for(var j = 0 ; j<_colors.length;j++){
    //     document.write(`<div> ${_colors[j]} </div>`)
    // }
    document.write(`${_colors.join(" | ")}`)
    document.write(`</div>`)
}


console.log("*******************************")


let index=0;
while(index<products.length){
    console.log(products[index])
    index++;
}


console.log("*******************************")

let x=0;
do{
    console.log(x);
    x++;
}while(false)

console.log(x)