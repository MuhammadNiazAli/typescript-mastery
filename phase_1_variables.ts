// TypeScript Variables - Complete Guide
// Author: Muhammad Niaz Ali
// This file explains all types of variables in TypeScript with line-by-line explanations

// -----------------------------------------------------------------------------------
// 1. Variable Declaration in TypeScript
// -----------------------------------------------------------------------------------

// In TypeScript, we can declare variables using `let`, `const`, or `var`.
// TypeScript adds **type safety** on top of JavaScript.

let username: string = "Sir"; 
// `let` allows us to reassign the variable later
// `username` is of type string
// If you try to assign a number to `username`, TS will throw an error

const age: number = 25; 
// `const` creates a constant variable which **cannot be reassigned**
// TypeScript infers the type number from the assigned value

var isDeveloper: boolean = true; 
// `var` is old-style JS variable (function scoped)
// Prefer `let` and `const` in modern TS/JS

// -----------------------------------------------------------------------------------
// 2. Type Inference
// -----------------------------------------------------------------------------------

// TypeScript can automatically infer types if we assign a value
let country = "Pakistan"; // inferred type: string
// country = 123; //  Error: Type 'number' is not assignable to type 'string'

// -----------------------------------------------------------------------------------
// 3. Basic Data Types
// -----------------------------------------------------------------------------------

// String
let firstName: string = "John";

// Number
let score: number = 100;

// Boolean
let isLoggedIn: boolean = false;

// Null
let emptyValue: null = null;

// Undefined
let notAssigned: undefined = undefined;

// Any - Avoid using 'any' unless necessary
let randomValue: any = "Hello";
randomValue = 10; //  Works, but disables type safety

// -----------------------------------------------------------------------------------
// 4. Arrays
// -----------------------------------------------------------------------------------

// Array of numbers
let marks: number[] = [90, 80, 70];

// Array of strings
let fruits: string[] = ["Apple", "Banana", "Mango"];

// Generic Array type
let scores: Array<number> = [100, 200, 300];

// -----------------------------------------------------------------------------------
// 5. Tuples
// -----------------------------------------------------------------------------------

// Tuples allow fixed-size arrays with specific types
let person: [string, number] = ["Alice", 30];
// person = [30, "Alice"]; //  Wrong order
// person.push("Extra"); //  Allowed (TS allows push, but type checking fails if used incorrectly)

// -----------------------------------------------------------------------------------
// 6. Enums
// -----------------------------------------------------------------------------------

// Enum is a way to define named constants
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

let move: Direction = Direction.Left;

// You can also assign custom values
enum Status {
    Active = 1,
    Inactive = 0,
    Pending = 2
}

let currentStatus: Status = Status.Active;

// -----------------------------------------------------------------------------------
// 7. Any vs Unknown vs Never
// -----------------------------------------------------------------------------------

// Any: disables type checking
let variableAny: any = "Hello";
variableAny = 42; //  Works

// Unknown: safer than any
let variableUnknown: unknown = "Hello";
// variableUnknown.toUpperCase(); //  Error: Need type check first
if (typeof variableUnknown === "string") {
    console.log(variableUnknown.toUpperCase()); //  Safe
}

// Never: represents values that never occur (like throwing errors)
function error(message: string): never {
    throw new Error(message);
}

// -----------------------------------------------------------------------------------
// 8. Const Assertions
// -----------------------------------------------------------------------------------

// TypeScript can infer literal types with `as const`
let direction = "Up" as const;
// direction = "Down"; //  Error: Type '"Up"' is literal, cannot reassign

// -----------------------------------------------------------------------------------
// 9. Variable Scope
// -----------------------------------------------------------------------------------

// Block scope using let/const
{
    let blockVar = "I exist only inside this block";
    const blockConst = "Also block scoped";
}
// console.log(blockVar); //  Error: blockVar not accessible outside

// Function scope using var
function testVarScope() {
    var functionVar = "Accessible inside function";
    console.log(functionVar);
}
testVarScope();
// console.log(functionVar); //  Error: functionVar not accessible outside function

// -----------------------------------------------------------------------------------
// 10. Type Aliases
// -----------------------------------------------------------------------------------

// You can create a custom type alias for reuse
type ID = string | number;
let userId: ID = 123;
userId = "ABC123"; //  Works

// -----------------------------------------------------------------------------------
// 11. Summary
// -----------------------------------------------------------------------------------

// - Use `let` for mutable variables
// - Use `const` for constants
// - Use type annotations for type safety
// - Arrays, tuples, enums help structure data
// - Avoid `any`, prefer `unknown` or proper types
// - Understand variable scopes (block vs function)

console.log("All TypeScript variable examples ran successfully!");

