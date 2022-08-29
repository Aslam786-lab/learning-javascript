function add50(num){
    return num+50
}

// console.log(add50(20))
// console.log(add50(30))
// console.log(add50(20))


/*--> 
in the above code withot momoization when ever we call the function with same parameter every time it will call the function 
and calculate the value so it is time consuming to over come this issue we use memoization
*/







//memoization

function memoizedAdd50(){
    let cache ={}
    return function(num){

        if(num in cache){
            console.log('cached value');
            return cache[num]
        }else{
            cache[num]=num
            return cache[num]
        }

    }
    

}

const memo = memoizedAdd50()
console.log(memo(20))
console.log(memo(20))

/*
20
cached value
20
*/


/*
In the above code using memoization when we pass the same parameter again then instead of pushing the number again it just 
returned the value from cached the memory
*/