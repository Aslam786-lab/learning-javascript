let multiply=function(a,b) {
    console.log(a*b)
}

//=========================


//x=2,y=3
//this is refering to multiply function and 2 refering to the argument of multiply function
let multiplyByTwo=multiply.bind(this,2)
multiplyByTwo(3)  //5

let multiplyBySix = multiply.bind(this,6)
multiplyBySix(4)


//==========================
// let st=multiply.bind(this)

// st(2,3)  //5


//===========================
// let st=multiply.bind(this,2,3)

// st()  //5
