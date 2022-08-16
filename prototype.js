function Employee(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName
}

const emp1 = new Employee("john","wick")
const emp2 = new Employee("albert","einstein")

Employee.prototype.fullName=function(){
    console.log(`${this.firstName} ${this.lastName}`);
}

// emp1.fullName()
// emp2.fullName()

//===================================================
function fun(){
    
}

fun.__proto__.parent = "parent"             //It refers to the parent class(Function) like java
fun.__proto__.__proto__.grand = "grand"     //It refers to the grand parent(Object) class

// console.log(fun.grand)                      //we can access grand parent class properties

//accessing through js function
function fun2(){}
console.log(fun2.parent);                   //parent   Function is available to all js fun
console.log(fun2.grand);                    //grand    Object is avaible to all js fun


//accessing with js object
const obj= {}
console.log(obj.parent);                    //undefined     because line 21 refers to Function obj which is only available to function not objects
console.log(obj.grand)                      //grand   beacause in line number 22 we are added property name grand so it is available to all js obj