//arrays method

const arr=[
    { name: "bike",     price: 1000},
    { name: "pc",       price: 500},
    { name: "book",     price: 60},
    { name: "album",    price: 400},
    { name: "phone",    price: 600},
    { name: "keyboard", price: 40},
    { name: "tv",       price: 80}
]


//filter method
const filterItems = arr.filter((item) => {
    return item.price <= 100;
})

// console.log(filterItems);

//map method
const mapItems = arr.map((item) =>{
    return item.name;
})

// console.log(mapItems);


//find method
const foundItem = arr.find((item) =>{
    return item.name === "book";
})

// console.log(foundItem);



//foreach method it does not return any value
// arr.forEach((item) =>{
//     console.log(item.name);
// })



//some method which returns bolean value if item is present then true

const someItem = arr.some((item) =>{
    return item.price < 100;  
})

// console.log(someItem)


//every method it is similar to some but instead of one item it checks for all item

const everyItem = arr.every((item) =>{
    return item.price < 100;  
})

// console.log(everyItem);


//reduce method which is used to sum all item value

const reduceItem = arr.reduce((sum,item) =>{
    return item.price+sum;
},0)

// console.log(reduceItem);


//includes method tocheck wheather the item present or not

const arr1=[1,2,3,4,5];

console.log(arr1.includes(2));
