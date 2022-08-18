class Stack {
    constructor() {
        this.elements = []
    }
    
    
    push(item) {
        this.elements[this.elements.length] = item
    }
    
    
    pop() {
        if(this.elements.length === 0)
            return;
        return this.elements.length = this.elements.length - 1;         
    }

    peek(){
        return this.elements[this.elements.length-1]
    }

    isEmpty(){
        return this.elements.length === 0;
    }
}

let stack = new Stack();
stack.push("1")
stack.push("2")
stack.push("3")
console.log(stack.elements);
stack.pop()
console.log(stack.elements)
console.log(stack.peek()); 
console.log(stack.elements)
console.log(stack.isEmpty());
