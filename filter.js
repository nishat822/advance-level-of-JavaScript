/********************************************************************
 *             JAVASCRIPT ARRAY POWER METHOD: filter()
 *             Beginner → Expert
 *             বাংলা কমেন্ট সহ
 ********************************************************************/


/********************************************************************
 * 1️⃣ filter() কী?
 *
 * 👉 filter() Array এর সব element এর জন্য একটি function run করে
 * 👉 function true return করলে element নতুন array তে add হয়
 * 👉 false হলে skip করে
 * 👉 original array modify হয় না
 ********************************************************************/


/********************************************************************
 * 2️⃣ Filter Even Numbers
 ********************************************************************/

const numbers = [1, 2, 3, 6, 54, 49, 8, 2, 2, 6, 289, 278, 2];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);


/********************************************************************
 * 3️⃣ Filter Odd Numbers
 ********************************************************************/

const oddNumbers = numbers.filter(num => num % 2 === 1);

console.log("Odd Numbers:", oddNumbers);


/********************************************************************
 * 4️⃣ Filter Strings (names start with 'a')
 ********************************************************************/

const friends = ['javed','akbor','ali','husain','salam','sofiq','asad','jaber'];

const aFriends = friends.filter(fri => fri[0] === 'a');

console.log("Friends starting with 'a':", aFriends);


/********************************************************************
 * 5️⃣ Filter Objects (students older than 30)
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

const olderStudents = students.filter(student => student.age > 30);

console.log("Students older than 30:", olderStudents);


/********************************************************************
 * 6️⃣ Filter with multiple conditions
 ********************************************************************/

// Example: age > 22 and name starts with 'N'
const filteredStudents = students.filter(student => student.age > 22 && student.name[0] === 'N');

console.log("Filtered Students:", filteredStudents);


/********************************************************************
 * 7️⃣ Key Points
 *
 * ✅ filter() always returns a new array
 * ✅ original array stays the same
 * ✅ callback function should return true/false
 * ✅ suitable for numbers, strings, objects
 ********************************************************************/


/********************************************************************
 * 8️⃣ Short Interview Answer
 *
 * "filter() creates a new array with elements that pass a test
 * provided by a callback function."
 ********************************************************************/


/********************************************************************
 * 9️⃣ Summary Table
 *
 * Method    | Return          | Use Case
 * --------- | --------------- | -------------------------
 * filter    | New array       | Condition matching elements
 ********************************************************************/

console.log("=== END OF FILTER PRACTICE FILE ===");