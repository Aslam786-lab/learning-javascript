
//closure is function along with its lexical scope bundle together to form closure

function name() {
    let val=10;
    function name1() {
        console.log(val)
    }
    return name1;
}

let z=name()

console.log(z())


