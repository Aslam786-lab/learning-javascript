function splitArray(arr,range){
    let lexicalCount=0;
   return function arrSplit(){

       let count =lexicalCount;
       for(let i=count;i<count+range;i++){
          if(!arr[i]){
            process.stdout.write(`${arr[i % arr.length]} `);
         }else{
            process.stdout.write(`${arr[i]} `);
          }
         
       }
       console.log("\n");
       lexicalCount=lexicalCount+range;
      
    }
    
}
 
 
 const array = [1,2,3,4,5,6,7,8,8,9];
 const range = 3
 
 let result = splitArray(array,range);
 result()    //[ 1, 2, 3 ]
 result()    //[ 4, 5, 6 ]
 result()    //[ 7, 8, 8 ]
 result()    //[ 9, 1, 2 ]
 result()    //[ 3, 4, 5 ]
 
 result()    //[ 6, 7, 8 ]
 result()    //[ 8, 9, 1 ]
 