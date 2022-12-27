class Vehicle{
    constructor(mileage , price){
        this.mileage=mileage;
        this.price=price;
    }
    start(){
        return `engine started`
    }
    stop(){
        return `engine stopped`
    }
}

class Car extends Vehicle{
    constructor(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType){
        super(mileage,price);
        this.ownershipCost=ownershipCost;
        this.warranty=warranty;
        this.seatingCapacity=seatingCapacity;
        this.fuelType=fuelType;
    }
    
}

class Bike extends Vehicle{
    constructor(mileage, price, gears, coolingType, wheelType, fuelTankSize){
        super(mileage,price);
        this.gears=gears;
        this.coolingType=coolingType;
        this.wheelType=wheelType;
        this.fuelTankSize=fuelTankSize;
    }
}

class Audi extends Car{
    constructor(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType, modelType)
    {
        super(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType);
            this.modelType=modelType;
        
    }
    display1(){
        return `This car is Audi model ${this.modelType}, it's mileage is ${this.mileage}, it's fuel Type is ${this.fuelType} and it's price is ${this.price}`;
    }
}

class Ford extends Car{
    constructor(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType, modelType)
    {
        super(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType);
            this.modelType=modelType;
        
    }
    display2(){
        return `This car is Ford model ${this.modelType}, it's mileage is ${this.mileage}, it's fuel Type is ${this.fuelType} and it's price is ${this.price}`;
    }
}

class Bajaj extends Bike{
    constructor(mileage, price, gears, coolingType, wheelType, fuelTankSize, maketype){
        super(mileage, price, gears, coolingType, wheelType, fuelTankSize);
        this.maketype=maketype;
    }
    display3(){
        return `This Bike is Bajaj model ${this.makeType}, it's mileage is ${this.mileage}, it's wheel Type is ${this.wheelType} and it's price is ${this.price}`;
    }
}

class TVS extends Bike{
    constructor(mileage, price, gears, coolingType, wheelType, fuelTankSize, maketype){
        super(mileage, price, gears, coolingType, wheelType, fuelTankSize);
        this.maketype=maketype;
    }
    display4(){
        return `This Bike is TVS model ${this.makeType}, it's mileage is ${this.mileage}, it's wheel Type is ${this.wheelType} and it's price is ${this.price}`
    }
}

// let vehicle = new Vehicle(10.000, 20.000);
// let car = new Car(20.000, "VEHICLE", 10, "petrol");

let car1 =new Ford(70,70.000,90.000, "FORD", 5, "diesel", "Ford2022");
let car2 =new Audi(50,50.000,20.000, "AUDI", 7, "petrol", "Audi2022");

let bike1 =new Bajaj(20.000,50.000,10,"air","wheel",40,"phonix");
let bike2 =new TVS(30.000,30.000,"liquid","wheel",50,"phonix");

console.log(car1.display2());
console.log(car2.display1());
console.log(bike1.display3());
console.log(bike2.display4());