// ==================== ASYNCHRONOUS TYPESCRIPT ====================
// Author: Muhammad Niaz Ali
// This file explains asynchronous programming in TypeScript
// including callbacks, promises, async/await, and timers

// -----------------------------------------------------------------------------------
// 1. What is Asynchronous?
// -----------------------------------------------------------------------------------

// Asynchronous means code does not wait; it runs in parallel
// Examples: API calls, timers, user events, file reading

console.log("Start of script");

// -----------------------------------------------------------------------------------
// 2. Callback Functions
// -----------------------------------------------------------------------------------

// A callback is a function passed as an argument to another function
// It executes after some task is completed

function fetchDataCallback(url: string, callback: (data: string) => void): void {
    console.log("Fetching data from:", url);

    // Simulate async operation with setTimeout
    setTimeout(() => {
        const data = `Data from ${url}`;
        callback(data); // call the callback after data is ready
    }, 2000);
}

// Usage
fetchDataCallback("https://api.example.com", (result: string) => {
    console.log("Callback Result:", result);
});

console.log("End of script (does not wait for callback)");

// -----------------------------------------------------------------------------------
// 3. Promises
// -----------------------------------------------------------------------------------

// Promise represents a future value of async operation
// States: pending, fulfilled, rejected

function fetchDataPromise(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("Fetching (Promise) from:", url);
        setTimeout(() => {
            if (url) {
                resolve(`Data from ${url}`); // successful
            } else {
                reject("Invalid URL"); // error
            }
        }, 2000);
    });
}

// Usage with .then() and .catch()
fetchDataPromise("https://api.example.com")
    .then((data: string) => {
        console.log("Promise resolved:", data);
    })
    .catch((error: any) => {
        console.error("Promise rejected:", error);
    });

// -----------------------------------------------------------------------------------
// 4. Async / Await
// -----------------------------------------------------------------------------------

// Cleaner syntax over promises
async function fetchAsyncData(url: string): Promise<void> {
    try {
        console.log("Fetching (Async/Await) from:", url);
        const data: string = await fetchDataPromise(url); // wait for promise
        console.log("Async/Await Result:", data);
    } catch (error) {
        console.error("Async/Await Error:", error);
    }
}

// Usage
fetchAsyncData("https://api.example.com");

// -----------------------------------------------------------------------------------
// 5. Timers: setTimeout, setInterval
// -----------------------------------------------------------------------------------

// setTimeout: execute once after delay
setTimeout(() => {
    console.log("Executed after 1 second (setTimeout)");
}, 1000);

// setInterval: execute repeatedly every interval
let count: number = 0;
const intervalId: number = setInterval(() => {
    count++;
    console.log(`Interval count: ${count}`);
    if (count === 3) clearInterval(intervalId); // stop after 3 times
}, 1000);

// -----------------------------------------------------------------------------------
// 6. Callback Hell Example (Nested Callbacks)
// -----------------------------------------------------------------------------------

function fetchUserData(id: number, callback: (user: string) => void): void {
    setTimeout(() => {
        callback(`User${id}`);
    }, 1000);
}

// Nested callbacks (not recommended in real projects)
fetchUserData(1, (user1: string) => {
    console.log(user1);
    fetchUserData(2, (user2: string) => {
        console.log(user2);
        fetchUserData(3, (user3: string) => {
            console.log(user3);
        });
    });
});

// -----------------------------------------------------------------------------------
// 7. Summary
// -----------------------------------------------------------------------------------

// Asynchronous TypeScript:
// - Callbacks: function passed as argument, executes later
// - Promises: cleaner handling, .then(), .catch()
// - Async/Await: syntactic sugar over promises
// - Timers: setTimeout, setInterval for delayed or repeated tasks
// - Avoid deep nested callbacks (callback hell), prefer promises/async-await

console.log("All asynchronous TypeScript examples initialized!");
