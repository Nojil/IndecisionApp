class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name,
        this.age = age
    }
    getGreeting() {
        return `Welcome ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class janeDoe extends Student {
    constructor(name, age, major, GPA) {
        super(name, age, major);
        this.GPA = GPA;
    }
    hasGPA() {
        return !!this.GPA;
    }
    getDescription() {
        return `${this.name} has a GPA of ${this.GPA}`;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()) {
            greeting += ` I see your visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const me = new Traveler('Charles Lang', 27, 'Colorado');
const other = new Student();
const jane = new janeDoe("natalie", 28, "cosmetics", 4.0);

console.log(me.getGreeting());
console.log(other);
console.log(jane.getDescription());

