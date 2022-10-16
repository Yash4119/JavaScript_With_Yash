console.log("This is TUT_58.js and today we will learn more about sets in javascript")

// Set Stores unique values
// Now we will initialize an empty set

const mySet = new Set();

// this is how a empty set looks like
// console.log("my Set :- ",mySet)

// Adding values to the set
// mySet.add("Yash Ambekar")
// mySet.add("Yash Shinde")
// mySet.add(true)
// mySet.add(2343)
// mySet.add({a:2,b:4})
// mySet.add(function(){})
// mySet.add("Yash shinde")
// mySet.add("Yash Shinde")

// console.log("How my Set Looks :- ",mySet)

// Creating set using the set Constructor
 const newSet = new Set(["a","b",345,true,{name:"Yash Ambekar"},function(){console.log("This is the function inside the set")}])

//  console.log("My New Set looks like This :- ",newSet)
//  console.log("My New Set Size :- ",newSet.size)
//  console.log(newSet.has(345))
//  console.log("Before Removal",newSet)
//  newSet.delete("a");
//  console.log("After Removal", newSet)

// iteration of set

// using for of loop
// for (let element of newSet){
//     console.log(element)
// }

// using for each loop
// newSet.forEach(element => {
    // console.log(element) 
// });
 
// Trying to convert set into an Array using Array.from();
// let arr = Array.from(newSet)
// console.log(arr)

//  Summary Of Today's Lecture
// 1. Set
// 2. Set Constructor
// 3. set.add();            =>  function to add values to a set
// 4. set.has();            =>  function to check is an element is present int set
// 5. set.delete();         =>  function to delete a value from the set
