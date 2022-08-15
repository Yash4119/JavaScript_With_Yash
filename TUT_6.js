console.log("we are att tut_6 js");

const name1 = "harry";
const greeeting = "Good Morning";
// console.log(greeeting + " " + name1);

let html;
html = "hie yash" + " How are you";
html = html.concat(" All ok ?", ", Studying yash?");
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);

// console.log(html[0]);

console.log(html.indexOf("yash")); // return starting index of the first occurence of string ,if not present then returns -1.

console.log(html.lastIndexOf("yash")); //return starting index index of the last occurence of the string

console.log(html.charAt(5));

console.log(html.endsWith("yash?"));
console.log(html.endsWith("yash"));
console.log(html.includes("are you All"));
console.log(html.substring(4, 15));
console.log(html.slice(-4));
console.log(html.slice(0, -14));
console.log(html.slice(0, 4));

const arr = html.split(" "); // this splits the string wqherever it finds and " " space. you can use diff identifier as well
console.log(arr);

console.log(html.replace("yash", "krishna")); // this replaces only the first occurence of this given string

let fruit1 = "orange";
let fruit2 = `hello ${fruit1}
              <h1>This is a heading </h1>
              <p>my name is <strong>${name1}</strong></p>
             `;

document.body.innerHTML = fruit2;
console.log(fruit2);

let firstName = "Yash";
// let middleName = "Jayram"
let lastName = "Ambekar";

// literals are the ones which are enclosed in the `` (backticks)
// we can write the html code or can use html tags within the backticks

let sentence = `My Name is <h4 style="color : orange">${firstName} Jayram ${lastName}</h4> and I am a <strong style="color:red">third year</strong> computer engineering undergrad student`;

document.body.innerHTML = sentence;
console.log(sentence);
