//currying 

function add(fn) {
    return function (a) {
       return function (b) {
        return function (c) {
            return fn(a,b,c);
    }
   } 
  }
}


function sum(a,b) {
    return a+b;
}

// const res=add(sum)(2)(3)(4);
// console.log(res);

//currying in single line
const res1= (fn) => (a) => (b) => (c) => fn(a,b,c);
// console.log(res1(sum)(2)(3)(4));



//Infinite currying in js

function infAdd(a){
    return function(b) {
        if(b) return infAdd(a+b);
        return a;
    }
    
}

//Infinite currying in one line
const var2= (a) => (b) => (b) ? var2(a+b) : a;

console.log(infAdd(2)(3)(8)(9)())
