// TypeScript ek superset hai JavaScript ka jo static typing aur advanced features provide karta hai.
// Iska matlab hai ki aap JavaScript ke saare features use kar sakte hain, 
// saath hi aap apne code me types define kar sakte hain jo errors ko compile time par pakadta hai.
// TypeScript se aapka code zyada robust, maintainable, aur scalable ban jata hai.
// TypeScript code ko JavaScript me transpile kiya jata hai,
// jisse wo har jagah run ho sakta hai jahan JavaScript supported hai.
// TypeScript ka use karne ke fayde:
// 1. Static Typing: Aap variables, function parameters, aur return types ke liye types define kar sakte hain.
// 2. Enhanced IDE Support: TypeScript better autocompletion, navigation, aur refactoring support provide karta hai.
// 3. Early Error Detection: TypeScript compile time par hi errors detect kar leta hai,
//    jisse runtime errors kam ho jate hain.
// 4. Modern JavaScript Features: TypeScript aapko latest JavaScript features use karne deta hai,
//    chahe aapka target environment unhe support na karta ho.
// 5. Object-Oriented Programming: TypeScript classes, interfaces, aur modules ke through
//    object-oriented programming concepts ko support karta hai.

// Overall, TypeScript developers ko zyada confidence ke saath code likhne me madad karta hai,
// aur bade projects me code quality aur maintainability improve karta hai.
// ==================== JSON & API Fetching in TypeScript ====================
// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write,
// and easy for machines to parse and generate.
// JSON is often used to transfer data between a server and a web application,
// or to store data in a file or database.
// JSON is a text format that is similar to JavaScript object literals,
// but it has some important differences:
// - Keys must be double-quoted strings
// - Values can be strings, numbers, booleans, null, arrays, or objects
// In TypeScript, you can work with JSON data using the built-in JSON object,
// which provides methods for parsing JSON strings into TypeScript objects,
// and for converting TypeScript objects into JSON strings.
// APIs (Application Programming Interfaces) allow different software applications to communicate with each other.
// Many web APIs use JSON as the data format for requests and responses.
// To fetch data from an API in TypeScript, you can use the Fetch API,
// which is a modern way to make HTTP requests in JavaScript and TypeScript.
// The Fetch API returns a Promise that resolves to the Response object representing the response to the request.
// You can then use methods like .json() on the Response object to parse the JSON data.
// -----------------------------------------------------------------------------------
// 1. JSON Parsing & Stringifying
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const post: Post = {
    
    userId: 1,
    id: 1,
    title: "Hello World",
    body: "This is my first post."
    
}
// Convert TypeScript object to JSON string
const jsonString: string = JSON.stringify(post);
console.log("JSON String:", jsonString);    
// Convert JSON string back to TypeScript object
const parsedPost: Post = JSON.parse(jsonString);
console.log("Parsed Post:", parsedPost);
// -----------------------------------------------------------------------------------
// 2. Fetching Data from an API (GET Request)
async function fetchPosts(): Promise<Post[]> {
    const response: Response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Post[] = await response.json();
    return data;
}

fetchPosts()
    .then((posts: Post[]) => {
        console.log("Fetched Posts:", posts);
    })
    .catch((error: Error) => {
        console.error("Error fetching posts:", error);
    });
// -----------------------------------------------------------------------------------
// 5. POST Request Example
async function createPost(newPost: Post): Promise<Post> {
    const response: Response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
         append    "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)   
        }
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const createdPost: Post = await response.json();
    return createdPost;
}
const newPost: Post = {
    userId: 1,
    id: 0, // id will be assigned by server
    title: "My New Post",
    body: "This is the content of my new post."
};
createPost(newPost)
    .then((created: Post) => {
        console.log("Created Post:", created);
    })
    .catch((error: Error) => {
        console.error("Error creating post:", error);
    }); 