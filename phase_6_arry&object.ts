// TypeScript Arrays & Objects - Complete Guide
// Author: Muhammad Niaz Ali
// This file explains arrays, objects, and all commonly used methods in TypeScript with detailed explanations

// -----------------------------------------------------------------------------------
// 1. Arrays in TypeScript
// -----------------------------------------------------------------------------------

// Array declaration with explicit type
let numbers: number[] = [10, 20, 30, 40, 50];
let fruits: string[] = ["Apple", "Banana", "Mango"];

// Generic array syntax
let colors: Array<string> = ["Red", "Green", "Blue"];

console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Colors:", colors);

// -----------------------------------------------------------------------------------
// 2. Accessing Array Elements
// -----------------------------------------------------------------------------------

console.log("First number:", numbers[0]); // 10
console.log("Last fruit:", fruits[fruits.length - 1]); // Mango

// -----------------------------------------------------------------------------------
// 3. Modifying Arrays
// -----------------------------------------------------------------------------------

// Add elements
numbers.push(60); // Add at end
numbers.unshift(5); // Add at start
console.log("Numbers after push/unshift:", numbers);

// Remove elements
numbers.pop(); // Remove last
numbers.shift(); // Remove first
console.log("Numbers after pop/shift:", numbers);

// -----------------------------------------------------------------------------------
// 4. Iterating Arrays
// -----------------------------------------------------------------------------------

// For loop
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}:`, fruits[i]);
}

// For...of loop
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// forEach method
fruits.forEach((fruit, index) => {
    console.log(`forEach - Index ${index}: ${fruit}`);
});

// -----------------------------------------------------------------------------------
// 5. Array Methods
// -----------------------------------------------------------------------------------

// map: create new array by transforming elements
let doubledNumbers: number[] = numbers.map(n => n * 2);
console.log("Doubled Numbers:", doubledNumbers);

// filter: create new array with elements that pass condition
let largeNumbers: number[] = numbers.filter(n => n > 20);
console.log("Numbers > 20:", largeNumbers);

// reduce: reduce array to single value
let sumOfNumbers: number = numbers.reduce((total, n) => total + n, 0);
console.log("Sum of Numbers:", sumOfNumbers);

// find: first element that satisfies condition
let foundFruit: string | undefined = fruits.find(fruit => fruit.startsWith("B"));
console.log("First fruit starting with B:", foundFruit);

// findIndex: index of first element that satisfies condition
let indexOfMango: number = fruits.findIndex(fruit => fruit === "Mango");
console.log("Index of Mango:", indexOfMango);

// includes: check if array contains element
let hasApple: boolean = fruits.includes("Apple");
console.log("Includes Apple:", hasApple);

// some: check if at least one element passes condition
let hasLargeNumber: boolean = numbers.some(n => n > 40);
console.log("Some numbers > 40:", hasLargeNumber);

// every: check if all elements pass condition
let allPositive: boolean = numbers.every(n => n > 0);
console.log("All numbers positive:", allPositive);

// slice: returns portion of array (non-destructive)
let slicedFruits: string[] = fruits.slice(0, 2);
console.log("Sliced fruits:", slicedFruits);

// splice: remove/replace/add elements (destructive)
fruits.splice(1, 1, "Orange"); // remove 1 element at index 1, add "Orange"
console.log("Fruits after splice:", fruits);

// concat: merge arrays
let moreFruits: string[] = ["Pineapple", "Grapes"];
let allFruits: string[] = fruits.concat(moreFruits);
console.log("All Fruits:", allFruits);

// join: convert array to string
let fruitsString: string = fruits.join(", ");
console.log("Fruits as string:", fruitsString);

// reverse: reverse array in place
numbers.reverse();
console.log("Reversed Numbers:", numbers);

// -----------------------------------------------------------------------------------
// 6. Destructuring Arrays
// -----------------------------------------------------------------------------------

let [firstFruit, secondFruit, ...restFruits] = fruits;
console.log("First Fruit:", firstFruit);
console.log("Second Fruit:", secondFruit);
console.log("Rest Fruits:", restFruits);

// -----------------------------------------------------------------------------------
// 7. Spread Operator with Arrays
// -----------------------------------------------------------------------------------

let newFruits: string[] = [...fruits, "Kiwi", "Peach"];
console.log("New Fruits with Spread:", newFruits);

// Clone array
let clonedFruits: string[] = [...fruits];
console.log("Cloned Fruits:", clonedFruits);

// -----------------------------------------------------------------------------------
// 8. Objects in TypeScript
// -----------------------------------------------------------------------------------

// Object declaration with types
type Person = {
    name: string;
    age: number;
    isActive: boolean;
    hobbies?: string[]; // optional property
};

let person: Person = {
    name: "Alice",
    age: 25,
    isActive: true,
    hobbies: ["Reading", "Gaming"]
};

console.log("Person:", person);

// Access properties
console.log("Name:", person.name);
console.log("Age:", person["age"]); // bracket notation

// Modify properties
person.age = 26;
person.isActive = false;

// Add new property (if type allows)
person.hobbies?.push("Cooking");
console.log("Updated Person:", person);

// -----------------------------------------------------------------------------------
// 9. Object Methods
// -----------------------------------------------------------------------------------

console.log("Keys:", Object.keys(person)); // ["name", "age", "isActive", "hobbies"]
console.log("Values:", Object.values(person)); // ["Alice", 26, false, ["Reading","Gaming","Cooking"]]
console.log("Entries:", Object.entries(person)); // [["name","Alice"],["age",26],...]

// Merge objects
let additionalInfo = { country: "USA", city: "New York" };
let mergedPerson = Object.assign({}, person, additionalInfo);
console.log("Merged Person:", mergedPerson);

// -----------------------------------------------------------------------------------
// 10. Nested Objects & Arrays
// -----------------------------------------------------------------------------------

let company = {
    name: "TechCorp",
    employees: [
        { name: "John", age: 28 },
        { name: "Alice", age: 25 }
    ]
};

// Access nested array
console.log("First Employee Name:", company.employees[0].name);

// Add new employee
company.employees.push({ name: "Bob", age: 30 });
console.log("Updated Employees:", company.employees);

// -----------------------------------------------------------------------------------
// 11. Summary
// -----------------------------------------------------------------------------------

// Arrays in TypeScript:
// - Type safe: number[], string[], Array<Type>
// - Methods: push, pop, shift, unshift, map, filter, reduce, find, findIndex, includes, some, every, slice, splice, concat, join, reverse
// - Destructuring & spread operator for easier handling

// Objects in TypeScript:
// - Type safe with type/interface
// - Access: dot or bracket notation
// - Object.keys, Object.values, Object.entries
// - Object.assign for merging
// - Nested objects/arrays fully supported

console.log("All TypeScript array and object examples ran successfully!");
