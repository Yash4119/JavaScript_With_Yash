console.log(
  "Now We are in the Tut 18 and today we will learn javascript events"
);

// let btn = document.getElementById("btn");
let btn2 = document.querySelector(".btn2");
let btn = document.querySelector(".container");
// btn2.addEventListener("click", func1);
// btn2.addEventListener("dblclick", func2);
// btn2.addEventListener("mousedown", func3);
btn2.addEventListener("mouseleave", func3);
btn2.addEventListener("mouseenter", func2);
btn.addEventListener("mousemove", func1);

function func1(e) {
  //   console.log("thanks :- ", e);
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetY})`;
  e.preventDefault();
}

function func2(e) {
  //   console.log("thanks for the double click");

  document.body.style.backgroundColor = `cyan`;
}

// other events like mousedown and mouseup and mouseenter and mouseleave
// mousmove

function func3(e) {
  //   console.log("it is a mouse down ");
  document.body.style.color = "red";
}
