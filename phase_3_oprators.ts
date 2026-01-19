// TypeScript Operators - Complete Guide
// Author: Muhammad Niaz Ali
// This file explains all TypeScript operators with detailed explanations and examples

// -----------------------------------------------------------------------------------
// 1. Arithmetic Operators
// -----------------------------------------------------------------------------------

// Addition
let a: number = 10;
let b: number = 5;
let sum: number = a + b; // 15
console.log("Addition:", sum);

// Subtraction
let difference: number = a - b; // 5
console.log("Subtraction:", difference);

// Multiplication
let product: number = a * b; // 50
console.log("Multiplication:", product);

// Division
let quotient: number = a / b; // 2
console.log("Division:", quotient);

// Modulus (Remainder)
let remainder: number = a % b; // 0
console.log("Modulus:", remainder);

// Exponentiation
let power: number = a ** b; // 10^5 = 100000
console.log("Exponentiation:", power);

// Increment & Decrement
let c: number = 5;
c++; // Increment by 1
console.log("Increment:", c); // 6
c--; // Decrement by 1
console.log("Decrement:", c); // 5

// -----------------------------------------------------------------------------------
// 2. Assignment Operators
// -----------------------------------------------------------------------------------

let x: number = 10;
x += 5; // x = x + 5
console.log("Add and Assign:", x);

x -= 3; // x = x - 3
console.log("Subtract and Assign:", x);

x *= 2; // x = x * 2
console.log("Multiply and Assign:", x);

x /= 4; // x = x / 4
console.log("Divide and Assign:", x);

x %= 3; // x = x % 3
console.log("Modulus and Assign:", x);

// -----------------------------------------------------------------------------------
// 3. Comparison Operators
// -----------------------------------------------------------------------------------

let num1: number = 10;
let num2: number = 20;

console.log("Equal (==):", num1 == num2); // false
console.log("Not Equal (!=):", num1 != num2); // true
console.log("Strict Equal (===):", num1 === num2); // false
console.log("Strict Not Equal (!==):", num1 !== num2); // true
console.log("Greater Than (>):", num1 > num2); // false
console.log("Less Than (<):", num1 < num2); // true
console.log("Greater or Equal (>=):", num1 >= num2); // false
console.log("Less or Equal (<=):", num1 <= num2); // true

// -----------------------------------------------------------------------------------
// 4. Logical Operators
// -----------------------------------------------------------------------------------

let isLoggedIn: boolean = true;
let hasPremium: boolean = false;

console.log("AND (&&):", isLoggedIn && hasPremium); // false
console.log("OR (||):", isLoggedIn || hasPremium); // true
console.log("NOT (!):", !isLoggedIn); // false

// -----------------------------------------------------------------------------------
// 5. Ternary Operator
// -----------------------------------------------------------------------------------

// Syntax: condition ? trueValue : falseValue
let accessMessage: string = isLoggedIn ? "Welcome back!" : "Please log in";
console.log("Ternary Operator:", accessMessage);

// -----------------------------------------------------------------------------------
// 6. Type Operators
// -----------------------------------------------------------------------------------

// typeof operator - returns type of variable
console.log("Type of num1:", typeof num1); // number
console.log("Type of accessMessage:", typeof accessMessage); // string

// instanceof operator - checks object type
class Person {}
let person = new Person();
console.log("Is person an instance of Person?", person instanceof Person); // true

// -----------------------------------------------------------------------------------
// 7. Bitwise Operators
// -----------------------------------------------------------------------------------

// Bitwise AND
let bitwiseA: number = 5;  // 0101
let bitwiseB: number = 3;  // 0011
console.log("Bitwise AND (&):", bitwiseA & bitwiseB); // 1 (0001)

// Bitwise OR
console.log("Bitwise OR (|):", bitwiseA | bitwiseB); // 7 (0111)

// Bitwise XOR
console.log("Bitwise XOR (^):", bitwiseA ^ bitwiseB); // 6 (0110)

// Bitwise NOT
console.log("Bitwise NOT (~):", ~bitwiseA); // -6

// Left shift
console.log("Left Shift (<<):", bitwiseA << 1); // 10

// Right shift
console.log("Right Shift (>>):", bitwiseA >> 1); // 2

// Unsigned right shift
console.log("Unsigned Right Shift (>>>):", bitwiseA >>> 1); // 2

// -----------------------------------------------------------------------------------
// 8. Nullish Coalescing Operator (??)
// -----------------------------------------------------------------------------------

// Returns right-hand value if left-hand is null or undefined
let input: string | null = null;
let defaultValue: string = input ?? "Default Value";
console.log("Nullish Coalescing:", defaultValue); // Default Value

// -----------------------------------------------------------------------------------
// 9. Optional Chaining Operator (?.)
// -----------------------------------------------------------------------------------

// Safe access to nested properties
type User = { name: string; address?: { city: string } };
let user: User = { name: "Alice" };

console.log("Optional Chaining:", user.address?.city); // undefined (does not throw error)

// -----------------------------------------------------------------------------------
// 10. Summary
// -----------------------------------------------------------------------------------

// Arithmetic: + - * / % ** ++ --
// Assignment: = += -= *= /= %=
// Comparison: == === != !== > < >= <=
// Logical: && || !
// Ternary: condition ? trueValue : falseValue
// Type operators: typeof, instanceof
// Bitwise: &, |, ^, ~, <<, >>, >>>
// Nullish Coalescing: ??
// Optional Chaining: ?.

console.log("All TypeScript operator examples ran successfully!");
