// console.log(a);
// console.log(b);
// console.log(c);

// //normal funtion
// console.log(getName());
// console.log(getName);

//function expression
// console.log(fun());

// //arrow function
// console.log(arrow());

//hoisting in javascript
var a=15;
let b=20;     //hoisting of let is not possible
const c= 30;  //hoisting of const is not possible

//functions 
//normal funtion(possible)
function getName() {
    console.log("hello javascript");
}

//function expression(not possible for function but variable is hoisted with undefined)
var fun = function(){
    console.log("hello javascript");
}

//arrow function() (not possible for function but variable is hoisted with undefined)
var arrow = () => "hello javascript";

//IIFE 
//hoisting of IIFE is not possible because it is a expression not statment
(function(){
    console.log("hello javascript");
}());




