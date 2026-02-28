// prevailing method of calling array

const numbers=[1,2,3,6,5,4,9,8,7]
const doubled=[];
for(const num of numbers){
    doubled.push(num*2);// there we multi the values by 2 and push it to original value 
}
console.log(doubled)

// we can do it through 2 line 
const numbers1=[1,2,3,6,5,4,9,8,7]
const doubledIt=num=>num*2;
const doubled1=numbers1.map(doubledIt);
console.log(doubledIt)

// we can also do it through one line 
const numbers2=[1,2,3,6,5,4,9,8,7]
const doubled2=numbers2.map(num=>num*2);
console.log(doubled2)

/********************************************************************
 *                 JAVASCRIPT ARRAY POWER METHODS
 *                 map() এবং forEach() (Beginner → Expert)
 *                 বাংলা কমেন্ট সহ
 ********************************************************************/


/********************************************************************
 * 1️⃣ for loop vs forEach
 *
 * আগের মতো আমরা loop ব্যবহার করতাম
 ********************************************************************/

const numbers5 = [1, 2, 3, 6, 5, 4, 9, 8, 7];
const doubled5 = [];

for (const num of numbers5) {
    doubled.push(num * 2); // multiply করে push
}

console.log("Doubled using for loop:", doubled5);


/********************************************************************
 * 2️⃣ forEach
 *
 * 👉 forEach = Array এর সব element এর জন্য একটি function run করে
 * 👉 return value থাকে না
 ********************************************************************/

numbers.forEach(function(num) {
    console.log("forEach element:", num);
});

// Arrow Function version
numbers.forEach(num => console.log("Arrow forEach:", num));

/*
Important:
forEach element process করে কিন্তু একটি নতুন array return করে না
*/



/********************************************************************
 * 3️⃣ map
 *
 * 👉 map = Array এর সব element এর জন্য একটি function run করে
 * 👉 function এর return value দিয়ে নতুন array তৈরি করে
 ********************************************************************/

const doubledMap = numbers.map(function(num) {
    return num * 2;
});

console.log("Doubled using map:", doubledMap);

// Arrow function short version
const doubledMapArrow = numbers.map(num => num * 2);
console.log("Doubled using map arrow:", doubledMapArrow);


/********************************************************************
 * 4️⃣ map দিয়ে string, multiply, divide সব করা যায়
 ********************************************************************/

const friends = ['alim', 'kalim', 'slama', 'beli', 'mudi'];

// শুধু প্রথম letter নিতে চাইলে
const firstLetters = friends.map(fri => fri[0]);
console.log("First letters:", firstLetters);


/********************************************************************
 * 5️⃣ map with object array
 ********************************************************************/

const products = [
    { name: 'laptop', price: 400 },
    { name: 'phone', price: 40 },
    { name: 'pc', price: 4000 }
];

// শুধু price বের করা
const prices = products.map(p => p.price);
console.log("Prices:", prices);

// price multiply করা
const doubledPrices = products.map(p => p.price * 2);
console.log("Doubled Prices:", doubledPrices);

// name uppercase করা
const namesUpper = products.map(p => p.name.toUpperCase());
console.log("Names Uppercase:", namesUpper);

// index, lowercase সব combination
const namesWithIndex = products.map((p, index, arr) => {
    return `Index ${index}: ${p.name.toLowerCase()} (Array Length: ${arr.length})`;
});
console.log("Names with index:", namesWithIndex);


/********************************************************************
 * 6️⃣ Difference Between map and forEach
 ********************************************************************/

/*
forEach:
✅ element access করতে use
❌ কোনো value return করে না
❌ original array modify করতে হয় explicitly

map:
✅ element access + modify করতে use
✅ নতুন array return করে
✅ immutable programming friendly
*/



/********************************************************************
 * 7️⃣ Multi-line map example
 ********************************************************************/

const newArray = products.map(p => {
    const discounted = p.price * 0.9;
    const upperName = p.name.toUpperCase();
    return { productName: upperName, discountedPrice: discounted };
});

//console.log("Multi-line map result:", newArray);


/********************************************************************
 * 🔥 Interview Short Answer
 *
 * forEach → process each element, no return
 * map → process each element, return new array
 ********************************************************************/


/********************************************************************
 * FINAL SUMMARY
 *
 * ✅ for loop → traditional
 * ✅ forEach → modern, no return
 * ✅ map → modern, return new array
 * ✅ map versatile: numbers, string, objects, calculations
 ********************************************************************/

//console.log("=== END OF ARRAY POWER METHODS FILE ===");