class Employee{
    constructor(name,jobTitle){
        this.name=name;
        this.jobTitle=jobTitle;
    }

    getName(){
        return this.name;
    }
    setName(newName){
        this.name=newName;
    }

    getJobTitle(){
        return this.jobTitle;
    }
    setJobTitle(newTitle){
        this.jobTitle=newTitle;
    }
    calculateWeeklySalary(){};
}

class HourlyEmployee extends Employee{
    constructor(name, jobTitle,payRate,hoursWorked){
        super(name,jobTitle);
        this.payRate=payRate;
        this.hoursWorked=hoursWorked;
    }
    calculateWeeklySalary(){
        return this.payRate*this.hoursWorked;
    }
}

class SalaryEmployee extends Employee{
    constructor(name,jobTitle,weeklySalary){
        super(name,jobTitle);
        this.weeklySalary=weeklySalary;
    }
    getWeeklySalary(){
        return this.weeklySalary;
    }
    setWeeklySalary(newWeeklySalary){
        this.weeklySalary=newWeeklySalary;
    }
    calculateWeeklySalary(){
        return this.getWeeklySalary();
    }
}

let obj=new Employee("marwa","CEO");
console.log(obj.getName());
console.log(obj.getJobTitle());

obj.setJobTitle("developer");
console.log(obj.getJobTitle());

let hour=new HourlyEmployee("ahmed", "developer",100, 100);
console.log(hour.calculateWeeklySalary());

let week=new SalaryEmployee("mohamed","developer",500);
console.log(week.getWeeklySalary());
week.setWeeklySalary(1000);
console.log(week.getWeeklySalary());
console.log(week.calculateWeeklySalary());
