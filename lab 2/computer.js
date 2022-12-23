class Computer{
    constructor(customerId, memorySize, price, power){
        this.customerId=customerId;
        this.memorySize=memorySize;
        this.price=price;
        this.power=power;
    }
    StorageCapacity(storage){
        return `your remaining storage is ${this.memorySize-this.storage}` 
    }
    changePrice(){
        return `the new device price is ${(this.price)*0.02}`;
    }
}

class SmartPhone extends Computer{
    constructor(customerId, memorySize, price, power, startDate){
        super(customerId, memorySize, price, power);
        this.date=new Date();
        this.startDate=startDate;
        
    }
    powerCapacity(){
       let x=this.date.getMonth()+1;
       let y=x-this.startDate;
       if(y>=9){
        return `your power Capacity is less than 90%`
       }else{
        return `your power Capacity is greater than 90%`
       }
    }
}

class Laptop extends Computer{
    constructor(customerId, memorySize, price, power,CPU){
        super(customerId, memorySize, price, power);
        this.CPU=CPU;
    }
    display(){
        return `memory size is ${this.memorySize}, device price is ${this.price}, device power equals ${this.power} and CPU type is ${this.CPU}`;
    };
}

let computer=new Computer(1,"3tb",10.000,"100%"); 
let phone=new SmartPhone(3, "128gb", 3500, "100%", 12);
let laptop= new Laptop(5,"4tb", 17.000, "100%", "core i7");

console.log(computer.StorageCapacity());
console.log(laptop.display());
console.log(phone.powerCapacity());