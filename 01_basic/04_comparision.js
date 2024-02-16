// console.log("2">1);
// console.log("02">1); both output will be true 


//don't use this 3 line generally
// console.log(null == 0);//false
// console.log(null > 0);//false
// console.log(null >= 0);//true

// the reason of above output is that == and <,> operator work differently than >= or <=

// same problem will occur in undefined but the only difference of null is that it will always give false



// strict check === this operator check the data type as well

console.log("2"==2);//true

console.log("2"===2);//false