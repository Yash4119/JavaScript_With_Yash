console.log(
  "this is Tut 20 and today we will be learning the topic :- Local and Session storage in Javscript"
);
let fruits = ["apple", "banana", "guava"];

localStorage.setItem("Name", "Yash ambekar");
localStorage.setItem("Name2", "Krishna Kotgire");
localStorage.setItem("arr", JSON.stringify(fruits));

let name1 = localStorage.getItem("Name");
let name2 = localStorage.getItem("Name2");
let name3 = localStorage.getItem("Name21");
let arritem1 = JSON.parse(localStorage.getItem("arr"));

console.log(name1);
console.log(name2);
console.log(name3);

console.log(arritem1);
console.log("arr type is :- ", typeof arritem1);
console.log("name type is :- ", typeof name1);
// localStorage.removeItem("Name");

// localStorage.clear();

// sessionStorage.setItem("sessionName", "Yash ambekar");
// sessionStorage.setItem("sessionName2", "Krishna Kotgire");
// sessionStorage.setItem("sessionarr", JSON.stringify(fruits));

// let sessionname1 = sessionStorage.getItem("sessionName");
// let sessionname2 = sessionStorage.getItem("sessionName2");
// let sessionname3 = sessionStorage.getItem("sessionName21");
// let sessionarritem1 = JSON.parse(localStorage.getItem("sessionarr"));
// // session;

// console.log(sessionname1);
// console.log(sessionname2);
// console.log(sessionname3);

// console.log(sessionarritem1);

// local storage will remain pr=ermanently but in case of session storage it will remain for a paricular session and will get cleared if browser is restarted
