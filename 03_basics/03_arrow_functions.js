const user = {
    username: "Harsh",
    price: 999,
    WelcomeMessage: function(){
        console.log(`${this.username} welcome to the project`);//this keyword is use for the current context of the variable 
        console.log(this);//'this' will print the whole object 
    }

}

// user.WelcomeMessage()
// user.username="sam"
// user.WelcomeMessage()
// console.log(this);//output will be empty object 


// function chai (){
//     console.log(this);//in function this will not be used 
// }


//+++++++++++++++++++arrow function++++++++++++++++++++++++++++++++++///
// const chai = function(){
//     let username = "harsh"
//     console.log(this.username)
// }
// chai()//result will be undefined
const chai = ()=>{//this is the arrow function
    let username = "harsh"
    console.log(this.username)
}
// chai()


// const addTwo =(num1,num2)=>{//basic arrow function
//     return num1+num2
// }
// const addTwo =(num1,num2)=>  num1+num2//if the line code is less then we can use this type of method as well
// const addTwo =(num1,num2)=> ( num1+num2)//if we wrap with circular bracket then we don't have to write return keyword but in paranthesis we have to write the return keyword
const addTwo =(num1,num2)=>({username:"harsh"})
console.log(addTwo(3,7));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()