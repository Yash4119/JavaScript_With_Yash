console.log("tut3");

// VARIABLES IN JAVASCRIPT

// var ,let ,const are the keywords that5 are used in javascript for declaring variables

var name = "harry";
// var name = "harry" this can also be written as `harry` using backtiks as we can use any other symbol or punctutation in that backtiks
let marks = 56;
const div = "B";

// if a variable is declared and not initialised and we displayed it on console then we will get undefined

console.log(name + " " + marks + " " + div);
console.log(name, marks, div);

// rules for creating javascript variables
/*
1. cannot start with numbers 
2. can start with letters, underscores or $ symbol
3. should not use reserved keywords
*/

// with rise of modern js the use of const and let has been increased so  need to follow that
// when we define variables using const then they can be assigned with values only once and these values cannot be updated

const seeya = `what's seeya ?`;

// here if we change the value of the variable then js will give an error
// seeya = "keep quite";

console.log(seeya);

// we cannot just declare a const variable we must assign it with a particular value

// let has block level scope
// var has global scope

/*
{
    // this is a block
}
*/

var city = "Kolkata";
{
  let city = "Pune";
  city = "chennai";
  console.log(city + "(inside the block using let)");
}
console.log(city + "(outside the block using var )");

// mostly try to use let and const and always try to avoid the use of var

const arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(45);
console.log(arr);
// even though the array is const but we can add or delete elements to the array but we cannot redeclare the array
// similarly we can do the same thing with objects and as in arrays we cannot redelare the values of objects

/*  
-------- Most common Programming case Types --------

1.camelCase
2.kebab-case
3.snake_case
4.PascalCase

*/
