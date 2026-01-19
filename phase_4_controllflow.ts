// TypeScript Control Flow - Complete Guide
// Author: Muhammad Niaz Ali
// This file explains all control flow structures in TypeScript with detailed examples

// -----------------------------------------------------------------------------------
// 1. If Statement
// -----------------------------------------------------------------------------------

// Syntax:
// if (condition) { /* code to execute if condition is true */ }

let age: number = 20;

if (age >= 18) {
    console.log("You are an adult."); //  This will run because age is 20
}

// -----------------------------------------------------------------------------------
// 2. If-Else Statement
// -----------------------------------------------------------------------------------

// Syntax:
// if (condition) { /* code */ } else { /* code if condition is false */ }

let isLoggedIn: boolean = false;

if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in."); //  This will run because isLoggedIn is false
}

// -----------------------------------------------------------------------------------
// 3. If-Else If-Else Statement
// -----------------------------------------------------------------------------------

// Allows multiple conditions to be checked sequentially
let score: number = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B"); //  This will run
} else if (score >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// -----------------------------------------------------------------------------------
// 4. Nested If Statements
// -----------------------------------------------------------------------------------

let hasPremiumAccount: boolean = true;
let subscriptionActive: boolean = false;

if (hasPremiumAccount) {
    if (subscriptionActive) {
        console.log("Access granted to premium features.");
    } else {
        console.log("Please renew your subscription."); //  Runs
    }
}

// -----------------------------------------------------------------------------------
// 5. Switch Case
// -----------------------------------------------------------------------------------

// Syntax:
// switch(expression) { case value1: ... break; case value2: ... break; default: ... }

let day: number = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); //  Runs
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

// Notes:
// - 'break' prevents fall-through
// - 'default' runs if no case matches

// -----------------------------------------------------------------------------------
// 6. Ternary Operator
// -----------------------------------------------------------------------------------

// Syntax: condition ? valueIfTrue : valueIfFalse
let temperature: number = 30;
let weather: string = temperature > 25 ? "Hot" : "Cool";

console.log("Weather:", weather); //  Weather: Hot

// You can also nest ternary operators
let grade: string = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F";
console.log("Nested Ternary Grade:", grade); //  B

// -----------------------------------------------------------------------------------
// 7. Truthy and Falsy Values
// -----------------------------------------------------------------------------------

// In TypeScript/JS, these values are considered falsy: false, 0, '', null, undefined, NaN
let input: any = 0;

if (input) {
    console.log("Truthy value");
} else {
    console.log("Falsy value"); //  Runs
}

// -----------------------------------------------------------------------------------
// 8. Guard Clauses
// -----------------------------------------------------------------------------------

// Early exit to simplify nested conditions
function checkAccess(userRole: string) {
    if (userRole !== "admin") return console.log("Access denied"); // Early exit
    console.log("Access granted");
}

checkAccess("guest"); //  Access denied
checkAccess("admin"); //  Access granted

// -----------------------------------------------------------------------------------
// 9. Summary
// -----------------------------------------------------------------------------------

// Control Flow in TypeScript:
// - if: execute code if condition is true
// - if-else: two branches, true/false
// - if-else if-else: multiple sequential conditions
// - nested if: conditions inside conditions
// - switch-case: multiple fixed value checks
// - ternary: shorthand for if-else
// - guard clauses: early return to reduce nesting
// - understand truthy/falsy values

console.log("All TypeScript control flow examples ran successfully!");
