console.log("now we are in tut 9");

// For Loop

// for (let i = 0; i <= 20; i++) {
//   console.log(i * i, "doing");
// }
// console.log("end");

// let i = 0;
// const j = 10;

//  While Loop

// while (i < j) {
//   console.log("traversing :- ", i + 1);

//   i++;
// }

// Do While Loop

// do {
//   console.log(i + 1);
//   i++;
// } while (i < j);

// Break Statements

// do {
//   if (i == 5) {
//     break;
//   }
//   console.log(i + 1);
//   i++;
// } while (i < j);

// do {
//   if ((i + 1) % 2 === 0) {
//     i += 1;
//     continue;
//   }
//   console.log(i + 1);
//   i += 1;
// } while (i < j);

let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//   const element1 = arr[i];
//   console.log(element1, " :- normal");
// }

arr.forEach(function (element, index, array) {
  console.log(element, index, array, " :- forEach");
});

// let obj = {
//   name: "yash ambekar",
//   age: 18,
//   type: "programmer",
//   os: "windows",
// };

// for (let key in obj) {
//   console.log(`${key} of object is ${obj[key]}`);
// }
