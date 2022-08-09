//polyfill of map, filter and substring
//map
function mapping(arr,fn) {
    let arrM=[];
    for(let i=0;i<arr.length;i++){
        arrM[i]= fn(arr[i])
    }
    return arrM;
}



//filter
function filtering(arr,fn) {
    let arrF=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i]) === true){
        arrF.push((arr[i]));
    }
    }
    return arrF;
}


const arr1=[1,2,3,4];
const arr2=[
    { name: "bike",     price: 1000},
    { name: "pc",       price: 500},
    { name: "book",     price: 60},
    { name: "album",    price: 400},
    { name: "phone",    price: 600},
    { name: "keyboard", price: 40},
    { name: "tv",       price: 80}
]


mapping(arr2,x =>{ return x.name; });
filtering(arr2,x =>{ return (x.price<500) });








//substring method
function substring(str,start,end) {
    let maximum;
    let minimum;
    if(end>start){
        maximum=end;
        minimum=start;
    }else{
       maximum=start;
       minimum=end;
    }
    result='';
    for(let i=minimum;i<maximum;i++){
        result+=str[i];
    }
    return result;
}

// substring("hello",0,2);
