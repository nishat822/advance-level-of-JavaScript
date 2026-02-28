/********************************************************************
 *                 JAVASCRIPT CLOSURE (BEGINNER FRIENDLY)
 *                 বাংলা কমেন্ট সহ সম্পূর্ণ ব্যাখ্যা
 ********************************************************************/


/********************************************************************
 * 1️⃣ Closure কী?
 *
 * 👉 সহজ ভাষায়:
 * একটি function যদি তার parent function এর variable
 * মনে রাখতে পারে, even parent শেষ হয়ে যাওয়ার পরও —
 * তখন সেটাই Closure।
 ********************************************************************/


/********************************************************************
 * 2️⃣ Normal Function Example (Closure ছাড়া)
 ********************************************************************/

function normalExample() {
    let number = 10;  // এই variable শুধু এই function এর ভিতরে থাকবে
    console.log("Inside function:", number);
}

normalExample();

// console.log(number);
// ❌ Error হবে
// কারণ function শেষ হয়ে গেলে variable delete হয়ে যায়



/********************************************************************
 * 3️⃣ এখন Closure Example দেখো
 ********************************************************************/

function outerFunction() {
    let count = 0; // parent function এর variable

    function innerFunction() {
        // inner function parent এর variable ব্যবহার করছে
        count++;
        console.log("Count:", count);
    }

    return innerFunction; 
    // inner function return করছি
}

// outerFunction() call করছি
const myCounter = outerFunction();

/*
এখানে গুরুত্বপূর্ণ ব্যাপার:

outerFunction() run হয়েছে
count তৈরি হয়েছে
innerFunction return হয়েছে
outerFunction শেষ হয়েছে

কিন্তু count delete হয়নি ❗
কারণ innerFunction এখনো সেটা ব্যবহার করছে

এটাই Closure
*/

// এখন inner function call করছি
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3



/********************************************************************
 * 4️⃣ কেন variable delete হয়নি?
 *
 * কারণ inner function এখনো সেই variable ব্যবহার করছে।
 * JavaScript memory তে সেটাকে ধরে রাখে।
 *
 * এটাকে বলে:
 * "Function remembers its lexical environment"
 ********************************************************************/


/********************************************************************
 * 5️⃣ Real Life Example (Counter System)
 ********************************************************************/

function createCounter() {
    let count = 0; // private variable

    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2

/*
লক্ষ্য করো:

counter1 এবং counter2 আলাদা।
প্রতিটা আলাদা memory তৈরি করেছে।

এটাই Closure এর power।
*/



/********************************************************************
 * 6️⃣ Private Variable বানানো (Important)
 ********************************************************************/

function bankAccount(initialBalance) {
    let balance = initialBalance; // private

    return {
        deposit(amount) {
            balance += amount;
            console.log("Deposit done. Balance:", balance);
        },
        withdraw(amount) {
            balance -= amount;
            console.log("Withdraw done. Balance:", balance);
        }
    };
}

const account = bankAccount(1000);

account.deposit(500);   // 1500
account.withdraw(200);  // 1300

// console.log(balance);
// ❌ Error
// কারণ balance private হয়ে গেছে (Closure এর কারণে)



/********************************************************************
 * 7️⃣ Interview Trap (var vs let)
 ********************************************************************/

// ❌ Problem Example

for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log("Var loop:", i);
    }, 1000);
}

/*
Output হবে:
4
4
4

কারণ:
var block scope মানে না
সব function একই i ব্যবহার করছে
loop শেষে i = 4 হয়ে গেছে
*/


// ✅ Correct Way (let ব্যবহার করে)

for (let j = 1; j <= 3; j++) {
    setTimeout(function() {
        console.log("Let loop:", j);
    }, 1000);
}

/*
Output হবে:
1
2
3

কারণ:
let block scope মানে
প্রতিটা loop এ নতুন j তৈরি হয়
*/



/********************************************************************
 * 8️⃣ সবচেয়ে সহজ Definition মনে রাখার জন্য
 *
 * Closure =
 * Function + তার parent scope মনে রাখার ক্ষমতা
 ********************************************************************/


/********************************************************************
 * 9️⃣ Real Interview Answer (Short Version)
 *
 * "A closure is a function that remembers its outer lexical
 * environment even after the outer function has returned."
 ********************************************************************/


/********************************************************************
 * 🔟 Important Points
 *
 * ✅ Closure মানে variable বেঁচে থাকে
 * ✅ Data private করা যায়
 * ✅ Counter বানানো যায়
 * ✅ React, Node, Event handler এ ব্যবহার হয়
 * ✅ Memory leak হতে পারে ভুলভাবে ব্যবহার করলে
 ********************************************************************/


/********************************************************************
 * END OF FILE
 ********************************************************************/