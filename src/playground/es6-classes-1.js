class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name,
        this.age = age
    }
    getGreeting(){
        return `Hi I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name,age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription(){
        console.log('From student class')
    }
}

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age),
        this.location = location
    }
    hasLocation(){
        return !!this.location
    }
    getGreeting(){
        let greeting = super.getGreeting()
        if(this.hasLocation()){
            return greeting += ` And I live in ${this.location}`
        } else {
            return greeting
        }
    }
}

const me = new Traveler('Adoniram', 47)

console.log(me.getGreeting())