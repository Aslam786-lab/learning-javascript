// //callback 1
function y(){
    console.log("i am y");
}

function x(y){
    console.log("i am x");
    y()
}
                                //i am x
x(y)                           //i am y




// //callback 2
function sum(a,b) {
    return a+b;
}

let res=function result(fn) {
    const num1 =10;
    const num2 = 15;
    return fn(num1, num2)
}

console.log(res(sum));       //25






//callback hell

setTimeout(() => {
    console.log("city");
    setTimeout(() => {
        console.log("district");
        setTimeout(() => {
            console.log("state");
            setTimeout(() => {
                console.log("country");
                setTimeout(() => {
                    console.log("continent");
                    setTimeout(() => {
                        console.log("earth");
                        setTimeout(() => {
                            console.log("solar sytem");
                            setTimeout(() => {
                                console.log("galaxy");
                                setTimeout(() => {
                                    console.log("Universe");
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);

/*
city
district
state
country
continent
earth
solar sytem
galaxy
Universe
*/
