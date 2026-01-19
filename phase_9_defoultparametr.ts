// ==================== Modern TypeScript Patterns ====================
// Author: Muhammad Niaz Ali
// Ye file modern TypeScript patterns explain karti hai
// jo daily coding me code ko readable, reusable aur clean banate hain

// -----------------------------------------------------------------------------------
// 1. Default Parameters
// -----------------------------------------------------------------------------------

// Agar function call me argument missing ho to default value use hoti hai
function greet(name: string = "Guest"): string {
    return `Hello, ${name}`;
}

console.log(greet("Alice")); // Hello, Alice
console.log(greet()); // Hello, Guest

// -----------------------------------------------------------------------------------
// 2. Rest Parameters
// -----------------------------------------------------------------------------------

// Function multiple arguments handle kar sakta hai using ...
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100

// -----------------------------------------------------------------------------------
// 3. Spread Operator
// -----------------------------------------------------------------------------------

// Arrays aur objects ko easily clone ya merge kar sakte hain
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];

// Merge arrays
const mergedArr: number[] = [...arr1, ...arr2];
console.log("Merged Array:", mergedArr); // [1,2,3,4,5,6]

// Clone array
const clonedArr: number[] = [...arr1];
console.log("Cloned Array:", clonedArr); // [1,2,3]

// Objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1, isActive: true }; // add new property
console.log("Merged Object:", obj2);

// -----------------------------------------------------------------------------------
// 4. Destructuring
// -----------------------------------------------------------------------------------

// Arrays
const fruits: string[] = ["Apple", "Banana", "Mango"];
const [first, second, ...rest] = fruits;
console.log("First:", first); // Apple
console.log("Second:", second); // Banana
console.log("Rest:", rest); // ["Mango"]

// Objects
const person = { name: "Bob", age: 30, city: "New York" };
const { name, age, city } = person;
console.log("Name:", name, "Age:", age, "City:", city);

// -----------------------------------------------------------------------------------
// 5. Arrow Functions
// -----------------------------------------------------------------------------------

// Shorter syntax, lexical 'this'
const multiply = (x: number, y: number): number => x * y;
console.log("Multiply:", multiply(5, 4)); // 20

// -----------------------------------------------------------------------------------
// 6. Optional Chaining (?.)
// -----------------------------------------------------------------------------------

// Safe access to nested properties
type User = { profile?: { email?: string } };
const user1: User = {};
console.log("Email:", user1.profile?.email); // undefined, no error

// -----------------------------------------------------------------------------------
// 7. Nullish Coalescing Operator (??)
// -----------------------------------------------------------------------------------

// Use default if value is null or undefined
let input: string | null = null;
let value = input ?? "Default Value";
console.log("Value:", value); // Default Value

// -----------------------------------------------------------------------------------
// 8. Template Literals
// -----------------------------------------------------------------------------------

const firstName = "Alice";
const lastName = "Smith";
console.log(`Full Name: ${firstName} ${lastName}`); // Full Name: Alice Smith

// -----------------------------------------------------------------------------------
// 9. Short Circuiting
// -----------------------------------------------------------------------------------

const isLoggedIn = false;
const message = isLoggedIn && "Welcome"; // false, because first operand false
console.log("Message:", message);

const defaultMessage = isLoggedIn || "Please log in"; // "Please log in"
console.log("Default Message:", defaultMessage);

// -----------------------------------------------------------------------------------
// 10. Summary of Modern Patterns in TypeScript
// -----------------------------------------------------------------------------------

// - Default Parameters: function(arg = defaultValue)
// - Rest Parameters: function(...args)
// - Spread Operator: [...array], {...object}
// - Destructuring: const [a,b]=arr; const {x,y}=obj;
// - Arrow Functions: () => {}
// - Optional Chaining: obj?.prop?.subProp
// - Nullish Coalescing: value ?? defaultValue
// - Template Literals: `${var}`
// - Short Circuiting: && || for conditional logic

console.log("All modern TypeScript patterns examples ran successfully!");
