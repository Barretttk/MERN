class Person {
    // Matchin these parameter names w/ this.keyName is just a common pattern
    constructor(FirstName, LastName){
    this.firstName = firstName
    this.lastName = lastName

}

    fullName(){
        return this.FirstName + " " + this.LastName
    }
}

class Student extends Person {
    constructor(firstName, lastName, hobbies = []){
        // super calls the constructorfor the parent class to pass shared properties
        //to our student so they can be saved (also how student receices the fullName method)
        super(firstName, lastName)
        this.hobbies = hobbies
    }
}

class Teacher extends Person{
    constructor(firstName,lastName,lecturesTaught){
        super(firstName, lastName)
        this.lecturesTaught = lecturesTaught
    }
}
class Lecture {
    constructor(topic, zoomLink, capacity, teacher, roster=[]) {
        this.topic = topic
        this.zoomLink = zoomLink
        this.capacity = capacity
        this.teacher = teacher
        this.roster = roster
    }
}

const 


const spensirHobbies =["soccer","pottery", "golf"]
const spensir= new Student("spensir", :'f')

const alexMiller = new teacher("Alex", "Miller", 9001)
console.log(alexMiller.fullName() + `has taught ${alexMiller.lecturesTaught} lectures`

// const spensir = new Person("Spinser", "Field")
// console.log(spensir.fullName());