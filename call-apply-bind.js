let name={
    firstName: "john",
    lastName : "Hock",
    fullName : function(){
        console.log(this.firstName+"..."+this.lastName)
    }
}

// name.fullName()


let name2={
    firstName:"john",
    lastName :"wick"
}

// name.fullName.call(name2)

//===============================================================

const fullName=function(city,country){
    console.log(this.firstName+"..."+this.lastName+"...."+city+"..."+country)
}

// fullName.call(name2,"LA","US");

//apply()
// fullName.apply(name2,["LA","US"])


//bind()
const printName=fullName.bind(name2,"LA","US");

console.log(printName); //returns fun declaration
printName()             //john...wick....LA...US