//example 1
let promise = new Promise((resolve, reject) =>{
    let sum = 1+1;
    if(sum == 2){
        resolve("success")
        resolve("correct")                          //ignored if there are 2 or more resolve then only the 1st resolve is considered.
    }else{
        reject("Failed")
    }
})

// promise.then((message) =>{
//     console.log(`result is: ${message}`);           //result is: success
// }).catch((message) =>{
//     console.log(`result is: ${message}`);           //result is: Failed
// })



//example 2 (which one is fast console.log vs settimeout vs promise)
// console.log("start")

// setTimeout(() =>{
//     console.log("setTimeOut 1");
//     setTimeout(() =>{
//         console.log("setTimeOut 3");
//     },0)
// },0)

// setTimeout(() =>{
//     console.log("setTimeOut 2");
// },0)

// Promise.resolve().then(f => console.log("promise 1")).then(s => console.log("promise2"))

// console.log("end")

/*
start
end
promise 1
promise2
setTimeOut 1
setTimeOut 2
setTimeOut 3
*/



//promise chaining
 function existance(){
    return new Promise((resolve,reject) =>{
        
        const count =false
        if(count){
            console.log("lets count the nubers");
            setTimeout(resolve,2000)
             
        }else{
            reject()
        }
        
    })
}

// existance().then(() => console.log("1"))
// .then(() => console.log("2"))
// .then(() => console.log("3"))
// .then(() => console.log("4"))
// .then(() => console.log("5"))
// .then(() => console.log("6"))
// .then(() => console.log("7"))
// .catch(() => console.log("count rejected"))



//Static methods in promises
//promise.all method In this method all promises must be resolved if one promise is rejected then promise will be failed
//with this method alll promises are executed at the same time

const promise1 = new Promise((resolve, reject) =>{
    console.log("first promise")
    resolve("first")
})

const promise2 = new Promise((resolve, reject) =>{
    console.log("second promise")
    resolve("second")
})

const promise3 = new Promise((resolve, reject) =>{
    console.log("third promise")
    resolve("third")
})


// Promise.all([promise1, promise2, promise3]).then((res) => console.log(res)).catch((err) => console.log(`error fond ${err}`))

 /*
first promise
second promise
third promise
[ 'first', 'second', 'third' ]
 */



//Promise.allSettled
// Promise.allSettled([promise1, promise2, promise3]).then((res) => console.log(res)).catch((err) => console.log(`error fond ${err}`))

/*
first promise
second promise
third promise
[
  { status: 'rejected', reason: 'first' },
  { status: 'fulfilled', value: 'second' },
  { status: 'fulfilled', value: 'third' }
]
error fond first
*/


// Promise.race
Promise.race([promise1, promise2, promise3]).then((res) => console.log(res)).catch((err) => console.log(`error fond ${err}`))