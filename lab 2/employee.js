class Employee{
    #name;
    #jobTitle;

    constructor(){
        this.#name="marwa";
        this.#jobTitle="developer";
    }

    getName(){
        return this.#name;
    }
    setName(newName){
        this.#name=newName;
    }

    getJobTitle(){
        return this.#jobTitle;
    }
    setJobTitle(newTitle){
        this.#jobTitle=newTitle;
    }
    calculateWeeklySalary();
}

class HourlyEmployee extends Employee{
    constructor(payRate,hoursWorked){
        this.payRate=payRate;
        this.hoursWorked=hoursWorked;
    }
    calculateWeeklySalary(){
        return this.payRate*this.hoursWorked;
    }
}

class SalaryEmployee extends Employee{
    #weeklySalary;
    constructor(){
        this.#weeklySalary=0;
    }
    getWeeklySalary(){
        return this.#weeklySalary;
    }
    setWeeklySalary(newWeeklySalary){
        this.#weeklySalary=newWeeklySalary;
    }
    calculateWeeklySalary(){
        return this.getWeeklySalary();
    }
}

let obj=new Employee();
console.log(obj.getName());
obj.setName("doha");
console.log(obj.getName());

let hour=new HourlyEmployee(100, 100);
console.log(hour.calculateWeeklySalary());

let week=new SalaryEmployee();
console.log(week.getWeeklySalary());
week.setWeeklySalary(500);
console.log(week.getWeeklySalary());
console.log(week.calculateWeeklySalary());
