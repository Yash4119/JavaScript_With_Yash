console.log(
  "this is tut 42 and today we are going to learn about the fetch api"
);
//
// button having id myBtn
let myBtn = document.getElementById("myBtn");

// div haivng the id content
let content = document.getElementById("content");

// function getData() {
//   console.log("inside the getData function");

//   url = "yash.txt";
//   fetch(url)
//     .then((response) => {
//       console.log("inside the 1st then");
//       return response.text();
//     })
//     .then((data) => {
//       console.log("inside the 2nd then");
//       console.log(data);
//     });
// }

// console.log("Before calling the getData function");
// getData();
// console.log("After calling the getData function");

// today we will ry to bring the json data

function getData() {
  let url = "https://reqres.in/api/users?page=2";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

getData();

// data agar ek object hai toh stringify use karo aur data agar json anhi hai toh stuingify mat use karo!!!!1
// object ke andar nahi dete hai semicolon

function postData() {
  url = "https://reqres.in/api/users";
  data = {
    name: "Yash",
    job: "Seeya",
  };

  params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

postData();
