class Car {
    constructor(name, accelerationPower, brakingPower, maxFuelCapacity) {
        this.name = name;
        this.accelerationPower = accelerationPower;
        this.brakingPower = brakingPower;
        this.speed = 0; // Initial speed is 0 meters per second
        this.fuelLevel = maxFuelCapacity; // Start with full fuel
        this.maxFuelCapacity = maxFuelCapacity;
    }

    // Method to accelerate the car
    accelerate() {
        if (this.fuelLevel > 0) {
            this.speed += this.accelerationPower;
            this.fuelLevel -= this.accelerationPower * 0.1; // Fuel consumption
            console.log(`Accelerating... Current speed: ${this.speed.toFixed(2)} m/s`);
        } else {
            console.log("Out of fuel! Cannot accelerate.");
        }
    }

    // Method to brake the car
    brake() {
        this.speed -= this.brakingPower;
        if (this.speed < 0) {
            this.speed = 0; // Speed cannot be negative
        }
        console.log(`Brakes applied... Current speed: ${this.speed.toFixed(2)} m/s`);
    }

    // Method to check the current speed of the car
    checkSpeed() {
        console.log(`Current speed: ${this.speed.toFixed(2)} m/s`);
        return this.speed;
    }

    // Method to refuel the car
    refuel() {
        this.fuelLevel = this.maxFuelCapacity;
        console.log(`Refueled to maximum capacity (${this.maxFuelCapacity} units)`);
    }

    // Method to simulate a driving session
    drive(durationInSeconds, accelerationIntervals, brakingIntervals) {
        let timeElapsed = 0;
        
        while (timeElapsed < durationInSeconds) {
            if (accelerationIntervals.includes(timeElapsed)) {
                this.accelerate();
            }

            if (brakingIntervals.includes(timeElapsed)) {
                this.brake();
            }

            this.checkSpeed();
            console.log(`Fuel level: ${this.fuelLevel.toFixed(2)} units`);
            timeElapsed += 1;

            if (this.fuelLevel <= 0) {
                console.log("Car has run out of fuel and cannot continue driving.");
                break;
            }
        }
        console.log("Driving session complete.");
    }
}

// Example usage

// Create a new car instance
const myCar = new Car('Tesla Model S', 5, 7, 100);

// Accelerate the car
myCar.accelerate(); // Accelerating... Current speed: 5.00 m/s

// Apply brakes
myCar.brake(); // Brakes applied... Current speed: 0.00 m/s

// Check current speed
myCar.checkSpeed(); // Current speed: 0.00 m/s

// Refuel the car
myCar.refuel(); // Refueled to maximum capacity (100 units)

// Simulate a driving session (10 seconds) with acceleration at 2nd and 5th second, braking at 7th second
myCar.drive(10, [2, 5], [7]);


