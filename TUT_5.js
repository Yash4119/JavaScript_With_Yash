//  type conversion and type coercion

console.log("this is tut_5 about type conversion and type coercion");

let myvar;

myvar = 56;
console.log(myvar, typeof myvar);

myvar = String(34);
console.log(myvar, typeof myvar);

let boolean = true;
console.log(boolean, typeof boolean);

let myvar2 = String(true);
console.log(myvar2, typeof myvar2);

let date = new Date();
console.log(date, typeof date);

let date2 = String(new Date());
console.log(date2, typeof date2);

let arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr);

let arr2 = String([1, 2, 3, 4, 5]);
console.log(arr2, typeof arr2);
console.log(arr2.length); //here in this case the length will be 9 sqaure brackets are not counted

let i = 8;

console.log(i);
console.log(i.toString());

let roll_no = "3456";
console.log(roll_no, typeof roll_no);
console.log((roll_no = Number(roll_no)), typeof roll_no);

let name1 = "a34";
console.log(Number(name1), typeof name1); // will givee NAN -> not a number

let bool = Number(true);
console.log(bool, typeof bool);

let num = "34";
console.log(num, typeof num);

num = parseInt(num);
console.log(num, typeof num);

num = "34.638753";
num = parseFloat(num);
console.log(num, typeof num);

console.log(num.toFixed(20)); //this is used for precision

// Type Coercion

let mystr = Number("698");
let mystr2 = "698";
let mynum = 34;

console.log(mystr + mynum);
console.log(mystr2 + mynum);
