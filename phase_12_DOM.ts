// ==================== DOM (Document Object Model) in TypeScript ====================
// Author: Muhammad Niaz Ali
// This file explains DOM manipulation in TypeScript with detailed examples

// -----------------------------------------------------------------------------------
// 1. Introduction to DOM
// -----------------------------------------------------------------------------------

// DOM = Document Object Model
// - Browser converts HTML page into a tree structure
// - Each HTML tag (div, p, h1, button) becomes a node/object
// - JS/TS can read & modify these nodes
// Example analogy: HTML page = house, DOM = blueprint, JS = painter/mover

// -----------------------------------------------------------------------------------
// 2. Selecting Elements
// -----------------------------------------------------------------------------------

// Selecting = picking an HTML element to manipulate
// Types of selection methods:

// ------------------------
// 2.1 getElementById
// ------------------------

// Select element by unique id
// Returns HTMLElement or null
const title: HTMLElement | null = document.getElementById("title");
if (title) {
    title.textContent = "Updated Title via TypeScript";
    title.style.color = "blue";
}

// ------------------------
// 2.2 getElementsByClassName
// ------------------------

// Returns HTMLCollection (array-like, not real array)
const items: HTMLCollectionOf<Element> = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
    (items[i] as HTMLElement).style.backgroundColor = "lightgray";
}

// ------------------------
// 2.3 getElementsByTagName
// ------------------------

const paragraphs: HTMLCollectionOf<HTMLParagraphElement> = document.getElementsByTagName("p");
for (let p of paragraphs) {
    p.style.fontWeight = "bold";
}

// ------------------------
// 2.4 querySelector
// ------------------------

// Returns first matching element
const firstButton: HTMLButtonElement | null = document.querySelector("button");
if (firstButton) firstButton.textContent = "Click Me (Updated)";

// ------------------------
// 2.5 querySelectorAll
// ------------------------

// Returns NodeList (can use forEach)
const allButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button");
allButtons.forEach(btn => {
    btn.style.padding = "10px 20px";
    btn.style.cursor = "pointer";
});

// -----------------------------------------------------------------------------------
// 3. Modifying Content & Attributes
// -----------------------------------------------------------------------------------

if (title) {
    // Change text
    title.textContent = "Hello, TypeScript DOM!";

    // Change HTML content
    title.innerHTML = "<i>Italic Title</i>";

    // Add attributes
    title.setAttribute("data-info", "TS Demo");
    console.log("Data attribute:", title.getAttribute("data-info"));
}

// -----------------------------------------------------------------------------------
// 4. Class Manipulation
// -----------------------------------------------------------------------------------

if (title) {
    title.classList.add("highlight"); // add class
    title.classList.remove("old-class"); // remove class
    title.classList.toggle("active"); // toggle class
    console.log("Classes:", title.className);
}

// -----------------------------------------------------------------------------------
// 5. Event Handling
// -----------------------------------------------------------------------------------

// Add event listener
if (firstButton) {
    firstButton.addEventListener("click", (event: MouseEvent) => {
        console.log("Button clicked!", event);
        if (title) title.style.color = "red";
    });
}

// Input event example
const inputField: HTMLInputElement | null = document.querySelector("#nameInput");
if (inputField) {
    inputField.addEventListener("input", (event: Event) => {
        const target = event.target as HTMLInputElement;
        console.log("Input value:", target.value);
    });
}

// Form submit event example
const form: HTMLFormElement | null = document.querySelector("#myForm");
if (form) {
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault(); // prevent default form submission
        console.log("Form submitted!");
    });
}

// -----------------------------------------------------------------------------------
// 6. DOM Traversal
// -----------------------------------------------------------------------------------

if (title) {
    console.log("Parent Node:", title.parentNode);
    console.log("Children:", title.children);
    console.log("Next Sibling:", title.nextElementSibling);
    console.log("Previous Sibling:", title.previousElementSibling);
}

// -----------------------------------------------------------------------------------
// 7. Creating & Appending Elements
// -----------------------------------------------------------------------------------

const newDiv: HTMLDivElement = document.createElement("div");
newDiv.textContent = "This is a new div";
newDiv.style.backgroundColor = "lightyellow";

const container: HTMLElement | null = document.getElementById("container");
if (container) container.appendChild(newDiv);

// -----------------------------------------------------------------------------------
// 8. Removing Elements
// -----------------------------------------------------------------------------------

if (newDiv.parentNode) {
    newDiv.parentNode.removeChild(newDiv);
}

// -----------------------------------------------------------------------------------
// 9. Summary
// -----------------------------------------------------------------------------------

// DOM in TypeScript:
// - Selecting elements: getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll
// - Modifying content: textContent, innerHTML
// - Attributes: getAttribute, setAttribute
// - Classes: classList.add, remove, toggle
// - Events: addEventListener (click, input, submit)
// - Traversal: parentNode, children, nextElementSibling, previousElementSibling
// - Create & append elements: createElement, appendChild
// - Remove elements: removeChild

console.log("All TypeScript DOM examples initialized successfully!");
