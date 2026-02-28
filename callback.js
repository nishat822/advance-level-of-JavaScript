/********************************************************************
 *                JAVASCRIPT CALLBACK FUNCTION
 *                বাংলা কমেন্ট সহ সম্পূর্ণ ব্যাখ্যা
 ********************************************************************/


/********************************************************************
 * 1️⃣ Callback Function কী?
 *
 * 👉 যখন একটি function কে অন্য একটি function এর argument
 * হিসেবে পাঠানো হয় এবং পরে call করা হয় —
 * তখন সেটাকে Callback Function বলে।
 *
 * সহজ ভাষায়:
 * "একটা function, যাকে অন্য function ডাকে"
 ********************************************************************/


/********************************************************************
 * 2️⃣ Simple Example
 ********************************************************************/

function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    let username = "Nishat";

    // এখানে callback function call করা হচ্ছে
    callback(username);
}

// greet function কে argument হিসেবে পাঠাচ্ছি
processUser(greet);

/*
এখানে কী হলো?

processUser(greet)
মানে greet function কে পাঠানো হয়েছে

callback(username)
মানে greet("Nishat")
*/



/********************************************************************
 * 3️⃣ Anonymous Callback (সবচেয়ে বেশি ব্যবহার হয়)
 ********************************************************************/

function calculate(a, b, operation) {
    return operation(a, b);
}

let result = calculate(5, 3, function(x, y) {
    return x + y;
});

console.log("Addition:", result);



/********************************************************************
 * 4️⃣ Arrow Function Callback
 ********************************************************************/

let multiplyResult = calculate(5, 3, (x, y) => x * y);

console.log("Multiplication:", multiplyResult);



/********************************************************************
 * 5️⃣ কেন Callback দরকার?
 *
 * 👉 Flexible code বানাতে
 * 👉 Different behavior দিতে
 * 👉 Async কাজ করতে
 ********************************************************************/


/********************************************************************
 * 6️⃣ Real Example (Array Method Callback)
 ********************************************************************/

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log("Doubled:", doubled);

/*
map() এর ভিতরের function হলো callback
map নিজে function call করে
*/



/********************************************************************
 * 7️⃣ setTimeout (Async Callback Example)
 ********************************************************************/

console.log("Start");

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

/*
Output:
Start
End
This runs after 2 seconds

কারণ setTimeout asynchronous
*/



/********************************************************************
 * 8️⃣ Custom Async Example
 ********************************************************************/

function fetchData(callback) {

    console.log("Fetching data...");

    setTimeout(function() {
        let data = "User Data Loaded";
        callback(data);
    }, 2000);
}

fetchData(function(result) {
    console.log(result);
});



/********************************************************************
 * 9️⃣ Callback Without return
 *
 * অনেক সময় return ব্যবহার না করে callback ব্যবহার করা হয়
 ********************************************************************/

function processNumber(num, callback) {
    let result = num * 2;

    // return না করে callback call করা হচ্ছে
    callback(result);
}

processNumber(10, function(value) {
    console.log("Processed:", value);
});



/********************************************************************
 * 🔟 Callback Hell (Problem)
 *
 * যখন callback এর ভিতরে callback,
 * তার ভিতরে আবার callback হয়
 * তখন code জটিল হয়ে যায়
 ********************************************************************/

setTimeout(function() {
    console.log("Step 1");

    setTimeout(function() {
        console.log("Step 2");

        setTimeout(function() {
            console.log("Step 3");
        }, 1000);

    }, 1000);

}, 1000);

/*
এটাকে বলে Callback Hell
এই সমস্যা থেকে Promise ও async/await এসেছে
*/



/********************************************************************
 * 1️⃣1️⃣ Important Rules
 *
 * ✅ Callback = function as argument
 * ✅ অন্য function সেটাকে call করে
 * ✅ Flexible & reusable code বানাতে সাহায্য করে
 * ✅ Async programming এ গুরুত্বপূর্ণ
 ********************************************************************/


/********************************************************************
 * 1️⃣2️⃣ Interview Short Answer
 *
 * "A callback function is a function that is passed
 * as an argument to another function and executed later."
 ********************************************************************/

console.log("=== END OF CALLBACK PRACTICE FILE ===");