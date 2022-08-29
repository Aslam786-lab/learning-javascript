const module1 = (function(){
    //private
    let accNumber='1234'

    function setAccNumber(num){
        accNumber=num
    }

    //public
    return{
        getAcc:function(){
            return accNumber
        },
        setAcc:function(num){
            setAccNumber(num)
        }
    }
    

}())

console.log(module1.getAcc())
module1.setAcc('4567')
console.log(module1.getAcc())


