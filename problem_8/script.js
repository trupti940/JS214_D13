// Define the Iphone4 class
class Iphone4 {
    // Constructor to initialize the properties
    constructor(ASIN, color, display, camera, bluetooth) {
        this.ASIN = ASIN;
        this.color = color;
        this.display = display;
        this.camera = camera;
        this.bluetooth = bluetooth;
    }

    // Method to simulate dialing
    dial() {
        return "tring.. tring...";
    }

    // Method to simulate sending a message
    sendMessage() {
        return "Sending message...";
    }

    // Method to simulate clicking the camera
    cameraClick() {
        return "Camera clicked";
    }

    // Method to simulate connecting Bluetooth
    connectBluetooth() {
        return "Bluetooth connected successfully...";
    }
}

// Create a new Iphone4 object
let i4 = new Iphone4(1, "B09X67JBQV", 7.8, "2.0 MP", "Bluetooth 5.1");

// Test the properties
console.log(i4.ASIN); // 1
console.log(i4.color); // "B09X67JBQV"
console.log(i4.display); // 7.8
console.log(i4.camera); // "2.0 MP"
console.log(i4.bluetooth); // "Bluetooth 5.1"

// Test the methods
console.log(i4.dial()); // "tring.. tring..."
console.log(i4.sendMessage()); // "Sending message..."
console.log(i4.cameraClick()); // "Camera clicked"
console.log(i4.connectBluetooth()); // "Bluetooth connected successfully..."
