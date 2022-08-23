
function sayHello() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hello");
        },2000)
    })
}

function sayWorld() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("world");
        },1000)
    })
}


//sequntial 
async function sequntial(){
    const hello = await sayHello()
    console.log(hello);

    const world = await sayWorld()
    console.log(world)
}


// sequntial()                     //3.177sec

//concurrent 
async function concurrent(){
    const hello = sayHello()
    const world = sayWorld()

    console.log(await hello);
    console.log(await world)
}

// concurrent()                 //it took 2.144 sec


//parallel
function parallel(){
    Promise.all([
        (async() => console.log(await sayHello()))(),
        (async() => console.log(await sayWorld()))()
    ])
}

parallel()                      //2.13sec