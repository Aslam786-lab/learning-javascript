//implicit binding
const person={
	name : 'rahul',
	myName : function(){
	console.log(`my name is ${this.name}`)	
}

}

//implicit way
// person.myName();

//explicit binding
const person2={
    name: "ravi"
}

function myName(){
    console.log(`My name is ${this.name}`)
}

//explicit way
// myName.call(person2)



//New binding/Constructor function
function Person3(name){
    this.name=name;

}

const personName = new Person3("rahul");

//new binding way
// console.log(personName.name)



//Default binding
globalThis.name="john"

function globalName(){
    console.log(`My global name is: ${this.name}`)
}

globalName()