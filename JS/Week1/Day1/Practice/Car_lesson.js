class Vehicle{
    constructor(manufacturer,model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;

}
    drive() {
        this.miles += 10;
        return this;
}

    beep() {
        console.log("beep bloody beep");
        return this;
    }

    showState() {
        console.log(`Manufacturer: ${this.manufacturer} \nmodel: ${this.model} \nmiles: ${this.miles} \nColor: ${this.color}`)
    }
}

class M5 extends Vehicle { //child class
    constructor (color) {
        super( "BMW", "M5", color);
        this.hp = 616;
    }

    showState() {
        console.log(
            `My ${this.color} BMW M5 with 4.4L V8 TWin turbo engine packing ${this.hp}HP and 553 1b ft TQ`
        );
}
}

const myM5 = new M5("Blue");
myM5.showState();

const myCar = new Vehicle("Honda", "Accord", "Red");

// myCar.drive().beep().beep().beep().beep().beep().drive()
// console.log(myCar)

