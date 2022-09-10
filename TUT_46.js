console.log("This is Tutorial 46 and today we will learn about regular expressions")

//  Double slash is a comment but anything within the double slash iis called a Regular Expression

let reg = /Hey Harry/g   // this is a regular expression literal
 reg = /Hey Harry/ig  // this is a regular expression literal

// ************** Flags ***************
//  g => global flag
//  i => case insensitivity

// console.log(reg.source)     // reg.source give the content within the regular expression literal

let s = "This is channel,Hey Harry hey harry";

// 1. exec() = this function will return an array for match and null for not match
let result = reg.exec(s);
// console.log(result)
// result = reg.exec(s);
// console.log(result.groups)
// result = reg.exec(s);
// console.log(result.input)
// result = reg.exec(s);
// console.log(result.index)

// 2. Test Function
// Returns either true or false

// console.log(reg.test(s))

// 3. match()    => it will result and array of results or null
let result3 = s.match(reg)
// console.log(result3)
// in this case the string is matched with the regular expression

// 4. search()      => return index of the first match in the given string

let result4 = s.search(reg);
console.log(result4)

// 5.Replace()       => Returns the new replaced string with all the replacements

let result5 = s.replace(reg,"Hey Yash")         // this will replace the very first instance and in order to replace all the instances we need to declae the reg exp as global
console.log(result5)