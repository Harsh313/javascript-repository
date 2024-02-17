const name = "Harsh-Sharma-hh "

const repocount =50

// console.log(name+repocount);

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
const getName = new String('harsh sharma');

// console.log(getName[0]);

// console.log(getName.__proto__);

// console.log(getName.length);
// console.log(getName.toUpperCase());
console.log(getName.charAt(3));
console.log(getName.indexOf('a'));
const newstring = getName.substring(0,4);
// console.log(newstring);
const anotherstring = getName.slice(-8);//you can insert a negative value as well and it will start from last

console.log(anotherstring);

const str = "   harsh sharma  ";
console.log(str);
console.log(str.trim());


const url ="https://www.google.%20com"
console.log(url.replace('%20','-'));


console.log(url.includes('harsh'));//false

console.log(url.includes('google'))//true
console.log(getName.split('-'));
