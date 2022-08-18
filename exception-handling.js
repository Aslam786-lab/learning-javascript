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