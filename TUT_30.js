console.log(
  "this is tut 30 and today we are going to learn prototype inheritance in javascript"
);

const proto = {
  slogan: function () {
    return `this is tutorial 30`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

let harry = Object.create(proto);
harry.name = "Harry Bhai";
harry.role = "Youtuber";

harry.changeName("Code_With_Harry");
// console.log(harry);

const harry2 = Object.create(proto, {
  name: { value: "Harry Bhai", writable: true },
  role: { value: "Programmer" },
});

harry2.changeName("Done Harry bhai");
// console.log(harry2);

// EMPLOYEE CONSTRUCTOR

function employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

// slogan
employee.prototype.slogan = function () {
  return `this is the besy company, with regards ${this.name}`;
};

let yash = new employee("Yash", 1000000, 12);
console.log(yash);

// Programmer
function programmer(name, salary, experience, language) {
  employee.call(this, name, salary, experience);
  this.language = language;
}

// prototype inheritance beign done manually
programmer.prototype = Object.create(employee.prototype);
programmer.prototype.constructor = programmer;

let yash_coder = new programmer("Yash Ambekar", 10000000, 1, "JavaScript");
console.log(yash_coder);
