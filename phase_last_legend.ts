// ==================== JAVASCRIPT EXPERT LEVEL GUIDE in TypeScript ====================
// Author: Sir
// This file explains advanced JavaScript & TypeScript concepts for expert-level developers

// -----------------------------------------------------------------------------------
// 1. EVENT LOOP
// -----------------------------------------------------------------------------------

// JS single-threaded hai
// Asynchronous code ke liye browser Web APIs use karta hai

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout

// -----------------------------------------------------------------------------------
// 2. MEMORY MANAGEMENT
// -----------------------------------------------------------------------------------

let user: { name: string } | null = { name: "Ali" };
user = null; // object unreachable, garbage collector memory free karega

// Memory leaks avoid karne ke tips:
// - Global variables
// - Unused event listeners
// - Closures me unnecessary references

// -----------------------------------------------------------------------------------
// 3. WEB STORAGE
// -----------------------------------------------------------------------------------

// localStorage
localStorage.setItem("name", "Ali");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

// sessionStorage
sessionStorage.setItem("age", "25");
console.log(sessionStorage.getItem("age"));

// -----------------------------------------------------------------------------------
// 4. MODULES (ES Modules in TypeScript)
// -----------------------------------------------------------------------------------

// export.ts
export const nameTS: string = "Ali";
export function greetTS(): void {
    console.log("Hello from TypeScript Module");
}

// import.ts
// import { nameTS, greetTS } from "./export.ts";
// console.log(nameTS);
// greetTS();

// default export example
export default function defaultFunc(): void {
    console.log("Default Export Function");
}

// import defaultFunc from "./file.ts";
// defaultFunc();

// -----------------------------------------------------------------------------------
// 5. STRICT MODE
// -----------------------------------------------------------------------------------

"use strict";

// x = 10; // Error in strict mode, variable must be declared

// -----------------------------------------------------------------------------------
// 6. PERFORMANCE OPTIMIZATION
// -----------------------------------------------------------------------------------

// Debouncing
function debounce(fn: () => void, delay: number): () => void {
    let timer: NodeJS.Timeout;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
}

// Throttling
function throttle(fn: () => void, limit: number): () => void {
    let flag = true;
    return function () {
        if (flag) {
            fn();
            flag = false;
            setTimeout(() => (flag = true), limit);
        }
    };
}

// -----------------------------------------------------------------------------------
// 7. DESIGN PATTERNS
// -----------------------------------------------------------------------------------

// OBSERVER PATTERN
class Subject<T> {
    private observers: Array<(data: T) => void> = [];

    subscribe(fn: (data: T) => void): void {
        this.observers.push(fn);
    }

    notify(data: T): void {
        this.observers.forEach(fn => fn(data));
    }
}

const news = new Subject<string>();
news.subscribe(data => console.log("User1:", data));
news.subscribe(data => console.log("User2:", data));
news.notify("Breaking News");

// -----------------------------------------------------------------------------------
// 8. NODE.JS & SERVER-SIDE JS
// -----------------------------------------------------------------------------------

import * as fs from "fs";
import * as cluster from "cluster";
import { EventEmitter } from "events";

// Streams
const stream = fs.createReadStream("file.txt");
stream.on("data", chunk => console.log(chunk.toString()));

// Buffer
const buf = Buffer.from("Hello");
console.log(buf);

// Cluster
if (cluster.isPrimary) {
    cluster.fork();
} else {
    console.log("Worker running");
}

// EventEmitter
const emitter = new EventEmitter();
emitter.on("login", user => console.log("User logged:", user));
emitter.emit("login", "Ali");

// -----------------------------------------------------------------------------------
// 9. ADVANCED DOM & BROWSER APIS
// -----------------------------------------------------------------------------------

// MutationObserver
const observer = new MutationObserver(() => console.log("DOM changed"));
observer.observe(document.body, { childList: true, subtree: true });

// Shadow DOM
const shadowHost = document.querySelector("#box") as HTMLElement;
if (shadowHost) {
    const shadow = shadowHost.attachShadow({ mode: "open" });
    shadow.innerHTML = `<style>p{color:red}</style><p>Shadow text</p>`;
}

// Web Workers
// const worker = new Worker("worker.js");
// worker.postMessage(10);
// worker.onmessage = e => console.log("Result:", e.data);

// Performance API
performance.mark("start");
for (let i = 0; i < 100000; i++) {}
performance.mark("end");
performance.measure("loop", "start", "end");
console.log(performance.getEntriesByType("measure"));

// Intersection Observer (lazy loading example)
// const io = new IntersectionObserver(entries => {
//     entries.forEach(e => {
//         if (e.isIntersecting) console.log("Visible");
//     });
// });
// io.observe(document.querySelector("#box") as Element);

// -----------------------------------------------------------------------------------
// 10. IMMUTABILITY & FUNCTIONAL PATTERNS
// -----------------------------------------------------------------------------------

let state = { count: 0 };
let newState = { ...state, count: 1 };
console.log(state.count, newState.count);

// Function Composition
const add = (x: number) => x + 1;
const mul = (x: number) => x * 2;
const compose = (f: (n: number) => number, g: (n: number) => number) => (x: number) => f(g(x));
console.log(compose(add, mul)(5)); // 11

// Memoization
function memo<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map<string, ReturnType<T>>();
    return ((...args: any[]) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key)!;
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }) as T;
}

const fib = memo((n: number): number => (n < 2 ? n : fib(n - 1) + fib(n - 2)));
console.log(fib(40));

// -----------------------------------------------------------------------------------
// 11. GENERATORS, ITERATORS, PROXY, REFLECT
// -----------------------------------------------------------------------------------

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
const g = gen();
console.log(g.next(), g.next(), g.next());

let obj = { values: [1, 2, 3] };
(obj as any)[Symbol.iterator] = function () {
    let i = 0;
    const values = this.values;
    return {
        next: () => {
            if (i < values.length) return { value: values[i++], done: false };
            return { value: undefined, done: true };
        }
    };
};

for (let v of obj.values) console.log(v);

// Proxy & Reflect
let target = { name: "Ali" };
let proxy = new Proxy(target, {
    get(obj, prop) {
        console.log("Accessed:", prop.toString());
        return obj[prop as keyof typeof obj];
    },
    set(obj, prop, val) {
        console.log("Updated:", prop.toString(), val);
        obj[prop as keyof typeof obj] = val;
        return true;
    }
});
proxy.name;
proxy.age = 25;

Reflect.set(target, "city", "Lahore");
console.log(Reflect.get(target, "city"));

// -----------------------------------------------------------------------------------
// 12. FINAL SUMMARY
// -----------------------------------------------------------------------------------

// TypeScript Expert Level Guide Includes:
// - Event Loop & Asynchronous JS
// - Memory Management & Garbage Collection
// - Web Storage (localStorage/sessionStorage)
// - Modules & Strict Mode
// - Performance Optimization (Debounce/Throttle)
// - Design Patterns (Observer, Singleton, Factory)
// - Node.js APIs (FS, Buffer, Cluster, EventEmitter)
// - Advanced DOM & Browser APIs (MutationObserver, Shadow DOM, Web Workers)
// - Immutability & Functional Programming (Compose, Memoization)
// - Generators, Iterators, Proxy, Reflect
// - Real-world browser and system-level JS concepts
// - Security, i18n, WebSockets, PWA, Canvas, WebGL, Performance APIs

console.log("TypeScript Expert Level Guide initialized successfully!");
