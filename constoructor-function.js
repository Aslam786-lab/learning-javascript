//costructor function without new key word
function CreateEmployee(firstName,lastName,gender){
    let emp = {};
    emp.firstName = firstName;
    emp.lastName = lastName;
    emp.gender = gender;
    return emp;
}

// const emp1 = CreateEmployee("Jim", "halper", "M");
// console.log(emp1);



//constructor function with new keyword
function NewEmployee(firstName,lastName,gender,salary){
    // this= {};
    this.firstName = firstName;  //this refers to {}
    this.lastName = lastName;
    this.gender = gender;
    this.salary=salary
    this.increment=function(){
        this.salary += 200;        //this refers to newEmployee objs
    }
    // return this;
}

const emp2 = new NewEmployee("john","wick","M",1000)
// console.log(emp2)

//==============================================================
//this with call explicit binding
function Hr(name){
    this.name = name;
    this.salary=2000
}

let hr = new Hr("candyda")
hr.increment = emp2.increment;

hr.increment.call(emp2)        //using increament fun of hr increased the salary in emp2

console.log(emp2)