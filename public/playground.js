class React{
    constructor(){
        this.prop ={

        };

    }
}

class Ford extends Car{

    constructor(){
        super()
        this.windows = 4; 
    }

}

const car = new Car();
const ford = new Ford();

console.log(ford.wheels)