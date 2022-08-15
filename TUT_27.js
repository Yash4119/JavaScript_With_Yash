console.log(
  "we are watching tut 27 of code with harry javascript playlist and today we will learn the concept of object literals"
);

// Object Literal for creating objects
let car = {
  name: "vitara brezza",
  topspeed: 200,
  run: function () {
    console.log("the car is running");
  },
};

console.log(car);

// Constructor is a template using which we can create an object
// new Date();   ==> this ia a constructor

// creating a constructor for cars

function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topspeed = givenSpeed;
  this.run = function () {
    console.log(
      `${this.name} is running at a TopSpeed of ${this.topspeed}Km/hr`
    );
  };
  this.analyze = function () {
    if (this.topspeed > 250) {
      console.log(
        `${this.name} is faster by ${
          this.topspeed - 250
        }Km/hr than that of the Mercedes`
      );
    } else if (this.topspeed < 250) {
      console.log(
        `${this.name} is slower by ${
          250 - this.topspeed
        }Km/hr than that of the Mercedes`
      );
    } else {
      console.log(`${this.name} is as fast as a Mercedes`);
    }
  };
}

car1 = new GeneralCar("Mustang", 200);
car2 = new GeneralCar("Range Rover", 250);
car3 = new GeneralCar("Lamborgini", 400);

console.log(car1);
console.log(car2);
console.log(car3);
