Function.prototype.myApply=function(obj,args){
    obj._this=this    //left _this is refering the obj and right this refering to  fullName function
    if(!Array.isArray(args)){
        return "TypeError"
    }
    return obj._this(...args)
}




const person={
    firstName:"john",
    lastName: "wick"
}

function fullName(city,country){
    return `First Name ${this.firstName} ${this.lastName} is from ${city} ${country}`;
}


const applyM=fullName.myApply(person,"LA","US")
console.log(applyM)