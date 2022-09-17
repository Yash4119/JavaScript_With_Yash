console.log("This is Tut 53 and today we will learn about generators")

// suppose we need an array of elements ranging from 1 to 1B in that case declaring such a large array is not feasible and hence here we must use a generator

//  function* temp(){}      => syntax for a generator

// function* generate_num(){
//     let i=0;

//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// let ans = generate_num();

// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());

function* gen_num(){
    let i=0;
    while(true){
        yield i++;
    }
}

let ans = gen_num();

console.log(ans.next());
console.log(ans.next());