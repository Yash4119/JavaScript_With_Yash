console.log("Tut_49 is all about shorthand Character Classes")

// Shorthand Character Classes

let regex = /\wrry/
regex = /\w+rry/                // any number of characters
regex = /\Wrry/                 //  non word character
regex = /\W+bhai/               // \W+ means more than 1 non word characters
regex = /\d999/                 // will match such a digit that is followe by 999
regex = /\d+999/                // will match such a number that is ending with 999
regex = /shambho \d+999/        // will match such a number that is ending with 999
regex = /\D999/                 // will match a non digit word followed by 999
regex = /\D+999/                // will match a non digit sentence followed by 999
regex = /\scoding/              // to match any whitespace character
regex = /\s+coding/             // to match one or more whitespace character
regex = /\Sding/                // non whitespace character
regex = /\S+pt/i                // one or more non whitespace characters
regex = /ure\b/                 // word boundary

//  \w  => word character or a underscore pr a alphabet or a number

// *** ASSERTIONS ***

regex = /h(?=a)\w+/i            // after 'h' there should be a 'a'
regex = /h(?!y)\w+/i            // after 'h' there shouldn't be a 'y'

const str = "Harry %$#%^%#bhai ka    coding lecture 49 for JAVASCRIPT, har har harry999 shambho 273846500999";

let result = regex.exec(str);

if(regex.test(str)){
    console.log("String matched")
    console.log(result);
}else{
    console.log("String not matched")
}