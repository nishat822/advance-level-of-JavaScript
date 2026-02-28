/********************************************************************
 *             JAVASCRIPT ARRAY POWER METHOD: find()
 *             Beginner → Expert
 *             বাংলা কমেন্ট সহ
 ********************************************************************/


/********************************************************************
 * 1️⃣ find() কী?
 *
 * 👉 find() Array এর প্রতিটি element এর জন্য একটি function run করে
 * 👉 function true return করলে, find() সেই element return করে
 * 👉 শুধুমাত্র **প্রথম match** element return হয়
 * 👉 যদি কোনো element match না করে → undefined return করে
 * 👉 original array modify হয় না
 ********************************************************************/


/********************************************************************
 * 2️⃣ Example: Find first student older than 30
 ********************************************************************/

const students = [
    { name: 'Tormuj', age: 22 }, 
    { name: 'Zaved', age: 31 },
    { name: 'Naved', age: 23 },
    { name: 'Khaled', age: 20 },
    { name: 'Sajed', age: 34 },
    { name: 'Nahid', age: 22 },
    { name: 'Nasib', age: 31 }
];

// Find first student whose age > 30
const olderStudent = students.find(student => student.age > 30);

console.log("First student older than 30:", olderStudent);

/*
Output:
{ name: 'Zaved', age: 31 }

কারণ find() শুধু প্রথম match element return করে
*/



/********************************************************************
 * 3️⃣ Find with string condition
 ********************************************************************/

const friends = ['alim','kalim','slama','beli','mudi'];

// Find first friend whose name starts with 's'
const sFriend = friends.find(friend => friend[0] === 's');

console.log("First friend starting with 's':", sFriend);


/********************************************************************
 * 4️⃣ Find index of element
 *
 * 👉 যদি element এর index প্রয়োজন → findIndex()
 ********************************************************************/

const sFriendIndex = friends.findIndex(friend => friend[0] === 's');

console.log("Index of first friend starting with 's':", sFriendIndex);


/********************************************************************
 * 5️⃣ Important Notes
 *
 * ✅ find() → returns **first matching element**
 * ✅ findIndex() → returns **index of first matching element**
 * ✅ filter() → returns **all matching elements** (array)
 * ✅ find() does **not create new array**, শুধু element return করে
 ********************************************************************/


/********************************************************************
 * 6️⃣ Short Interview Answer
 *
 * "find() returns the first element in an array that satisfies
 * a condition specified in a callback function."
 ********************************************************************/


/********************************************************************
 * FINAL SUMMARY
 *
 * find() → first matching element
 * filter() → all matching elements (new array)
 * findIndex() → index of first matching element
 ********************************************************************/

//console.log("=== END OF FIND METHOD PRACTICE FILE ===");