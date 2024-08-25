// Define the iPhone3 constructor function
function iPhone3(ASIN, color, display, camera, bluetooth) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
    
    this.dial = function() {
        return "tring.. tring...";
    };
    
    this.sendMessage = function() {
        return "Sending message...";
    };
    
    this.cameraClick = function() {
        return "Camera clicked";
    };
    
    this.connectBluetooth = function() {
        return "Bluetooth connected successfully...";
    };
}

// Create an empty object
let i3 = {};

// Use the .call() method to invoke iPhone3 and initialize i3
iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");

// Test the properties
console.log(i3.ASIN); // "B09X67JBQV"
console.log(i3.color); // "Gray"
console.log(i3.display); // 7.8
console.log(i3.camera); // "2.0 MP"
console.log(i3.bluetooth); // "Bluetooth 5.1"

// Test the methods
console.log(i3.dial()); // "tring.. tring..."
console.log(i3.sendMessage()); // "Sending message..."
console.log(i3.cameraClick()); // "Camera clicked"
console.log(i3.connectBluetooth()); // "Bluetooth connected successfully..."
