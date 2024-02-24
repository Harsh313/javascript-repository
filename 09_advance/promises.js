const promisOne =new Promise(function(resolve,reject){
    // do an async task like DB cryptography and network related task
    setTimeout(function(){
        console.log("Async task complted");
        resolve();//this will connect with then in line no.9
    },1000)
})

promisOne.then(function(){// then is directly related to resolve 
    console.log("promise consumed");
})

new Promise(function(resolve,reject){//second promise
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})//another method to use promises


const promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"harsh",email:"example@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        if (!error) {
            resolve({username:"Harsh",password:123});
        }else{
            reject("Error :something went wrong");
        }
    },1000)
})
promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')// jab bhi hume pata chale ki response ane me time lage ga tab hum await ka use karte hai 

//         const data = await response.json()//isliye humne yeh bhi await ka use kiya hai 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/Harsh313')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))