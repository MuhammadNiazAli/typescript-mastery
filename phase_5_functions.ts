// TypeScript Functions - Complete Guide
// Author: Muhammad Niaz Ali
// This file explains all types of functions in TypeScript with detailed theory and examples

// -----------------------------------------------------------------------------------
// 1. Normal / Traditional Functions
// -----------------------------------------------------------------------------------

// Function declaration syntax
function add(a: number, b: number): number {
    // Parameters have types: a:number, b:number
    // Return type is number
    return a + b;
}

let sum = add(10, 20);
console.log("Sum:", sum); // 30

// Function without return type
function greet(name: string): void {
    console.log("Hello " + name);
}

greet("Alice"); // Hello Alice

// Function expression (assign function to variable)
const multiply = function(x: number, y: number): number {
    return x * y;
};

console.log("Multiply:", multiply(5, 4)); // 20

// -----------------------------------------------------------------------------------
// 2. Arrow Functions
// -----------------------------------------------------------------------------------

// Arrow function syntax (shorter way)
const divide = (x: number, y: number): number => {
    return x / y;
};

console.log("Divide:", divide(20, 4)); // 5

// If single expression, return is implicit
const square = (n: number): number => n * n;
console.log("Square:", square(6)); // 36

// Arrow functions have lexical 'this' binding

// -----------------------------------------------------------------------------------
// 3. Optional Parameters
// -----------------------------------------------------------------------------------

// Parameters can be optional using ?
function fullName(firstName: string, lastName?: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName;
}

console.log(fullName("John", "Doe")); // John Doe
console.log(fullName("Alice")); // Alice

// -----------------------------------------------------------------------------------
// 4. Default Parameters
// -----------------------------------------------------------------------------------

// Provide default value for parameter
function greetUser(name: string = "Guest"): string {
    return "Hello " + name;
}

console.log(greetUser()); // Hello Guest
console.log(greetUser("Bob")); // Hello Bob

// -----------------------------------------------------------------------------------
// 5. Rest Parameters
// -----------------------------------------------------------------------------------

// Accept variable number of arguments using ...
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of all:", sumAll(1, 2, 3, 4, 5)); // 15

// -----------------------------------------------------------------------------------
// 6. Return Types
// -----------------------------------------------------------------------------------

// Explicit return types help TypeScript catch errors
function getLength(str: string): number {
    return str.length;
}

console.log("Length:", getLength("TypeScript")); // 10

// -----------------------------------------------------------------------------------
// 7. Function Overloading
// -----------------------------------------------------------------------------------

// Define multiple call signatures
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}

console.log(combine(10, 20)); // 30
console.log(combine("Hello, ", "World!")); // Hello, World!

// -----------------------------------------------------------------------------------
// 8. Closures
// -----------------------------------------------------------------------------------

// Function inside a function that remembers outer scope
function outerFunction(outerVar: string) {
    return function innerFunction(innerVar: string) {
        return `Outer: ${outerVar}, Inner: ${innerVar}`;
    };
}

const closureExample = outerFunction("Outside");
console.log(closureExample("Inside")); // Outer: Outside, Inner: Inside

// Closures are useful for data privacy and maintaining state

// -----------------------------------------------------------------------------------
// 9. Higher-Order Functions
// -----------------------------------------------------------------------------------

// Function that takes function as argument or returns function
function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}

const result = applyOperation(10, 5, (x, y) => x - y);
console.log("Higher-Order Function Result:", result); // 5

// Another example: map, filter, reduce
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2); // map takes function as argument
console.log("Doubled Numbers:", doubled);

// -----------------------------------------------------------------------------------
// 10. Summary
// -----------------------------------------------------------------------------------

// TypeScript Functions:
// - Normal / traditional functions: declare with function keyword
// - Function expressions: assign function to variable
// - Arrow functions: short syntax, lexical 'this'
// - Optional parameters: parameter?
// - Default parameters: parameter = defaultValue
// - Rest parameters: ...args
// - Explicit return types: helps type safety
// - Function overloading: multiple call signatures
// - Closures: inner function remembers outer scope
// - Higher-order functions: functions as arguments or return values

console.log("All TypeScript function examples ran successfully!");
