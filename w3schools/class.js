class Car {
    constructor(name) {
        this.brand = name;
    }
}

const mycar = new Car('BMW')




//Custom constructor
class Car2 {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return("I have a") + this.brand;
    }
}

const mycar2 = new Car2('BMW')




//Class Inheritance
class car3 {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return('I have a ') + this.brand;
    }
}
class Model extends Car3 {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        this.present() + 'it is a' + this.model;
    }
    
}

const mycar3 = new Car3('BMW', M4)