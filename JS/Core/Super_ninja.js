


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
        console.log(this.health);
    }
}



class Sensei extends Ninja {
    constructor(name, health, speed,strength ){
        super(name, health, speed, strength);
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const supersensei = new Sensei("Goku", 200, 10, 10, 10);

supersensei.drinkSake()
supersensei.speakWisdom()
supersensei.showStats()
supersensei.sayName()
