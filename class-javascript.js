class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getArea(){
        return this.width*this.height;
    }
}

let rect1 = new Rectangle(10,20,"red")
// console.log(rect1);                         //{ width: 10, height: 20, color: 'red' }
// console.log(rect1.getArea())                   //200





//setter, getter in js
class Square{
    constructor(width){
        this.width = width;
        this.height = width;
    }

    get area (){
        return this.width*this.height;
    }

    set area (area){
        this.width = Math.sqrt(area);
        this.height = this.width;
    }

    static equals(a1,a2){
        return a1.width*a1.height === a2.width*a2.height
    }
}

const sqr1 = new Square(4);
// console.log(sqr1.area);                 //16 getter

sqr1.area = 25;                            //will change the value of 4 to 5 (sqrt(25)) setter
// console.log(sqr1.area);                    //25









//===================================================================================================
//static method in js
class Square1{
    constructor(width){
        this.width = width;
        this.height = width;
    }


    static equals(a1,a2){
        return a1.width*a1.height === a2.width*a2.height;
    }
}

const sqr11 = new Square1(4);
const sqr22 = new Square1(5);

console.log(Square1.equals(sqr11,sqr22))   //we can call static method with dot notation we dont need obj creation 