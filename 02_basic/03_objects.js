// singleton

// object literals
const mySym = Symbol("Mykey1");// declaring symbol 

const JsUser = {
    name: "Harsh",//name will replace by "name" by the interprator
    "full name":"Harsh Sharma",//another way of declaring object properties 
    [mySym]: "Mykey1",
    age: 21,
    location:"delhi",
    isLoggedIn: false,
    LastLogin: ["Monday","Sunday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// // console.log(JsUser.full name);//we can't access like this 
// console.log(JsUser["full name"]);//we can access this only like this
// console.log(JsUser[mySym]);//printing a symbol  



// console.log(typeof JsUser[mySym]);
JsUser.age=22;
// Object.freeze(JsUser);
JsUser.age =24;
// console.log(JsUser);


// adding function in a object

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
