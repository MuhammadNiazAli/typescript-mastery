// ==================== Nested Objects & Arrays in TypeScript ====================
// Author: Muhammad Niaz Ali
// This file explains nested objects and arrays in TypeScript with examples

// -----------------------------------------------------------------------------------
// 1. Nested Objects
// -----------------------------------------------------------------------------------

// Real-life example: company with nested address object
type Address = {
    street: string;
    city: string;
    zip: string;
};

type Company = {
    name: string;
    address: Address;
    employees: number;
};

const company: Company = {
    name: "TechCorp",
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    employees: 50
};

// Access nested object properties
console.log("Company Name:", company.name);
console.log("City:", company.address.city);

// Modify nested object
company.address.zip = "10002";
console.log("Updated ZIP:", company.address.zip);

// -----------------------------------------------------------------------------------
// 2. Nested Arrays inside Objects
// -----------------------------------------------------------------------------------

type Employee = {
    name: string;
    age: number;
    skills: string[];
};

type Department = {
    name: string;
    employees: Employee[];
};

const dept: Department = {
    name: "Development",
    employees: [
        { name: "Alice", age: 25, skills: ["TypeScript", "React"] },
        { name: "Bob", age: 30, skills: ["Node.js", "Express"] }
    ]
};

// Access nested array elements
console.log("First Employee Name:", dept.employees[0].name);
console.log("Second Employee Skills:", dept.employees[1].skills);

// Add new employee
dept.employees.push({ name: "Charlie", age: 28, skills: ["Angular", "TypeScript"] });
console.log("All Employees:", dept.employees);

// -----------------------------------------------------------------------------------
// 3. Nested Objects inside Arrays
// -----------------------------------------------------------------------------------

// Example: array of objects representing projects
type Project = {
    title: string;
    team: Employee[];
};

const projects: Project[] = [
    {
        title: "Website Redesign",
        team: [
            { name: "Alice", age: 25, skills: ["HTML", "CSS", "TypeScript"] },
            { name: "Bob", age: 30, skills: ["Node.js", "Express"] }
        ]
    },
    {
        title: "Mobile App",
        team: [
            { name: "Charlie", age: 28, skills: ["React Native", "TypeScript"] },
            { name: "David", age: 32, skills: ["Flutter", "Dart"] }
        ]
    }
];

// Access nested objects inside array
console.log("First Project Title:", projects[0].title);
console.log("Team of Second Project:", projects[1].team);

// Loop through nested arrays
for (const project of projects) {
    console.log("Project:", project.title);
    for (const member of project.team) {
        console.log(`- ${member.name} (${member.skills.join(", ")})`);
    }
}

// -----------------------------------------------------------------------------------
// 4. Optional Nested Properties
// -----------------------------------------------------------------------------------

type Product = {
    id: number;
    name: string;
    details?: {
        manufacturer?: string;
        warranty?: string;
    };
};

const product1: Product = { id: 101, name: "Laptop" };
const product2: Product = { id: 102, name: "Phone", details: { manufacturer: "TechBrand" } };

// Access with optional chaining
console.log("Product1 Manufacturer:", product1.details?.manufacturer); // undefined
console.log("Product2 Manufacturer:", product2.details?.manufacturer); // TechBrand

// -----------------------------------------------------------------------------------
// 5. Summary
// -----------------------------------------------------------------------------------

// Nested Objects & Arrays in TypeScript:
// - Objects can have objects inside them (nested objects)
// - Objects can have arrays of objects or primitive types
// - Arrays can contain objects (nested structures)
// - Access using dot notation and array indices
// - Optional chaining (?.) helps safely access deeply nested properties
// - Type interfaces/type aliases ensure type safety for complex structures

console.log("All TypeScript nested object and array examples ran successfully!");
