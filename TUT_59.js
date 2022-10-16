console.log("In this tutorial we will learn about symbols")

// a symbol is unique in itself
// Symbols makes it easy to create unique keys

const sym1 = Symbol('Yash')
const sym2 = Symbol('Yash')

console.log(sym1)
console.log(typeof(sym2));

console.log(sym1 === sym2)
console.log(sym1 == sym2)

const myObj = {}

const s1 = Symbol("This is s1")
const s2 = Symbol("This is s2")

myObj[s1] = "This is new"
myObj[s2] = "This is brand New"
myObj["name"] = "Yash"

// Symbols are ignored in the For In Loop

for(let ele in myObj){
    console.log(ele, " " ,myObj[ele])
}

// also symbols are ignoredd in the json stringify
console.log(JSON.stringify(myObj))

// console.log(myObj)