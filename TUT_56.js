console.log("Today we will learn about for of and for in loop");

let people = ["Yash", "Omkar", "Teja", "Shinde", "Prathmesh", "Satyam"];

// Traditional For Loop

// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// For Each Loop

// people.forEach(ele => {
//     console.log(ele)
// });

// let obj = {
//   name: "Yash Ambekar",
//   Interest: "CPP",
//   Dream: "FAANGM",
// };

// traditional for loop

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element)
// }

// For Each loop

// Object.keys(obj).forEach(element => {
//     console.log(element, " : ", obj[element])
// });

// ************************* For In loop **************************

// for (let key in obj){
//     console.log(key , " : " ,obj[key])
// }

// We can use for in with strings to loop through all the characters
// let myStr = "Dr. D. Y. Patil Institute Of Technology, Pimpri"
// for (let char in myStr){
//     console.log(myStr[char])
// }

// for(let index=0;index<myStr.length;index++){
//     console.log(myStr[index])
// }

// ****************** For Of Loop ******************

// let cars = ["Brezza","Creata","Nexon","Punch","Tiago","Gravitas"]

// for in gives us the index while the for of directly gives us the element

// for(let element of cars){
//     console.log(element)
// }

// let str = "This is Just a Trial"
// for(let char of str){
//     console.log(char)
// }