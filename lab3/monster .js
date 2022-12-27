class Monster {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  getName() {
    return this.name;
  }
  getHP() {
    return this.hp;
  }
  attack() {}
}

class Alien extends Monster {
  constructor(name, hp) {
    super(name, hp);
  }

  attack() {
    this.hp -= 10;
    if (this.hp <= 0) {
      console.log("You're died");
    }
    return this.hp;
  }
}

class Beast extends Monster {
  constructor(name, hp) {
    super(name, hp);
  }
  attack() {
    this.hp -= 20;
    if (this.hp <= 0) {
      console.log("You're died");
    }
    return this.hp;
  }
}

class Zombie extends Monster {
  constructor(name, hp) {
    super(name, hp);
  }
  attack() {
    this.hp -= 30;
    if (this.hp <= 0) {
      console.log("You're died");
    }
    return this.hp;
  }
}

class Decorator {
  constructor(monster, name, hp) {
    this.monster = monster;
    this.name = name;
    this.hp = hp;
  }

  attack() {
    let y=this.monster.attack()+this.hp;
    let z=this.monster.getName()+" "+this.name;
    return `this monster is ${z}, it's HP is ${y}`;
  }
}

class laser extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

class poison extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

class fly extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

class speed extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

class strength extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

class fire extends Decorator {
  constructor(Monster, name, hp) {
    super(Monster, name, hp);
  }
}

let alien = new Alien("Alien", 100);
let zombie = new Zombie("zombie",100);
let beast = new Beast("beast",100);

alien.attack();
zombie.attack();
beast.attack();

let flyAlien = new fly(alien, "fly", 50);
let speedZombie = new speed(zombie, "speed", 50);
let strengthBeast = new strength(beast, "strength", 50);

console.log(flyAlien.attack());
console.log(speedZombie.attack());
console.log(strengthBeast.attack());


