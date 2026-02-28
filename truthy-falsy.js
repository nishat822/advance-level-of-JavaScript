/********************************************************************
 *                TRUTHY & FALSY VALUES IN JAVASCRIPT
 *                     Full Beginner to Advanced
 ********************************************************************/


/********************************************************************
 * 1️⃣ Truthy & Falsy কী?
 * 
 * যখন আমরা কোনো value if() এর ভিতরে দেই,
 * JavaScript সেটা Boolean এ convert করে নেয়।
 * 
 * Boolean(value)
 * 
 * যদি true হয় → Truthy
 * যদি false হয় → Falsy
 ********************************************************************/

console.log("========= BASIC BOOLEAN CONVERSION =========");

console.log(Boolean(true));      // true
console.log(Boolean(false));     // false


/********************************************************************
 * 2️⃣ JavaScript এর সব Falsy Values (মাত্র 7টা)
 ********************************************************************/

console.log("\n========= ALL FALSY VALUES =========");

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(0n));        // false (BigInt zero)
console.log(Boolean(""));        // false (empty string)
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// মনে রাখবে 👉 এগুলো ছাড়া বাকি সব Truthy


/********************************************************************
 * 3️⃣ Truthy Examples
 ********************************************************************/

console.log("\n========= TRUTHY VALUES =========");

console.log(Boolean("hello"));   // true
console.log(Boolean("0"));       // true (string zero truthy)
console.log(Boolean("false"));   // true (string false truthy)
console.log(Boolean(1));         // true
console.log(Boolean(-1));        // true
console.log(Boolean(100));       // true
console.log(Boolean([]));        // true (empty array truthy)
console.log(Boolean({}));        // true (empty object truthy)
console.log(Boolean(function(){})); // true


/********************************************************************
 * 4️⃣ if() কিভাবে কাজ করে
 ********************************************************************/

console.log("\n========= IF STATEMENT CHECK =========");

let data = "";

if (data) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // এটা চলবে কারণ empty string falsy
}


/********************************************************************
 * 5️⃣ কেন [] এবং {} Truthy?
 * 
 * কারণ এগুলো reference type।
 * JavaScript এ কোনো object কখনো falsy না।
 ********************************************************************/

console.log("\n========= ARRAY & OBJECT =========");

if ([]) {
    console.log("Empty array is Truthy");
}

if ({}) {
    console.log("Empty object is Truthy");
}


/********************************************************************
 * 6️⃣ NOT (!) Operator
 * 
 * ! মানে উল্টে দেওয়া
 ********************************************************************/

console.log("\n========= NOT OPERATOR =========");

let price = 0;

console.log(!price); 
// price = 0 → false
// !false → true

if (!price) {
    console.log("Price is Falsy");
}


/********************************************************************
 * 7️⃣ Double NOT (!!)
 * 
 * !! ব্যবহার করে যেকোনো value কে pure boolean বানানো যায়
 ********************************************************************/

console.log("\n========= DOUBLE NOT =========");

let value1 = "hello";
let value2 = 0;

console.log(!!value1); // true
console.log(!!value2); // false

// এটা আসলে Boolean(value) এর মতো কাজ করে


/********************************************************************
 * 8️⃣ Real Life Example
 ********************************************************************/

console.log("\n========= REAL LIFE EXAMPLE =========");

let userName = "";

if (userName) {
    console.log("Welcome user");
} else {
    console.log("Please enter your name");
}


/********************************************************************
 * 9️⃣ Important Interview Tricky Cases
 ********************************************************************/

console.log("\n========= TRICKY CASES =========");

console.log(Boolean(" "));    // true (space আছে)
console.log(Boolean("0"));    // true
console.log(Boolean([] == false)); // true (coercion এর জন্য)
console.log(Boolean([]));     // true
console.log(Boolean({}));     // true


/********************************************************************
 * 🔟 Summary Table
 ********************************************************************/

console.log("\n========= SUMMARY =========");

console.log("Falsy values are:");
console.log("false, 0, -0, 0n, '', null, undefined, NaN");

console.log("\nEverything else in JavaScript is Truthy!");


/********************************************************************
 * 🎯 FINAL PRACTICE SECTION
 ********************************************************************/

let testValues = [
    false,
    0,
    "",
    "hello",
    [],
    {},
    null,
    undefined,
    NaN,
    100
];

console.log("\n========= PRACTICE LOOP =========");

for (let i = 0; i < testValues.length; i++) {
    if (testValues[i]) {
        console.log(testValues[i], "→ Truthy");
    } else {
        console.log(testValues[i], "→ Falsy");
    }
}


/********************************************************************
 * ✅ END OF FILE
 * 
 * তুমি এই ফাইল run করলে Truthy & Falsy পুরো clear হয়ে যাবে।
 ********************************************************************/