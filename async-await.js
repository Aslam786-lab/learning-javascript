// expected add --> get --> concat

function getData(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log("got data")
            resolve()
        },1000)
    })
}

function addData(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log("added data")
            resolve()
        },3000)
    })
}

function concatData(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log("concated data")
            resolve()
        },2000)
    })
}


async function start(){
    
    await addData()
    await getData()
    await concatData()

}

start()



 