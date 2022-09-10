console.log("This is tut 51 and today we will learn about iterators in javascript")

// An Iterator consists of the next function which returns the next values in the sequence and a done value which represents whether the array has been iterated completely or not

function it(myarray){
    let index=0;

    return {
        next: function(){
            if(index < myarray.length){
                return{
                    value : myarray[index++],
                    done : false,
                }
            }
            else{
                return {
                    done : true,
                }
            }
        }
    }

}

const myarray = ["this","that","those","What","whose"]
console.log("my array is :- ",myarray)

let fruits = it(myarray);

console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);