/********************************************************************
 *             JAVASCRIPT LOOP METHODS (DETAILED)
 *             Beginner → Expert
 *             বাংলা কমেন্ট সহ
 ********************************************************************/

/********************************************************************
 * 1️⃣ for loop (Traditional loop)
 *
 * 👉 প্রথমে শুরু, condition check, তারপর increment/decrement
 * 👉 index দিয়ে array access করা হয়
 ********************************************************************/

console.log("=== for loop Example ===");

const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}, Value ${numbers[i]}`);
}

/*
Step by step:
i=0 → numbers[0]=10 → print
i=1 → numbers[1]=20 → print
i=2 → numbers[2]=30 → print
i=3 → numbers[3]=40 → print
i=4 → numbers[4]=50 → print
i=5 → condition false → loop stops
*/

/********************************************************************
 * 2️⃣ for...of loop (Array Elements)
 *
 * 👉 Array এর প্রতিটি element access করতে use হয়
 * 👉 index প্রয়োজন হলে extra variable use করতে হবে
 ********************************************************************/

console.log("\n=== for...of loop Example ===");

for (const num of numbers) {
    console.log("Value:", num);
}

// index নিয়ে access করতে চাইলে
for (const [index, value] of numbers.entries()) {
    console.log(`Index ${index}, Value ${value}`);
}

/********************************************************************
 * 3️⃣ for...in loop (Object Properties / Array Indices)
 *
 * 👉 Object এর properties iterate করতে use হয়
 * 👉 Array এ index access করতেও ব্যবহার করা যায়
 ********************************************************************/

console.log("\n=== for...in loop Example ===");

// Object example
const student = { name: "Nishat", age: 18, country: "Bangladesh" };

for (const key in student) {
    console.log(`Property: ${key}, Value: ${student[key]}`);
}

// Array example
for (const index in numbers) {
    console.log(`Index: ${index}, Value: ${numbers[index]}`);
}

/********************************************************************
 * 4️⃣ while loop (Condition Based)
 *
 * 👉 Condition সত্য থাকলে loop চলবে
 * 👉 আগে condition check, তারপর execution
 ********************************************************************/

console.log("\n=== while loop Example ===");

let i = 0;
while (i < numbers.length) {
    console.log(`Value: ${numbers[i]}`);
    i++;
}

/********************************************************************
 * 5️⃣ do...while loop (Execute at least once)
 *
 * 👉 প্রথম iteration একবার run হয়, তারপর condition check
 ********************************************************************/

console.log("\n=== do...while loop Example ===");

let j = 0;
do {
    console.log(`Value: ${numbers[j]}`);
    j++;
} while (j < numbers.length);

/********************************************************************
 * 6️⃣ Array Loop Methods (Power Methods)
 *
 * 🔹 forEach → element process, no return
 * 🔹 map → transform element, return new array
 * 🔹 filter → condition match elements, return new array
 * 🔹 find → first matching element
 * 🔹 reduce → single value from array
 ********************************************************************/

console.log("\n=== Array Loop Methods Example ===");

// forEach → element process
numbers.forEach(num => console.log("forEach:", num));

// map → transform each element
const doubled = numbers.map(num => num * 2);
console.log("map doubled:", doubled);

// filter → condition match
const evenNumbers = numbers.filter(num => num % 20 === 0);
console.log("filter multiples of 20:", evenNumbers);

// find → first match
const firstLarge = numbers.find(num => num > 25);
console.log("find first > 25:", firstLarge);

// reduce → sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce sum:", sum);

/********************************************************************
 * 7️⃣ Nested Loops
 *
 * 👉 একটা loop এর ভিতরে আরেকটা loop ব্যবহার করা যায়
 ********************************************************************/

console.log("\n=== Nested Loops Example ===");

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(`Row ${row}, Col ${col}, Value: ${matrix[row][col]}`);
    }
}

/********************************************************************
 * 8️⃣ Loop Control Statements
 *
 * 🔹 break → loop stop
 * 🔹 continue → skip current iteration
 ********************************************************************/

console.log("\n=== Loop Control Example ===");

for (let k = 0; k < 10; k++) {
    if (k === 5) break; // loop stops at 5
    console.log("break example:", k);
}

for (let k = 0; k < 10; k++) {
    if (k % 2 === 0) continue; // skip even numbers
    console.log("continue example (odd only):", k);
}

/********************************************************************
 * 9️⃣ Summary Table
 *
 * Loop Type     | Use Case
 * ------------- | -----------------------------
 * for           | traditional loop, index based
 * for...of      | array elements
 * for...in      | object properties / array indices
 * while         | condition based loop
 * do...while    | executes at least once
 * forEach       | process each array element, no return
 * map           | transform array, returns new array
 * filter        | condition match elements, returns new array
 * find          | first matching element
 * reduce        | single value from array
 ********************************************************************/

console.log("=== END OF DETAILED JAVASCRIPT LOOP METHODS FILE ===");