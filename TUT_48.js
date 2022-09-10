console.log("Tut 48 about characters sets in regular expressions in JAVASCRIPT")

// *************** REGULAR EXPRESSIONS ***************
// Basiv functions
// Metacharacter Symbols
// Character Sets

// if you know that you have to keep a particular variable unchanged then simply declare it as const

// using sqaure brackets [] we can have a character set

// const regex = /^har/;
// const regex2 = /es$/
// const str = "har ghar harry bhai ke classes";

// let result = regex.exec(str);
// const result2 = regex2.exec(str)

// if(regex.test(str) && regex2.test(str)){
//     console.log("The string matched")
//     console.log(result);
//     console.log(result2);
// }else{
//     console.log("the string didn't matched")
// }

// for using * or ? in your regex simply use \ backslash before the * or ? and this is called escape sequence

let regex = /h[a-zA-Z]r/;
regex = /h[^ary]r/;

// *** QUANTIFIERS ***

regex = /har{2}y/i;         // r has to occur exactly 2 times
regex = /h[a-zA-z]r{0,2}y{1,2}/;         // r has to occur in between 0 to 2 times

// *** GROUPINGS ***
// we use parathesis for groupings

regex = /(h[a-zA-Z]r){2}/
regex = /(h[a-zA-Z]r){2}([0-9]r){3                                                                                                                                                                                                                                                                                                                                                                                                                                              }/

const str = "harhAr1r1r3r shambhu, ghar hArry bhai ke classes";

let result = regex.exec(str);

if(regex.test(str)){
    console.log("The string matched")
    console.log(result);
}else{
    console.log("the string didn't matched")
}