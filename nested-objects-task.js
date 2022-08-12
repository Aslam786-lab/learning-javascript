

function createObj(keys, value) {
    let obj = {}
    let schema = obj
    keys = keys.split('.')
  
  for (let i = 0; i < keys.length-1; i++) {
    schema[keys[i]] = {}
    schema = schema[keys[i]]
    
    if(i === keys.length - 2){
      schema[keys[i+1]]=value
    }
    
  }
  
  
 

    return obj
}





let keys = "address.street.flat.number"
let value = "72"

createObj(keys, value)
