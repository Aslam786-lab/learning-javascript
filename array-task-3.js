function splitArray(arr,range){
   let lexicalCount=0;
  return function arrSplit(){

      let newArray=[];
      let count =lexicalCount;
      for(let i=count;i<count+range;i++){
         if(!arr[i]){
           newArray.push(arr[i % arr.length])
        }else{
          newArray.push(arr[i])
         }
        
      }
      console.log(newArray)
      lexicalCount=lexicalCount+range;
     
   }
   

}




const array = [1,2,3,4,5,6,7,8,8,9];
const range = 3

let result = splitArray(array,range);
result()
result()
result()
result()
result()

result()
result()
