/******************************************************************
    JAVASCRIPT SCOPE, HOISTING & TDZ FULL PRACTICE FILE
    বাংলা কমেন্টসহ Beginner → Advanced
******************************************************************/

/*********************** 1️⃣ GLOBAL SCOPE ************************/

// Global variable (পুরো file জুড়ে access করা যাবে)
let globalVar = 10;

function showGlobal() {
    // function এর ভিতর থেকেও global variable access করা যায়
    console.log("Global inside function:", globalVar);
}

showGlobal();

// function এর বাইরে থেকেও access করা যায়
console.log("Global outside function:", globalVar);


/*********************** 2️⃣ FUNCTION SCOPE ************************/

function testFunctionScope() {
    let insideVar = 50; // শুধু এই function এর ভিতরে থাকবে
    console.log("Inside function:", insideVar);
}

testFunctionScope();

// নিচের লাইনটি uncomment করলে error হবে
// console.log(insideVar);
// কারণ function এর বাইরে এটা নেই


/*********************** 3️⃣ BLOCK SCOPE ************************/

if (true) {
    let blockLet = 100;     // block scope
    const blockConst = 200; // block scope
    var blockVar = 300;     // block scope মানে না

    console.log("Inside block:", blockLet);
}

// console.log(blockLet); ❌ ERROR
// console.log(blockConst); ❌ ERROR

// কিন্তু var বাইরে থেকেও access করা যায়
console.log("Var outside block:", blockVar);


/*********************** 4️⃣ NESTED FUNCTION & LEXICAL SCOPE ************************/

function parentFunction() {
    let parentVar = "I am parent";

    function childFunction() {
        // child parent এর variable access করতে পারে
        console.log(parentVar);
    }

    childFunction();
}

parentFunction();

// childFunction(); ❌ ERROR
// কারণ child function শুধু parent এর ভিতরে আছে


/*********************** 5️⃣ VAR HOISTING ************************/

console.log("Var hoisting:", x); // undefined (error না)

var x = 5;

// JavaScript internally এমন ভাবে করে:
// var x;
// console.log(x);
// x = 5;


/*********************** 6️⃣ LET & CONST (TDZ) ************************/

// নিচের লাইন uncomment করলে error হবে
// console.log(a); ❌ ReferenceError

let a = 10;
console.log("Let after declare:", a);


// TDZ Example
{
    // এখানে TDZ শুরু

    // console.log(price); ❌ ERROR

    let price = 100;
    console.log("Price:", price);
}


/*********************** 7️⃣ FUNCTION HOISTING ************************/

sayHello(); // আগে call করলেও কাজ করবে

function sayHello() {
    console.log("Hello World");
}


/*********************** 8️⃣ FUNCTION EXPRESSION HOISTING ************************/

// greet(); ❌ ERROR

var greet = function() {
    console.log("Hi there!");
};

greet();

// কারণ function expression পুরোটা hoist হয় না
// শুধু var greet; অংশটা hoist হয়


/*********************** 9️⃣ VAR vs LET DIFFERENCE ************************/

function varVsLet() {

    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
    }

    console.log(varVariable); // কাজ করবে

    // console.log(letVariable); ❌ ERROR
}

varVsLet();


/*********************** 🔟 REDECLARATION DIFFERENCE ************************/

var num = 10;
var num = 20; // ✅ allowed

// let number = 10;
// let number = 20; ❌ ERROR

console.log("Redeclare var:", num);


/*********************** 1️⃣1️⃣ CONST RULE ************************/

const pi = 3.14;

// pi = 3.1416; ❌ ERROR (reassign করা যাবে না)

console.log("Const value:", pi);


/******************************************************************
    SUMMARY (মনে রাখার জন্য)
******************************************************************/

/*
1. Global Scope → সব জায়গায় access করা যায়
2. Function Scope → শুধু function এর ভিতরে
3. Block Scope → let & const শুধু block এর ভিতরে
4. var block মানে না
5. Hoisting → declaration উপরে উঠে যায়
6. var → undefined দেয়
7. let/const → TDZ এর কারণে error দেয়
8. Function declaration → পুরোটা hoist হয়
9. Function expression → hoist হয় না
*/