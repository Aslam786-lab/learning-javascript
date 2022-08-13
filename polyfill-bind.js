Function.prototype.myBind=function(obj,...args){
    obj._this=this
    obj._this(...args)
    return function(){
        return obj._this(...args);
    }

}




//==================================================
const person={
    firstName:"john",
    lastName:"wick"

}

let fullName=function(){
    return this.firstName+"..."+this.lastName;
}


const bindM=fullName.myBind(person);
console.log(bindM())