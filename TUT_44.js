console.log(
  "this is tutorial 44 and today we will learn about error handling in javascript"
);

let bool = true;

if (!bool) {
  throw new Error("Bool is False");
} else {
  console.log("Error Didn't Occurred");
}

try {
  console.log("We are inside the try block");
  if (bool) {
    throw new Error("This is a Custom Error created by Me");
  }
} catch (error) {
  console.log("Are you Ok?");
  console.log(error);
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("running the finally block");
}
