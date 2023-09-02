// What are the scope in Javascript

// 1 Global Scope variable 
// 2 Local Scope or Funtional scope  variable 
// 3 Block scope

// let a=10;
// const b=20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// In above program you will not get any turble . 

//  But as it comes with { } then you will face the problems 

//  for example 

let a=300;   // This global scope

if(true){
    let a=100;   // This is block is {  } scope here, which is accessable inside the { } 
    const b=20;
    var c=30;
    // here let and const are not excuteable out side the {  }  scope 

    console.log("Block scope value " +  a); // output 10;
}

// console.log(a);
// console.log(b);

//  the below a is a global scope variable which will Output 300 as given
console.log("Global scope value " + a);


// PART 2  Nested Scope  while using function

function one() {  // simple logic, bade bachhe chhoto se ice-cream nahi chhin sakte , but chhot bache bado ic-cream chhin sakte hai 

    //  yehi logic yaha apply ho raha hai  one() bada hai two () chhota hai 
    const username ="suraj"

    function two(){
        const website="Youtube";
        console.log(username);
    }

//  after runnig the code(line number 53) getting ReferenceError: website is not defined

    // console.log(website);   

    
    // two();

}


one();



//  PART 3 Using if else

if(true){
    const username="suraj"
    if(username === 'suraj'){
        const website =' youtube'
        console.log(username + website);
    }

    //  line number 75 error dega, Becuse website ka scope { line no - 69 to 72 } tak hi hai 

    // console.log(website);
}

// Similaryly, the below one is not define outside of if so this will also give me error UNDEFINE 

//  console.log(username);

 //  ***** PART 4 Intersting *******

 function addone(num) {
    return num+1;
 }

//  this will return the output 7 
 addone(6);


 
//   here, the term comes Hoisting 
//   calling function befor declaration will throw the error, this is called hoisting 
 addtwo(8);

const addtwo =function (num) {
    
    return num+2;
}