class Stack {
    
        
    #elements = []
    
    constructor(limit){
        this.limit=limit
    }

    push(item) {
        if(this.#elements.length === this.limit){
            return;
        }
        else{
            this.#elements[this.#elements.length] = item
        }
    }
    
    
    pop() {
        if(this.#elements.length === 0)
            return;
        return this.#elements.length = this.#elements.length - 1;         
    }

    peek(){
        return this.#elements[this.#elements.length-1]
    }

    isEmpty(){
        return this.#elements.length === 0;
    }

    get getElement(){
        return this.#elements;
    }
}

let stack = new Stack(5);
stack.push("1")
stack.push("2")
stack.push("3")
stack.push("4")
stack.push("5")
stack.push("6")
stack.push("7")
stack.push("8")
stack.push("9")
stack.push("10")
stack.push("11")
stack.push("12")
console.log(stack.getElement);

