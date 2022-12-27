class Account {
  constructor(name, money) {
    this.name = name;
    this.money = money;
  }
  getname() {
    return this.name;
  }
  getmoneye() {
    return this.money;
  }
  displayAccount() {
    return `your Acount name is:${this.name} you has ${this.money}`;
  }
}

class Savings extends Account {
  constructor(name, money) {
    super(name, money);
  }
}

class Current extends Account {
  constructor(name, money) {
    super(name, money);
  }
}

class ManagementSystem {
  constructor(account, money) {
    this.account = account;
    this.money = money;
  }
  depositMoney() {
    // console.log(this.account.getmoneye());
    this.account.money += this.money;
  }

  WithdrawMoney() {
    this.account.money -= this.money;
  }
  transaction(account1, account2, money) {
    account1.money -= money;
    account2.money += money;
  }
}

let emp1 = new Savings("mohamed", 5000);
let emp2 = new Current("ahmed", 4000);
console.log(emp1.displayAccount());

let deposit = new ManagementSystem(emp1, 1000);
deposit.depositMoney();

console.log(emp1.displayAccount());

let transactions= new ManagementSystem(emp1, emp2, 2000);

transactions.transaction(emp1, emp2, 2000);

console.log(emp1.displayAccount());
console.log(emp2.displayAccount());