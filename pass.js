/********************************************************************
 *     PASS BY VALUE vs PASS BY REFERENCE
 *     + FUNCTION ARGUMENTS (BEGINNER → CLEAR)
 *     বাংলা কমেন্ট সহ সম্পূর্ণ ব্যাখ্যা
 ********************************************************************/


/********************************************************************
 * 1️⃣ Pass By Value কী?
 *
 * 👉 যখন variable এর আসল value এর কপি পাঠানো হয়
 * 👉 মূল variable পরিবর্তন হয় না
 *
 * 👉 Primitive Type এ এটা হয়
 * (number, string, boolean, null, undefined, bigint, symbol)
 ********************************************************************/

let num = 10;

function changeValue(x) {
    x = 50;  // শুধু কপি পরিবর্তন হচ্ছে
    console.log("Inside function:", x);
}

changeValue(num);

console.log("Outside function:", num);
// Output:
// Inside function: 50
// Outside function: 10

/*
কারণ:
num এর কপি function এ গেছে
আসল num পরিবর্তন হয়নি
এটাই Pass By Value
*/



/********************************************************************
 * 2️⃣ Pass By Reference কী?
 *
 * 👉 যখন object/array এর memory address পাঠানো হয়
 * 👉 আসল data পরিবর্তন হতে পারে
 *
 * 👉 Reference Type এ এটা হয়
 * (Object, Array, Function)
 ********************************************************************/

let user = {
    name: "Nishat"
};

function changeObject(obj) {
    obj.name = "Rahim"; // আসল object পরিবর্তন হচ্ছে
}

changeObject(user);

console.log("Updated user:", user);
// Output:
// { name: "Rahim" }

/*
কারণ:
object এর reference গেছে
তাই আসল object পরিবর্তন হয়েছে
এটাই Pass By Reference
*/



/********************************************************************
 * 3️⃣ Array Example
 ********************************************************************/

let numbers = [1, 2, 3];

function modifyArray(arr) {
    arr.push(4); // আসল array তে যোগ হচ্ছে
}

modifyArray(numbers);

console.log("Modified array:", numbers);
// [1, 2, 3, 4]



/********************************************************************
 * 4️⃣ Important Trick Question
 ********************************************************************/

let person = { name: "Karim" };

function test(obj) {
    obj = { name: "New Name" };
}

test(person);

console.log(person);

/*
Output:
{ name: "Karim" }

কেন?

কারণ এখানে নতুন object বানানো হয়েছে।
reference কপি হয়েছে, আসলটা replace হয়নি।
*/



/********************************************************************
 * 5️⃣ Function Arguments কী?
 *
 * 👉 function call করার সময় যে value পাঠাই
 * তাকে argument বলে
 *
 * 👉 function define করার সময় যে variable লিখি
 * তাকে parameter বলে
 ********************************************************************/

function add(a, b) {  // a,b = parameter
    return a + b;
}

console.log(add(5, 3)); // 5,3 = argument



/********************************************************************
 * 6️⃣ Default Parameter
 ********************************************************************/

function greet(name = "Guest") {
    console.log("Hello", name);
}

greet("Nishat");
greet(); // default value ব্যবহার হবে



/********************************************************************
 * 7️⃣ Rest Parameter (...args)
 *
 * 👉 unlimited argument নিতে ব্যবহার হয়
 ********************************************************************/

function sumAll(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sumAll(1, 2, 3, 4, 5));



/********************************************************************
 * 8️⃣ Arguments Object (Old Way)
 ********************************************************************/

function oldWay() {
    console.log(arguments);
}

oldWay(1, 2, 3);

/*
arguments হলো array-like object
ES6 এর পরে rest parameter বেশি ব্যবহার হয়
*/



/********************************************************************
 * 9️⃣ Primitive vs Reference Summary
 ********************************************************************/

/*
Primitive → Pass By Value
Number
String
Boolean
Null
Undefined
BigInt
Symbol

Reference → Pass By Reference
Object
Array
Function
*/



/********************************************************************
 * 🔟 Interview Short Answer
 *
 * Pass by value:
 * "A copy of the value is passed to the function."
 *
 * Pass by reference:
 * "The reference (memory address) of the object is passed."
 ********************************************************************/


/********************************************************************
 * FINAL SUMMARY
 *
 * ✅ Primitive → Copy যায়
 * ✅ Object/Array → Reference যায়
 * ✅ Parameter ≠ Argument
 * ✅ Rest parameter modern way
 ********************************************************************/

console.log("=== END OF PASS BY FILE ===");