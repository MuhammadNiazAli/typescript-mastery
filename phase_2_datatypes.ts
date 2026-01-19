// TypeScript Data Types - Complete Guide
// Author: Muhammad Niaz Ali
// This file explains all TypeScript data types with detailed explanations and examples

// -----------------------------------------------------------------------------------
// 1. String
// -----------------------------------------------------------------------------------

// String represents textual data
let firstName: string = "John";
let lastName: string = 'Doe';
let greeting: string = `Hello, ${firstName} ${lastName}`; // Template literals

console.log(greeting); // Output: Hello, John Doe

// -----------------------------------------------------------------------------------
// 2. Number
// -----------------------------------------------------------------------------------

// Number type represents both integers and floating point numbers
let age: number = 30;
let price: number = 99.99;

console.log(`Age: ${age}, Price: ${price}`);

// -----------------------------------------------------------------------------------
// 3. Boolean
// -----------------------------------------------------------------------------------

// Boolean represents true or false
let isLoggedIn: boolean = true;
let hasPremiumAccount: boolean = false;

if (isLoggedIn) {
    console.log("User is logged in");
}

// -----------------------------------------------------------------------------------
// 4. Array
// -----------------------------------------------------------------------------------

// Array of strings
let fruits: string[] = ["Apple", "Banana", "Mango"];

// Array of numbers
let scores: number[] = [100, 90, 80];

// Generic Array syntax
let colors: Array<string> = ["Red", "Green", "Blue"];

console.log(fruits, scores, colors);

// -----------------------------------------------------------------------------------
// 5. Tuple
// -----------------------------------------------------------------------------------

// Tuples store fixed-size collections of multiple types
let person: [string, number, boolean] = ["Alice", 25, true];

// Accessing tuple values
console.log(person[0]); // "Alice"
console.log(person[1]); // 25

// -----------------------------------------------------------------------------------
// 6. Enum
// -----------------------------------------------------------------------------------

// Enum defines a set of named constants
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

let move: Direction = Direction.Left;
console.log(move); // Output: 2

// Enum with custom values
enum Status {
    Active = 1,
    Inactive = 0,
    Pending = 2
}
let currentStatus: Status = Status.Active;

// -----------------------------------------------------------------------------------
// 7. Any
// -----------------------------------------------------------------------------------

// Any disables type checking (use sparingly)
let randomValue: any = "Hello";
randomValue = 42; //  Works
randomValue = true; //  Works

// -----------------------------------------------------------------------------------
// 8. Unknown
// -----------------------------------------------------------------------------------

// Unknown is safer than 'any'
// TypeScript forces you to do type-check before using it
let unknownValue: unknown = "Hello";
// unknownValue.toUpperCase(); //  Error
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); //  Safe
}

// -----------------------------------------------------------------------------------
// 9. Void
// -----------------------------------------------------------------------------------

// Void represents absence of any type (usually in functions that return nothing)
function sayHello(): void {
    console.log("Hello!");
}
sayHello();

// -----------------------------------------------------------------------------------
// 10. Null and Undefined
// -----------------------------------------------------------------------------------

let emptyValue: null = null;
let notAssigned: undefined = undefined;

// By default, strict mode prevents assigning null/undefined to other types
// let name: string = null; //  Error in strict mode

// -----------------------------------------------------------------------------------
// 11. Never
// -----------------------------------------------------------------------------------

// Never represents values that never occur
function throwError(message: string): never {
    throw new Error(message);
}

// -----------------------------------------------------------------------------------
// 12. Object
// -----------------------------------------------------------------------------------

// Object represents non-primitive types
let user: object = { name: "John", age: 30 };

// Object with specific structure
let employee: { name: string; id: number; isActive: boolean } = {
    name: "Alice",
    id: 101,
    isActive: true
};

console.log(employee);

// -----------------------------------------------------------------------------------
// 13. Type Aliases
// -----------------------------------------------------------------------------------

type ID = string | number;
let userId: ID = 123;
userId = "ABC123"; //  Works

// -----------------------------------------------------------------------------------
// 14. Union Types
// -----------------------------------------------------------------------------------

// Union allows variable to hold multiple types
// let score: number | string = 95;
// score = "A+";

// -----------------------------------------------------------------------------------
// 15. Literal Types
// -----------------------------------------------------------------------------------

// Literal types restrict variable to exact values
let direction: "Up" | "Down" | "Left" | "Right";
direction = "Up";
// direction = "Forward"; //  Error

// -----------------------------------------------------------------------------------
// 16. Summary
// -----------------------------------------------------------------------------------

// TypeScript data types:
// - string, number, boolean
// - array, tuple
// - enum
// - any, unknown, never
// - void, null, undefined
// - object
// - type aliases, union, literal types

console.log("All TypeScript data type examples ran successfully!");

