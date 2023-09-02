// What is function ? 

/*
A function definition (also called a function declaration, or function statement) consists of the function keyword, 

followed by:

*  The name of the function.
 * A list of parameters to the function, enclosed in parentheses and separated by commas.
*/

 // Basic functions 
// The below function consist parameters/Arguments 

function addnumber(num1,num2){
    console.log(num1+num2);
}
addnumber(5,10);


// Basic Return function
function addnum(num1,num2){
    return num1+num2;
}
const result=addnum(10,20);
console.log(result);

// 2nd example of return  

// here we are passing default as default value which return if username not entered 

// So, In that case if block not execute

function login(username = "Default") {
    if(username===undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(login("Suraj Chaudhary"));

// ==================== //


// here, we are using Rest Opretor which create an array of values what ever we put into num1
// Syntac for Spared  Oprator:  ...num1 

function calculateprices(...num1) {
    return num1;
}

console.log(calculateprices(100,200,300));

const user={
    username:"suraj",
    prices:199
}

function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleobject();

handleobject ({
    username:"newname",
    price:199
})

const myNewArray =[200,400,100,600]

function valueofarray(getarray) {
    return getarray[1];
}

console.log(valueofarray(myNewArray));

