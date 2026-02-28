/********************************************************************
 *        DOUBLE EQUAL (==) vs TRIPLE EQUAL (===)
 *        + TYPE COERCION DEEP DIVE (BEGINNER → EXPERT)
 ********************************************************************/


/********************************************************************
 * 1️⃣ ABSTRACT EQUALITY (==)
 *
 * ➜ Value compare করে
 * ➜ Type আলাদা হলে JavaScript নিজে convert করে নেয়
 * ➜ এটাকে বলে Type Coercion
 ********************************************************************/

console.log("=========== DOUBLE EQUAL (==) ===========");

// Same type হলে normal compare
console.log(2 == 2);          // true

// Number & String → String কে Number বানায়
console.log(2 == "2");        // true

// Boolean → Number হয় (true = 1, false = 0)
console.log(1 == true);       // true
console.log(0 == false);      // true

// String → Number হয়
console.log("1" == true);     // true
console.log("0" == false);    // true

// null & undefined special rule
console.log(null == undefined); // true

// Array → Primitive conversion
console.log([5] == 5);        // true
// Step:
// [5] → "5"
// "5" → 5
// 5 == 5 → true

// NaN never equal to anything (even itself)
console.log(NaN == NaN);      // false


/********************************************************************
 * 🔬 INTERNAL RULE (Simplified Algorithm)
 *
 * 1. Same type? → compare normally
 * 2. null == undefined → true
 * 3. Boolean? → convert to number
 * 4. String & Number? → convert string to number
 * 5. Object? → convert to primitive
 ********************************************************************/


/********************************************************************
 * 2️⃣ STRICT EQUALITY (===)
 *
 * ➜ Type + Value দুইটাই compare করে
 * ➜ কোনো conversion করে না
 ********************************************************************/

console.log("\n=========== TRIPLE EQUAL (===) ===========");

console.log(2 === 2);         // true
console.log(2 === "2");       // false
console.log(1 === true);      // false
console.log(null === undefined); // false
console.log(NaN === NaN);     // false


/********************************************************************
 * 3️⃣ TYPE COERCION IN MATH OPERATORS
 ********************************************************************/

console.log("\n=========== MATH COERCION ===========");

// + operator special (string concatenate করে)
console.log("5" + 2); // "52"

// - operator number বানায়
console.log("5" - 2); // 3

// * operator
console.log("5" * 2); // 10

// Boolean math
console.log(true + 1);  // 2
console.log(false + 1); // 1

// null → 0
console.log(null + 1);  // 1

// undefined → NaN
console.log(undefined + 1); // NaN


/********************************************************************
 * 4️⃣ OBJECT & ARRAY COMPARISON (Reference Type)
 ********************************************************************/

console.log("\n=========== OBJECT & ARRAY COMPARISON ===========");

// Different memory location
console.log({} == {});     // false
console.log([1,2] == [1,2]); // false

// Same reference
let arr1 = [1,2];
let arr2 = arr1;

console.log(arr1 === arr2); // true


/********************************************************************
 * 5️⃣ TRICKY INTERVIEW QUESTIONS
 ********************************************************************/

console.log("\n=========== TRICKY CASES ===========");

console.log([] == false); 
// [] → "" → 0
// false → 0
// 0 == 0 → true

console.log("" == 0);     // true
console.log(" " == 0);    // true (space → 0)

console.log([] == "");    // true
console.log([0] == 0);    // true

console.log([null] == 0); 
// [null] → "" → 0
// 0 == 0 → true


/********************************************************************
 * 6️⃣ BOOLEAN CONVERSION RULE
 ********************************************************************/

console.log("\n=========== BOOLEAN CONVERSION ===========");

console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false

// সবকিছু else → true
console.log(Boolean("0"));      // true
console.log(Boolean("false"));  // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true


/********************************************************************
 * 7️⃣ WHY NaN !== NaN ?
 *
 * NaN মানে Not a Number
 * এটা special invalid number value
 ********************************************************************/

console.log("\n=========== NaN CHECK ===========");

console.log(NaN === NaN); // false

// সঠিক পদ্ধতি
console.log(Number.isNaN(NaN)); // true


/********************************************************************
 * 8️⃣ REAL WORLD DANGER EXAMPLE
 ********************************************************************/

console.log("\n=========== REAL WORLD DANGER ===========");

let userInput = "0";

// Risky
if (userInput == 0) {
    console.log("== triggered (dangerous)");
}

// Safe
if (userInput === 0) {
    console.log("=== triggered");
} else {
    console.log("Always use === in real project");
}


/********************************************************************
 * 9️⃣ EXPERT TIP
 *
 * == ব্যবহার করা যায় শুধু তখন:
 * if (value == null)
 *
 * কারণ এটা null ও undefined দুইটাই ধরবে
 ********************************************************************/

let value = null;

if (value == null) {
    console.log("null or undefined detected safely");
}


/********************************************************************
 * 🔥 FINAL SUMMARY
 *
 * ==  → Abstract equality → Type convert করে
 * === → Strict equality → Type convert করে না
 *
 * Always prefer ===
 * Avoid == unless fully understood
 ********************************************************************/

console.log("\n=========== SUMMARY ===========");

console.log("==  → value compare + type convert");
console.log("=== → value + type compare (safe)");
console.log("Use === in production");