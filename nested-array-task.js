function flatted(arr,depth) {
  let newArray=[];

  const flattened=function(arr,depth) {
   for(let i=0;i<arr.length;i++){
     
     if(Array.isArray(arr[i]) && depth){
       flattened(arr[i],depth-1);
     }else{
       newArray.push(arr[i]);
     }
     
     
   }
  }
  flattened(arr,depth);
  
  return newArray;
  
}



const array = [1,2,[3,4,[5,6,[8,9,10]]]];

flatted(array,Infinity);


