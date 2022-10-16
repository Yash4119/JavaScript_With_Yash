console.log("Maps in Javascript")

let mp = new Map();

let key1="Str",key2={},key3=34,key4=function(){};

mp.set(key1,"This is a string")
mp.set(key2,"This is a empty object")
mp.set(key3,"This is s integer")
mp.set(key4,"This is a function")

// console.log(mp)
// console.log(mp.size);

// mp.forEach((value,key) => {
//     console.log(key, ' : ',value)
// });

// console.log(mp.get(key3))

// for (let [key,value] of mp) {
//     console.log(key,value)
// }

// for(let key of mp.keys()){
//     console.log(key)
// }

// for(let value of mp.values()){
//     console.log(value)
// }

// ***** converting map to array *****

let myArray = Array.from(mp);
console.log(myArray);

let myKeysArray = Array.from(mp.keys());
console.log(myKeysArray);

let myValuesArray = Array.from(mp.values());
console.log(myValuesArray)