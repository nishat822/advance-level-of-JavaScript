/********************************************************************
 *                JAVASCRIPT RETURN (BEGINNER → CLEAR)
 *                বাংলা কমেন্ট সহ সম্পূর্ণ ব্যাখ্যা
 ********************************************************************/


/********************************************************************
 * 1️⃣ return কী?
 *
 * 👉 return মানে:
 * function যেই value তৈরি করেছে সেটা বাইরে পাঠানো।
 *
 * 👉 return দিলে function সেখানেই বন্ধ হয়ে যায়।
 ********************************************************************/


/********************************************************************
 * 2️⃣ Basic Example
 ********************************************************************/

function add(a, b) {
    return a + b; // result বাইরে পাঠানো হচ্ছে
}

let result = add(5, 3);

console.log("Result:", result); // 8



/********************************************************************
 * 3️⃣ যদি return না দিই?
 ********************************************************************/

function addWithoutReturn(a, b) {
    let total = a + b;
    // return নেই
}

let output = addWithoutReturn(5, 3);

console.log("Without return:", output);
// undefined
// কারণ function কিছু return করেনি



/********************************************************************
 * 4️⃣ console.log vs return
 ********************************************************************/

function printSum(a, b) {
    console.log("Sum:", a + b);
}

let test = printSum(2, 3);

// এখানে console.log দেখাবে
// কিন্তু function কিছু return করেনি

console.log("Return value:", test); 
// undefined

/*
👉 console.log শুধু print করে
👉 return value বাইরে পাঠায়
*/



/********************************************************************
 * 5️⃣ return দিলে নিচের code run হয় না
 ********************************************************************/

function checkNumber(num) {
    if (num > 0) {
        return "Positive";
        console.log("This will not run"); // কখনো run হবে না
    }
}

console.log(checkNumber(5));



/********************************************************************
 * 6️⃣ Early Return (Good Practice)
 ********************************************************************/

function divide(a, b) {

    if (b === 0) {
        return "Cannot divide by zero"; // আগে বের হয়ে যাচ্ছে
    }

    return a / b;
}

console.log(divide(10, 2));
console.log(divide(10, 0));



/********************************************************************
 * 7️⃣ Multiple Return
 ********************************************************************/

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(7));



/********************************************************************
 * 8️⃣ Function object return করতে পারে
 ********************************************************************/

function createUser(name, age) {
    return {
        username: name,
        userAge: age
    };
}

let user = createUser("Nishat", 18);
console.log(user);



/********************************************************************
 * 9️⃣ Function আরেকটা function return করতে পারে
 * (Closure concept)
 ********************************************************************/

function outer() {
    return function() {
        return "Hello from inner function";
    };
}

let innerFunc = outer();
console.log(innerFunc());



/********************************************************************
 * 🔟 return এর বদলে আর কী ব্যবহার হয়?
 *
 * 1. console.log() → শুধু print করে
 * 2. alert() (browser এ)
 * 3. global variable modify করা
 * 4. callback function call করা
 ********************************************************************/

// ❌ global variable ব্যবহার (bad practice)

let globalValue;

function badExample() {
    globalValue = 100; // বাইরে value পরিবর্তন করছে
}

badExample();
console.log("Global changed:", globalValue);



/********************************************************************
 * 1️⃣1️⃣ Arrow Function এ return
 ********************************************************************/

// Short form (implicit return)
const multiply = (a, b) => a * b;

console.log(multiply(3, 4));

// Long form
const multiply2 = (a, b) => {
    return a * b;
};

console.log(multiply2(3, 4));



/********************************************************************
 * 1️⃣2️⃣ Important Rules
 *
 * ✅ return দিলে function থেমে যায়
 * ✅ return ছাড়া function undefined দেয়
 * ✅ console.log return না
 * ✅ return দিয়ে object, array, function সব পাঠানো যায়
 ********************************************************************/


/********************************************************************
 * FINAL SUMMARY
 *
 * return = function থেকে value বাইরে পাঠানো
 *
 * Interview answer:
 * "return sends a value back from a function and stops execution."
 ********************************************************************/

console.log("=== END OF RETURN PRACTICE FILE ===");