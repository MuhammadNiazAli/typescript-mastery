// TypeScript Loops - Complete Guide
// Author: Muhammad Niaz Ali
// This file explains all loops in TypeScript with detailed examples

// -----------------------------------------------------------------------------------
// 1. For Loop
// -----------------------------------------------------------------------------------

// Syntax: for(initialization; condition; increment/decrement) { ... }
console.log("For Loop Example:");
for (let i: number = 0; i < 5; i++) {
    console.log("i =", i);
}

// Notes:
// - Initialization happens once at the start
// - Condition is checked before each iteration
// - Increment/Decrement executes after each iteration
// - Loop body runs while condition is true

// -----------------------------------------------------------------------------------
// 2. While Loop
// -----------------------------------------------------------------------------------

// Syntax: while(condition) { ... }
console.log("\nWhile Loop Example:");
let j: number = 0;
while (j < 5) {
    console.log("j =", j);
    j++; // important to update variable, else infinite loop
}

// -----------------------------------------------------------------------------------
// 3. Do...While Loop
// -----------------------------------------------------------------------------------

// Syntax: do { ... } while(condition);
// Executes loop body **at least once**, then checks condition
console.log("\nDo...While Loop Example:");
let k: number = 0;
do {
    console.log("k =", k);
    k++;
} while (k < 5);

// -----------------------------------------------------------------------------------
// 4. For...In Loop
// -----------------------------------------------------------------------------------

// Iterates over **keys (indexes for arrays, property names for objects)**
console.log("\nFor...In Loop with Array:");
let fruits: string[] = ["Apple", "Banana", "Mango"];
for (let index in fruits) {
    console.log(`Index: ${index}, Fruit: ${fruits[index]}`);
}

// For objects
console.log("\nFor...In Loop with Object:");
let person = { name: "Alice", age: 25, isActive: true };
for (let key in person) {
    console.log(`Key: ${key}, Value: ${person[key as keyof typeof person]}`);
}

// -----------------------------------------------------------------------------------
// 5. For...Of Loop
// -----------------------------------------------------------------------------------

// Iterates over **values** of iterable objects (arrays, strings, sets, etc.)
console.log("\nFor...Of Loop Example:");
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// For string
let message: string = "Hello";
for (let char of message) {
    console.log("Char:", char);
}

// Notes:
// - For...of cannot be used directly on objects (they are not iterable)
// - Use for...in for object properties, for...of for array/string values

// -----------------------------------------------------------------------------------
// 6. Nested Loops Example
// -----------------------------------------------------------------------------------

console.log("\nNested Loops Example:");
for (let i: number = 1; i <= 3; i++) {
    for (let j: number = 1; j <= 2; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

// -----------------------------------------------------------------------------------
// 7. Break and Continue
// -----------------------------------------------------------------------------------

console.log("\nBreak Example:");
for (let i = 0; i < 5; i++) {
    if (i === 3) break; // exit loop completely
    console.log(i);
}

console.log("\nContinue Example:");
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skip current iteration
    console.log(i);
}

// -----------------------------------------------------------------------------------
// 8. Summary
// -----------------------------------------------------------------------------------

// Loops in TypeScript:
// - for: traditional loop with init, condition, increment/decrement
// - while: executes while condition is true
// - do...while: executes at least once, then checks condition
// - for...in: iterates over keys (indexes for array, properties for objects)
// - for...of: iterates over values (arrays, strings, iterables)
// - nested loops, break, continue for control

console.log("All TypeScript loop examples ran successfully!");
