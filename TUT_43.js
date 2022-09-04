console.log(
  "tut 43 today we will learn about async and await and also we will do revise the concept of promises"
);

// function harry() {
//   return "harry";
// }

// let variable = harry();
// console.log(variable);

// Async function returns a promise
// in a async function when we encounter a await execution of that particular function is paused and then other instructions are run and finnaly after taska is performed then the await is over and instructyions are executed

async function harry() {
  console.log("inside the harry function");
  // const response = await fetch("https://api.github.com/users");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("after fetching");

  const data = await response.json();

  return data;
}

console.log("before harry function");
const data = harry();
console.log("after harry function");
console.log(data);
data.then((ans) => console.log(ans));
console.log("last line");
