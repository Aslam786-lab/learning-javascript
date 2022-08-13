//poly fill for call
Function.prototype.callMethod=function(obj,...args){
    obj._this=this
    return obj._this(...args)
}

//====================================================
const person={
    firstName:"john",
    lastName:"wick"

}

 let fullName=function(city,country){
        return this.firstName+"..."+this.lastName+"..."+city+"..."+country;
    }



let callm=fullName.callMethod(person,"LA","US");
console.log(callm)