try{
    console.log("before the error")
    invlid;
    console.log("after the error");
}catch(error){
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
    
}finally{
    console.log("finally will execute regrdless of error")
}

console.log("Error is handled");


//==========================================================
//throw
let json = '{"age": 50}';

try {
    let user =JSON.parse(json)

    if(!user.name){
        throw new SyntaxError("No name in user")
    }
    console.log(user.name);

} catch (error) {
    console.log(error.name);    //SyntaxError
    console.log(error.message); //No name in user
}