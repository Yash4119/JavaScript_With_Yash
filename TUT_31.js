console.log(
  "this is tut 31 and today we are going to learn ES6 classes and inheritaance"
);

// class is a blueprint or a template

class employee {
  constructor(givenname, givensalary, givenexperience) {
    this.name = givenname;
    this.salary = givensalary;
    this.experience = givenexperience;
  }

  slogan() {
    return `I am ${this.name} and this is the best company to work in.`;
  }

  get_joining_year() {
    let curr_year = new Date().getFullYear();
    return curr_year - this.experience;
  }

  static add(a, b) {
    return a + b;
  }
}

employee.add(45, 55);

let obj = new employee("Yash Jayram Ambekar", 123456, 2);

console.log(obj);

// INHERITANCE IN JAVASCRIPT USING ES6 CLASSES
// WE CANNOT USE THE THIS KEYWORD IN THE STATIC METHODS

class programmer extends employee {
  constructor(
    givenname,
    givensalary,
    givenexperience,
    givenlanguage,
    givengithub
  ) {
    super(givenname, givensalary, givenexperience);
    this.language = givenlanguage;
    this.github = givengithub;
  }

  favourite() {
    if (this.language === "Python") {
      return "Python";
    } else {
      return "JavaScript";
    }
  }

  static multiply(a, b) {
    return a * b;
  }
}

let obj2 = new programmer("Krishna", 12345, 3, "Java", "kisna2512");
console.log(obj2);
