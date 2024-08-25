// Factory function to create animal objects
function animal(noOfLegs, vegetarian) {
    return {
        noOfLegs: noOfLegs,
        vegetarian: vegetarian,
        eat: function() {
            return "eating...";
        },
        greet: function() {
            return `Hi, I have ${this.noOfLegs} legs.`;
        }
    };
}

// Create an animal object using the factory function
let a1 = animal(4, true);
console.log(a1.eat()); // eating...
console.log(a1.greet()); // Hi, I have 4 legs.


// Constructor function to create animal objects
function AnimalCF(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
    
    this.eat = function() {
        return "eating...";
    };
    
    this.greet = function() {
        return `Hi, I have ${this.noOfLegs} legs.`;
    };
}

// Create an animal object using the constructor function
let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); // eating...
console.log(animalCF.greet()); // Hi, I have 4 legs.


// ES6 class to create animal objects
class AnimalES6 {
    constructor(noOfLegs, vegetarian) {
        this.noOfLegs = noOfLegs;
        this.vegetarian = vegetarian;
    }
    
    eat() {
        return "eating...";
    }
    
    greet() {
        return `Hi, I have ${this.noOfLegs} legs.`;
    }
}

// Create an animal object using the ES6 class
let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.
