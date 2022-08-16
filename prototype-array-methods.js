//prototype of map method
Array.prototype.myMap = function(fn){
    let newArray = [];
    for(let i=0;i<this.length;i++){
        newArray.push(fn(this[i]));
    }
    return newArray;
}

//prototype filter method
Array.prototype.myFilter = function(fn){
    let newArray = [];
    for(let i=0;i<this.length;i++){
        if(fn(this[i]))
            newArray.push(this[i])
    }
    return newArray;
}

//prototype of reduce
Array.prototype.myReduce=function(fn,val){
    let newArray = val;
    for(let i=0 ;i<this.length;i++){
        
        newArray=fn(newArray,this[i])
        
    }
    return newArray;
}


const arr=[100,300,500,200,1000]
const arr2=[
    { name: "bike",     price: 1000},
    { name: "pc",       price: 500},
    { name: "book",     price: 60},
    { name: "album",    price: 400},
    { name: "phone",    price: 600},
    { name: "keyboard", price: 40},
    { name: "tv",       price: 80}
]

//map
const resM=arr.myMap((x) => x*2);
// console.log(resM);

//filter
const resF = arr.myFilter((x) => x>500)
// console.log(resF);

//reduce
const resR = arr2.myReduce((sum,item) => {return sum+item.price},0)
console.log(resR)
