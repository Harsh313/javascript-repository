const score = 400


const balance = new Number(200)
console.log(score);
console.log(balance);

console.log(typeof balance.toString());//string

console.log(balance.toFixed(2));//200.00

const number = 23.8976;

console.log(number.toPrecision(4));//return a string value output is 23.90 gives a round value
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000



// ++++++++++++++++++++ Maths ++++++++++++++++++++++++++//

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(7.3));
console.log(Math.ceil(4.3));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//genrate a random value between 10 to 20