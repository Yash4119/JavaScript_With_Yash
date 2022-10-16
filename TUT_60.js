console.log("Destructuring in Javascript")

// const [a,c,b,d] = [1,2,3,4,5,6,7,8,98]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// const [a,c,b,...d] = [1,2,3,4,5,6,7,8,98]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
const obj = {a:12 , b:12 , c:234 , d:54 , e:65 , f:235};

const {a, b, c,...d} = obj

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// const myobj = {
//     a : "Yash",
//     b : function(){console.log("Hie Yash")},
//     c : true,
//     d : 12,
//     e : 456*789
// }

// const {a,b,...c} = myobj

// console.log(a,b,c)
// b()

// const fruits = ["Mango", "Papaya", "Banana"]

// const [a,...b] = fruits;
// console.log(a)
// console.log(b)