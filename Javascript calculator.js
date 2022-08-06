

function calculator(num1,num2,op) {

    switch(op){
        case '+':
            alert(num1+num2);
            break;

        case '-':
            alert(num1+num2);
            break;

        case '*':
            alert(num1+num2);
            break;

        case '/':
            alert(num1+num2);
            break;

        default:
            alert('Invalid operator');
            
    }
    
}

const op=prompt('Enter the operator ( either +, -, * or / ):');
let reg=/^[0-9]+$/;
let a=parseFloat(prompt('Enter the number1:'));
let b=parseFloat(prompt('Enter the number2:'));

let count=0;
while(!reg.test(a) || !reg.test(b)){
    
    alert("It is not a number please Enter number");
    a=parseFloat(prompt("please Enter a number1"));
    b=parseFloat(prompt('please Enter a number2:'));
    
    count++;
}
calculator(a,b,op);

