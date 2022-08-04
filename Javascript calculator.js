

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
const a=parseFloat(prompt('Enter the number1:'));
const b=parseFloat(prompt('Enter the number2:'));

calculator(a,b,op);