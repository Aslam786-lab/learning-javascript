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
    { name: "bike",     price: 1000, year: 2019},
    { name: "pc",       price: 500, year: 2016},
    { name: "book",     price: 60, year: 2019},
    { name: "album",    price: 400, year: 2008},
    { name: "phone",    price: 600, year: 2007},
    { name: "keyboard", price: 40, year: 2008},
    { name: "tv",       price: 80, year: 2019}
]

//map
const resM=arr.myMap((x) => x*2);
// console.log(resM);

//filter
const resF = arr.myFilter((x) => x>500)
// console.log(resF);

//reduce
const resR = arr2.myReduce((sum,item) => {return sum+item.price},0)
// console.log(resR)



//problem list out the perticular years with number of items brought ex{2019: 3, 2008:2,2007: 1....}

const yearR = arr2.myReduce((obj, item) => {
    if(obj[item.year]){
        obj[item.year]++
    }else{
        obj[item.year]=1
    }
    return obj;
},{})

console.log(yearR)     //{ '2007': 1, '2008': 2, '2016': 1, '2019': 3 }