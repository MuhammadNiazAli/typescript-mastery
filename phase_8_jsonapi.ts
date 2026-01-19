// JSON & API Fetching in TypeScript - Complete Guide
// Author: Muhammad Niaz Ali
// This file explains JSON format, parsing, stringifying, and fetching data from APIs using TypeScript

// -----------------------------------------------------------------------------------
// 1. JSON Basics
// -----------------------------------------------------------------------------------

// JSON = JavaScript Object Notation
// - Text format for data exchange
// - Looks like JS object but is actually string
// - Keys are strings, values can be: string, number, boolean, null, array, object

// Example: static JSON string from server
const jsonString: string = `
{
    "name": "Alice",
    "age": 25,
    "isActive": true,
    "hobbies": ["Reading", "Gaming"]
}
`;

// -----------------------------------------------------------------------------------
// 2. Parsing JSON
// -----------------------------------------------------------------------------------

// Convert JSON string to TypeScript object using JSON.parse
interface Person {
    name: string;
    age: number;
    isActive: boolean;
    hobbies: string[];
}

const personObj: Person = JSON.parse(jsonString);
console.log("Parsed JSON Object:", personObj);
console.log("Person's Name:", personObj.name);

// -----------------------------------------------------------------------------------
// 3. Stringifying JSON
// -----------------------------------------------------------------------------------

// Convert TypeScript object to JSON string
const newPerson: Person = {
    name: "Bob",
    age: 30,
    isActive: false,
    hobbies: ["Cooking", "Traveling"]
};

const newJsonString: string = JSON.stringify(newPerson);
console.log("JSON String:", newJsonString);

// -----------------------------------------------------------------------------------
// 4. Fetch API in TypeScript
// -----------------------------------------------------------------------------------

// Type-safe fetch using async/await
// Using placeholder API: https://jsonplaceholder.typicode.com

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Async function to fetch posts
async function fetchPosts(): Promise<Post[]> {
    try {
        const response: Response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

// Usage
(async () => {
    const posts: Post[] = await fetchPosts();
    console.log("Fetched Posts:", posts.slice(0, 3)); // Display first 3 posts
})();

// -----------------------------------------------------------------------------------
// 5. POST Request Example
// -----------------------------------------------------------------------------------

// Sending data to API using POST
async function createPost(newPost: Omit<Post, "id">): Promise<Post | null> {
    try {
        const response: Response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const createdPost: Post = await response.json();
        return createdPost;
    } catch (error) {
        console.error("Error creating post:", error);
        return null;
    }
}

// Usage
(async () => {
    const newPost: Omit<Post, "id"> = {
        userId: 1,
        title: "My New Post",
        body: "This is a post created from TypeScript."
    };
    const created: Post | null = await createPost(newPost);
    console.log("Created Post:", created);
})();

// -----------------------------------------------------------------------------------
// 6. Notes on JSON & API in TypeScript
// -----------------------------------------------------------------------------------

// - JSON.parse() converts string to object
// - JSON.stringify() converts object to string
// - Always define TypeScript interfaces for type safety
// - Fetch API returns Promise<Response>
// - Use response.ok to check HTTP status
// - GET requests fetch data
// - POST requests send data with headers & body
// - Async/Await makes code cleaner than chaining .then()

// -----------------------------------------------------------------------------------
// 7. Summary
// -----------------------------------------------------------------------------------

// JSON:
// - Text-based data format
// - Key-value pairs
// - Arrays and nested objects supported
// - Parsed with JSON.parse, stringified with JSON.stringify

// API Fetching:
// - Use fetch() or Axios
// - Async/Await with try/catch
// - Type interfaces for responses
// - GET, POST, headers, body management

console.log("All TypeScript JSON & API examples ran successfully!");
