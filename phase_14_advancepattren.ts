// ==================== Advanced TypeScript Patterns ====================
// Author: Muhammad Niaz Ali
// This file explains advanced patterns in TypeScript for organized, reusable, and memory-efficient code

// -----------------------------------------------------------------------------------
// 1. Module Pattern
// -----------------------------------------------------------------------------------

// Module pattern: encapsulation using IIFE
// Private variables/functions inside, public methods returned
const CounterModule = (() => {
    // Private variable
    let count: number = 0;

    // Private function
    function logCount(): void {
        console.log("Current Count:", count);
    }

    // Public methods
    return {
        increment(): void {
            count++;
            logCount();
        },
        decrement(): void {
            count--;
            logCount();
        },
        reset(): void {
            count = 0;
            logCount();
        }
    };
})();

// Usage
CounterModule.increment(); // Current Count: 1
CounterModule.increment(); // Current Count: 2
CounterModule.decrement(); // Current Count: 1
CounterModule.reset();     // Current Count: 0

// Note: `count` and `logCount` are private, cannot access from outside
// console.log(CounterModule.count); // Error

// -----------------------------------------------------------------------------------
// 2. Revealing Module Pattern
// -----------------------------------------------------------------------------------

// Idea: define all functions/variables privately, expose only selected methods explicitly
const MathModule = (() => {
    function add(a: number, b: number): number {
        return a + b;
    }

    function multiply(a: number, b: number): number {
        return a * b;
    }

    function subtract(a: number, b: number): number {
        return a - b;
    }

    // Only exposing add and multiply
    return {
        add,
        multiply
    };
})();

// Usage
console.log("Add:", MathModule.add(5, 3));       // 8
console.log("Multiply:", MathModule.multiply(4, 6)); // 24
// console.log(MathModule.subtract(5,2)); // Error, not exposed

// -----------------------------------------------------------------------------------
// 3. Singleton Pattern
// -----------------------------------------------------------------------------------

// Singleton: only one instance exists
class Singleton {
    private static instance: Singleton;

    private constructor() {
        console.log("Singleton instance created");
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public sayHello(): void {
        console.log("Hello from Singleton!");
    }
}

// Usage
const single1 = Singleton.getInstance(); // instance created
const single2 = Singleton.getInstance(); // same instance
single1.sayHello();
console.log(single1 === single2); // true

// -----------------------------------------------------------------------------------
// 4. Factory Pattern
// -----------------------------------------------------------------------------------

// Factory: create objects without exposing creation logic
interface Vehicle {
    name: string;
    start(): void;
}

class Car implements Vehicle {
    constructor(public name: string) {}
    start(): void {
        console.log(`${this.name} car started`);
    }
}

class Bike implements Vehicle {
    constructor(public name: string) {}
    start(): void {
        console.log(`${this.name} bike started`);
    }
}

// Factory function
function vehicleFactory(type: "car" | "bike", name: string): Vehicle {
    if (type === "car") return new Car(name);
    else return new Bike(name);
}

// Usage
const myCar = vehicleFactory("car", "Honda");
const myBike = vehicleFactory("bike", "Yamaha");
myCar.start(); // Honda car started
myBike.start(); // Yamaha bike started

// -----------------------------------------------------------------------------------
// 5. Summary of Advanced Patterns
// -----------------------------------------------------------------------------------

// Module Pattern:
// - Encapsulation using IIFE
// - Private variables/functions, expose only public methods

// Revealing Module Pattern:
// - Define private methods
// - Return only the selected public methods

// Singleton Pattern:
// - Only one instance of class
// - Static method to access instance

// Factory Pattern:
// - Object creation without exposing constructor
// - Easy to extend for multiple types

console.log("All TypeScript advanced patterns examples ran successfully!");
