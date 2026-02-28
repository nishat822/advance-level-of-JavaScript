/********************************************************************
 *             JAVASCRIPT ARRAY POWER METHOD: reduce()
 *             Beginner → Expert
 *             বাংলা কমেন্ট সহ
 ********************************************************************/


/********************************************************************
 * 1️⃣ reduce() কী?
 *
 * 👉 reduce() Array এর সব element কে একত্র করে একটি single value produce করে
 * 👉 callback function দুইটা argument নেয়:
 *      1. accumulator (আগের calculation এর result)
 *      2. currentValue (current element)
 * 👉 optional: initial value (accumulator এর starting value)
 * 👉 original array modify হয় না
 ********************************************************************/


/********************************************************************
 * 2️⃣ Example: Sum of numbers
 ********************************************************************/

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(acc, curr) {
    return acc + curr; // আগের result + current element
}, 0); // 0 = initial value

console.log("Sum of numbers:", sum);

/*
Step by step:
acc=0, curr=1 → acc+curr=1
acc=1, curr=2 → acc+curr=3
acc=3, curr=3 → acc+curr=6
acc=6, curr=4 → acc+curr=10
acc=10, curr=5 → acc+curr=15
Final result: 15
*/



/********************************************************************
 * 3️⃣ Reduce with multiplication
 ********************************************************************/

const product = numbers.reduce((acc, curr) => acc * curr, 1);

console.log("Product of numbers:", product);


/********************************************************************
 * 4️⃣ Reduce to find max value
 ********************************************************************/

const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);

console.log("Maximum number:", max);


/********************************************************************
 * 5️⃣ Reduce with objects (sum of ages)
 ********************************************************************/

const students = [
    { name: 'Tormuj', age: 22 }, 
    { name: 'Zaved', age: 31 },
    { name: 'Naved', age: 23 },
    { name: 'Khaled', age: 20 },
    { name: 'Sajed', age: 34 }
];

const totalAge = students.reduce((acc, student) => acc + student.age, 0);

console.log("Total age of students:", totalAge);


/********************************************************************
 * 6️⃣ Reduce to group objects by property
 ********************************************************************/

const groupedByAge = students.reduce((acc, student) => {
    if (!acc[student.age]) {
        acc[student.age] = [];
    }
    acc[student.age].push(student.name);
    return acc;
}, {}); // empty object as initial value

console.log("Students grouped by age:", groupedByAge);


/********************************************************************
 * 7️⃣ Important Notes
 *
 * ✅ reduce() always returns a single value
 * ✅ original array stays the same
 * ✅ initial value important for correct result
 * ✅ suitable for sum, multiply, max/min, object aggregation
 ********************************************************************/


/********************************************************************
 * 8️⃣ Short Interview Answer
 *
 * "reduce() executes a reducer function on each element of an array,
 * resulting in a single output value."
 ********************************************************************/


/********************************************************************
 * FINAL SUMMARY
 *
 * reduce() → single value (number, string, object)
 * filter() → all matching elements (array)
 * map() → element transformation (new array)
 ********************************************************************/

console.log("=== END OF REDUCE METHOD PRACTICE FILE ===");