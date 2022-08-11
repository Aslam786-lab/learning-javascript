//higher order function
function area(arr,logic) {
    let areaN=[];
    for(let i=0;i<arr.length;i++){
        areaN.push(logic(arr[i]));
    }
    return areaN;
}

const radius=[2,5,7,1];

//call back function
const cir=function (rad) {
    return Math.PI*rad*rad;
}


area(radius,cir);
