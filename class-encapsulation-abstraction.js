//Encapsulation in JS
class Employee{

    setterMethod(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

}

const emp1 = new Employee();
emp1.setterMethod("John",43);

console.log(emp1.getName());