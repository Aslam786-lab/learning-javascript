
//closure is function along with its lexical scope bundle together to form closure

function name() {
    let val=10;
    function name1() {
        console.log(val)
    }
    return name1;
}

let z=name()

console.log(z())



//======================================
function counter() {
    let count=0;

    return function increment() {
        count++;
        console.log(count);
    }
}

let var1=counter();
var1()  //1
var1()  //2
var1()  //3

let var2 =counter();
var2()  //1



