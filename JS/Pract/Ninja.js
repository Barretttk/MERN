
class Ninja{
    constructor(name, health, speed,strength) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {    //methods
        console.log(this.name);
    }
    showStats() {    //methods
        console.log(this.health, this.speed, this.strength);
    }

    drinkSake() {    //methods
        this.health += 10;
    }
}
