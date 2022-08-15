console.log("Hello Friends Now We are in TUT_15");

document.getElementById("heading").addEventListener("click", function (e) {
  let variable;
  console.log("You have clicked the heading");

  variable = e.target;
  console.log(variable);

  variable = e.target.className;
  console.log(variable);

  variable = Array.from(e.target.classList);
  variable.forEach(function (item) {
    console.log(item);
  });

  console.log("Length of array :- ", variable.length);

  variable = e.target.id;
  console.log(variable);

  variable = e.target.className;
  console.log("Gets :- ", variable);

  variable = e.offsetX;
  console.log(variable);

  variable = e.offsetY;
  console.log(variable);

  variable = e.screenX;
  console.log(variable);

  variable = e.clientX;
  console.log(variable);
});
