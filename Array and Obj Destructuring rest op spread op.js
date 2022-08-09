//array or object destructuring and spread operater
//Arrays
//i)spread operater as rest
const alphabhet = ['A','B','C','D','E','F'];

//...args is spread operater as rest
const [a,,c, ...rest]= alphabhet;

// console.log(a);
// console.log(c);
// console.log(rest);



//ii)destructuring in array

function sumAndmul(a,b) {
    return [a+b,a*b,a-b];
}

const [sum,multiply,division = "No division"]= sumAndmul(2,3);

// console.log(sum);       //5
// console.log(multiply);  //6
// console.log(division);  //No division for defaulting the value











//Object destructuring

const person = {
    name: "sally",
    age:32,
    address:{
        city: "somewhere",
        state: "some state"
    }
}

const person1 = {
    
    age:20,
    address:{
        city: "delhi",
        state: "karntaka"
    }
}

//destructuring of obj
// const { name,address: { city }} = person;

// console.log(name);
// console.log(city);



//rest operater of obj
const {name,...rest1} = person;

// console.log(name);
// console.log(rest1);



//overding person obj with person1 using spread operater
const person2 = {...person,...person1};

// console.log(person2)



//destructuring is powerful by using with 

function user({ name, age }) {
    console.log(name +" "+age);
}

user(person)