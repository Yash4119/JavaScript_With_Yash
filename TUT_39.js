console.log(
  "this is tut 39 and today we will learn about promises in javascript"
);

// there are two possibilities when we promise someone
// either the promise is RESOLVED or else the promise is REJECTED and other case is that promise is PENDING

// while using a promise the promise will take a function and that function will further take 2 more functions
// .then means that what if callback gets resolved
// resolve function is given along with then and reject is given along with catch

// function func1() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       error = true;

//       if (!error) {
//         console.log("Function : your promise has been fulfilled");
//         resolve();
//       } else {
//         console.log("Function : Your promise has not been fullfilled");
//         reject("Sorry error occurred");
//       }
//     }, 3000);
//   });
// }

// func1()
//   .then(function () {
//     console.log("Yash :- Congratulations promised completed");
//   })
//   .catch(function (error) {
//     console.log("Yash :- Very bad. Reason :- ", error);
//   });

// EXAMPLE FOR THE PROMISES

const students = [
  { name: "Yash Ambekar", subject: "C++" },
  { name: "Krishna Kotgire", subject: "Competitive" },
];

// ENROLL STUDENTS FUNCTION
function enrollStudents(newStudent) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(newStudent);
      console.log("New Student has been enrolled");
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
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
  }, 1000);
}

// ENROLL A NEW STUDENT
let newStudent = { name: "Avadesh Vora", subject: "Love Babbar" };
enrollStudents(newStudent)
  .then(getStudents)
  .catch(function () {
    console.log("Sorry Error Occurred");
  });
