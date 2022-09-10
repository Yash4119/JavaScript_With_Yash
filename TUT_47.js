console.log("Tut_47 in this video we will learn about metacharacters in javascript for Regular Expression")

// let regex = /harry/ig;

// let str = "Harry is a good boy and harry boy teaches coding very well";

// let result = regex.exec(str);
// console.log(result)
// result = regex.exec(str);
// console.log(result)

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression :- ${regex.source}`);
// }
// else{
//     console.log(`the string ${str} does not match the expression :- ${regex.source}`)
// }

let newreg = /^Har/ig    // ^ this is the carat symbol and this represents starts with
let newreg2 = /one$/ig   // $ at the end of string means ends with
let newreg3 = /ha.ry/ig  // dot . means matches anyone character
let newreg4 = /ha*ry/ig  // dot . means matches one or more character
newreg4 = /ha?rryi?/
newreg = /h\*rry/
let string2 = "hrry is noone";

if(newreg.test(string2)){
    console.log(newreg.exec(string2));
}
else{
    console.log("Not Matched")
}

// let result2 = newreg2.exec(string2);
// console.log(result2)

// let ressult = newreg3.exec(string2);
// console.log(ressult)

// let result5 = newreg4.exec(string2);
// console.log(result5)