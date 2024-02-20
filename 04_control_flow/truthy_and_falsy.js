// truthy  value are the value we assume that it is going to be true
// falsy  value are the value we assume that it is going to be false
// const userEmail = "h@hs.ai"
// if(userEmail){
//     console.log("Got the user email");
// }
// else{
//     console.log("don't have the user email");
// }

// in the above case we assume that useremail is true because it holds some string
// but if we pass an empty string to the if condition it will assume that it is a falsy value



// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN these are the falsy values in javascript

//truthy values
// "0", 'false', " ", [], {}, function(){} these are the truthy values in javascript

//checking the array 
// const arr =[]
// if(arr.length === 0){
//     console.log("array is empty");
// }
//checking if the object is empty



const emptyobject ={}
if(Object.keys(emptyobject).length===0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null and  undefined

let val1
// val1 = 5 ?? 10//output 5
// val1 = null ?? 10// output 10 
// val1 = undefined ?? 15// output 15
// val1 = null ?? 10 ?? 20
console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")//output more than 80
