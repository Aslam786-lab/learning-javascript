function Employee(name){
    this.name=name
}
Employee.prototype.getName = function(){
    return this.name;
}

let emp1= new Employee("mohit")
// console.log(emp1.getName())

function Manager(name){
    this.name = name;
}

const mgr= new Manager("John") 


// console.log(mgr.getName());              //will through error 
mgr.__proto__.__proto__ = emp1.__proto__
console.log(mgr.getName());                 //John   because mgr inherits get name property from emp1



//prototype
function Name(name){
    this.name=name
}

const sayName= new Name('rahul')

Name.prototype.sayMyName=function(){
    return this.name
}


console.log(sayName.sayMyName);



//__proto__
let obj={
    name:'rahul'
}

let obj2={
    __proto__:obj,
    getName:function(){
        return this.name
    }
}


console.log(obj2.getName());