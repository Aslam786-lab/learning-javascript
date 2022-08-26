export class Sum{
    constructor(num1,num2){
        this.num1 = num1
        this.num2 = num2
    }

    add(){
        console.log(this.num1+this.num2);
    }
}

export function add(obj){
    console.log(obj.num1+obj.num2)
}