// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.

// fulfilled: meaning that the operation was completed successfully.

// rejected: meaning that the operation failed.


const promisone =new Promise(function (resolve, reject) {
    
    // DO an async taks
    // DB calls, cryptography, network 

    setTimeout(function(){
        console.log("Async taksis completed ");
       resolve();
    },1000);
})


promisone.then(function(){

    console.log("promis consumed");
})

new Promise(function (resolve,reject) {
    setTimeout(function () {         
        console.log("Async task 2");
    },1000)    
}).then(function(){
    console.log("Async taske 2 resolved");
})



// 3rd promisss

const promisthree= new Promise(function (resolve,reject) {
    setTimeout(function(){

        resolve.apply({username:"promis", email:"resolve"})

    },1000)
})

promisthree.then(function (user) {
    console.log(user);
})




// 4th Promiss 


const promissfour =new Promise(function (resolve,reject) {
    
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"suraj", Password:" 123"})
        }
        else{
            reject("Error : Someting is went wrong")
        }
    }, 1000);
})


promissfour.then((user)=>{
console.log(user);
return user.username
})
.then((username) =>{   
    console.log(username);
})
.catch(function(error){
    console.log("error");
})
.finally( () =>{
    console.log("The promiss is either resoloved or rejected");
})  


// 5 Promiss

const promissfive = new Promise(function(reject,resolve){
    setTimeout( function() {
        
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"1234"})
        }
        else{
            reject("Error: Js went wrong")
        }
    },1000);
})


// handaling by async and awiat 

// async function consumepromissfive(){
//     try {
//         const resopons =  await promissfive
//     console.log(resopons);
//     } catch (error) {
        
//         console.log((error));
//     }
// }

// consumepromissfive();



// Let's use fetch using .then .catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=> console.log(data))

.catch((error) => console.log(error))

