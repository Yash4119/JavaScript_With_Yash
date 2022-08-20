console.log(
  "this is tutprial 34 and today we'll learn about synchronous and asynchronous code in JAVASCRIPT"
);

// Type one [Synchronous Programming]
// for (let index = 0; index < 3009; index++) {
//   const element = index;
//   console.log(`this is index number :- ${element}`);
// }

// console.log("Done Printing");

// Type 2: [Asynchronous Programming]
setTimeout(() => {
  for (let index = 0; index < 30; index++) {
    const element = index;
    console.log(`this is index number :- ${element}`);
  }
}, 100);
setTimeout(() => {
  for (let index = 0; index < 30; index++) {
    const element = index;
    console.log(`this is index number :- `);
  }
}, 90);

console.log("Done Printing");
