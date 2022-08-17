//inheritence in js using class
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    description (){
        return `I am ${this.name} and I am ${this.age} old.`;
    }
}

class Developer extends Person{
    constructor(name , age, experience){
        super(name, age);
        this.experience = experience;
    }
}

const person = new Person("John", 36);
const developer = new Developer("Angela", 38, 9)

// console.log(person)                                 //{ name: 'John', age: 36 }
// console.log(developer);                             //{ name: 'Angela', age: 38, experience: 9 }

// console.log(developer.description());               //I am Angela and I am 38 old.



//========================================================================================================


//Polymerphism in js method overriding
class Animal{
    constructor(name){
        this.name = name;
    }

    makeSound(){
        return "Animal sound"
    }

}

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    makeSound (){                       //method overring 
        return "Dog sound";
    }

    makeSound(low){                     //method overloading
        return "low sound"
    }
}

const dog = new Dog("lamb")
console.log(dog.makeSound())            //Dog sound
console.log(dog.makeSound("low"));      //low sound