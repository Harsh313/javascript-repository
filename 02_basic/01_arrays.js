// arrays

const arr = [0,1,2,3,4,5];

const arr2 = new Array(2,3,4,5);//way of declaring an array


// console.log(arr[0]);

// array methods

// arr.push(9);
// arr.push(10);
// console.log(arr);
// arr.pop();

// arr.unshift(9);
// arr.shift();//pop out the first element of the array

// console.log(arr.includes(9));
// console.log(arr);
// console.log(arr.indexOf(5));
// const newarray = arr.join();//return a string
// console.log(typeof newarray);


//slice and splice


const arr4 = arr.slice(1,3);//1,2 and it will not affect the original array 
console.log(arr);
console.log(arr4);
const arr3 =arr.splice(1,3)//1,2,3 and it will affect the original array 

console.log(arr3);
console.log(arr);