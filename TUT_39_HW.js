console.log("this is exercise for promises");

const fruits = [
  { name: "Mango" },
  { name: "Orange" },
  { name: "Guava" },
  { name: "Liche" },
  { name: "Jackfruit" },
  { name: "Pineapple" },
];

function addFruits(newFruit) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      size = fruits.length;

      if (size <= 8) {
        fruits.push(newFruit);
        console.log("new fruit has been added");
        resolve();
      } else {
        reject("array size exceeded");
      }
    }, 3000);
  });
}

function getFruits() {
  setTimeout(() => {
    let str = "";

    fruits.forEach(function (element) {
      str += `
                    <li>${element.name}</li>
            `;
    });

    let list = document.getElementById("fruits");
    list.innerHTML = str;
  }, 1000);
}

let banana = { name: "banana" };
let apple = { name: "apple" };
let lemon = { name: "lemon" };

addFruits(banana);
addFruits(apple)
  .then(getFruits)
  .catch(function (error) {
    console.log("Error :- ", error);
  });
addFruits(lemon)
  .then(getFruits)
  .catch(function (error) {
    console.log("Error :- ", error);
  });
