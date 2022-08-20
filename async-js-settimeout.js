//setTimeOut
// setTimeout(function(name){
//     console.log(`my name is ${name}`);
// },5000,"jhon")                           //after 5s jhon


//clearTimeOut
const timer = setTimeout(() => {
    console.log("hello");
}, 1000);


// clearTimeout(timer);                        //will not print anythind clears the setTimeOut function


//setInterval
// setInterval(function(name){
//     console.log(`my name is ${name}`);
// },2000,"jhon")                                  //my name is jhon for every 2s


//clearInterval
// const timer2 = setTimeout(() => {
//     console.log("hello");
// }, 1000);

// clearInterval(timer2)                           //will not print anythind clears the setInterval function


//recursive setTimeOut func = setInterval 
setTimeout(function run(){
    console.log("hello");
    setTimeout(run,2000)
},2000)                                             //hello after every 2s
