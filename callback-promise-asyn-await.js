//problem statement so if we getData before pushing the data with delay of 1s we dont get newData 
//because js doest wait to createData it will getData before creating it so to achieve this wait we can use (callbacks, promises, async-await)
const data = [{name: "john", age: 34},{name: "robert", age : 41}]

function createData(newData,getData){
    setTimeout(() =>{
        data.push(newData)
        getData()                       //getData will execute only when the data is pushed 
    },2000)
                              
}

function getData(){
    setTimeout(() =>{
        for(let i=0;i<data.length;i++){
            console.log(data[i].name);
        }
    },1000)
}


//normal way
// createData({name : "Noel", age: 28})                
// getData()

/*
getData=1s, creatData=2s
john
robert

getData=2s, creatData=1s
john
robert
Noel
*/


//Using callbacks
// createData({name : "Noel", age: 28},getData)  

/*
john
robert
Noel
*/



//Promises
function createDataP(newData){
   return new Promise((resolve,reject) =>{

    setTimeout(() =>{
        data.push(newData)
        const error =false;
        if(!error){
            resolve()
        }else{
            reject("error found")
        }
    
    },2000)

   })                            
}

function getDataP(){
    setTimeout(() =>{
        for(let i=0;i<data.length;i++){
            console.log(data[i].name);
        }
    },1000)
}

// createDataP({name : "Noel", age: 28})
// .then(getDataP)
// .catch(err => console.log(err))

/*
john
robert
Noel
*/


//asyn await

async function start(){
    await createDataP({name : "Noel", age: 28})
    getDataP()
}

start()

/*
john
robert
Noel
*/