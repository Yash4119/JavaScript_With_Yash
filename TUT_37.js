console.log(
  "this is tut 37 and today we will learn about callback functions in javascript"
);

// we will memic the response of server
// callback function is a function within a function
// FOR EXAMPLE :- when we use a for Each loop then we are using a callback function within it as the for each loop is itself a function and it is using a function within it

// set timeout kehta hai ki aap joh kar rahe hai voh karte rahe ye andar jo likha hgai ai voh dekh lunga backgroundd mai

// Callback functions are asynchronous in nature

// STUDENTS OBJECT
const students = [
  { name: "Yash Ambekar", subject: "C++" },
  { name: "Krishna Kotgire", subject: "Competitive" },
];

// ENROLL STUDENTS FUNCTION
function enrollStudents(newStudent, callback) {
  setTimeout(function () {
    students.push(newStudent);
    console.log("New Student has been enrolled");
    callback();
  }, 3000);
}

// GET STUDENTS FUNCTION
function getStudents() {
  setTimeout(() => {
    let str = "";
    students.forEach(function (element) {
      str += `
                    <li>${element.name}</li>
            `;
    });

    document.getElementById("students").innerHTML = str;
    console.log("Students fetched successfully");
  }, 3000);
}

// ENROLL A NEW STUDENT
let newStudent = { name: "Avadesh Vora", subject: "Love Babbar" };
enrollStudents(newStudent, getStudents);
