console.log(
  "this is tut 35 and today we are going to learn Ajax tutorial in javascript"
);

// https://dummy.restapiexample.com/api/v1/employees

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You Have clicked the fetchBtn");

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "	https://dummy.restapiexample.com/api/v1/create", true);
  // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.getResponseHeader("Content-type", "application/json");

  xhr.onprogress = function () {
    console.log("On Progress");
  };

  // xhr.onreadystatechange = function () {
  //   console.log("ready state is :- ", xhr.readyState);
  // };

  // What to do when the request is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("An Unexpected Error ocured");
    }
  };

  params = `{"name":"test","salary":"123","age":"23"}`;

  xhr.send(params);

  console.log("we are done");
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("you have clicked the pop handler");

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);

      let list = document.getElementById("list");
      str = "";

      for (key in obj) {
        str += `<li>${obj[key].id}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Error occured");
    }
  };

  xhr.send();
  console.log("we are done fetching the employees");
}
