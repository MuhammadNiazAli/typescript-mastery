// ==================== Error Handling in TypeScript ====================
// Author: Muhammad Niaz Ali
// This file explains how to handle runtime errors in TypeScript

// -----------------------------------------------------------------------------------
// 1. Introduction to Error Handling
// -----------------------------------------------------------------------------------

// Error handling = controlling runtime errors so that app does not break
// Examples of risky code:
// - API responses
// - JSON parsing
// - Accessing undefined functions or properties

console.log("Start of Error Handling examples");

// -----------------------------------------------------------------------------------
// 2. Basic try / catch / finally
// -----------------------------------------------------------------------------------

try {
    console.log("Inside try block");
    // Risky code: divide by zero (not an error in JS, but simulate)
    const result: number = 10 / 0;
    console.log("Result:", result);

    // Simulate error
    throw new Error("Something went wrong!");
} catch (error) {
    // Handle error
    if (error instanceof Error) {
        console.error("Caught Error:", error.message);
    } else {
        console.error("Unknown error:", error);
    }
} finally {
    // This code always runs
    console.log("Finally block executed");
}

// -----------------------------------------------------------------------------------
// 3. JSON Parsing Error Example
// -----------------------------------------------------------------------------------

const invalidJson: string = "{ name: 'Alice' }"; // Invalid JSON (keys must be double quoted)

try {
    const parsed = JSON.parse(invalidJson);
    console.log(parsed);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("JSON Syntax Error:", error.message);
    } else {
        console.error("Other Error:", error);
    }
} finally {
    console.log("JSON parsing attempt finished");
}

// -----------------------------------------------------------------------------------
// 4. Function that throws error
// -----------------------------------------------------------------------------------

function riskyOperation(value: number): number {
    if (value < 0) {
        throw new RangeError("Value cannot be negative");
    }
    return Math.sqrt(value);
}

try {
    console.log(riskyOperation(9)); // 3
    console.log(riskyOperation(-5)); // Throws error
} catch (error) {
    if (error instanceof RangeError) {
        console.error("Range Error:", error.message);
    } else {
        console.error("Error:", error);
    }
}

// -----------------------------------------------------------------------------------
// 5. Custom Error Class
// -----------------------------------------------------------------------------------

class CustomError extends Error {
    constructor(public code: number, message: string) {
        super(message); // pass message to base Error class
        this.name = "CustomError";
    }
}

try {
    throw new CustomError(404, "Resource Not Found");
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`Custom Error [${error.code}]: ${error.message}`);
    }
}

// -----------------------------------------------------------------------------------
// 6. Summary
// -----------------------------------------------------------------------------------

// Error handling in TypeScript:
// - try: wrap risky code
// - catch: handle error, type-check using instanceof
// - finally: code that always runs
// - throw: create new error
// - Custom errors: extend Error class for more info
// - Useful for API responses, JSON parsing, unsafe operations

console.log("All TypeScript error handling examples ran successfully!");
