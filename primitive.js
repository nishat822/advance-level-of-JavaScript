// যদি কোনো ভ্যারিয়েবলের ডাটা টাইপ জানতে চাও তাহলে typeof ব্যবহার করতে হয়
let data = 4;
console.log(typeof data); 
// এখানে 4 একটি number, তাই output হবে: "number"



// এখন আমরা একটি ভ্যারিয়েবলের ভ্যালু বারবার পরিবর্তন করছি
let data1 = 4;          // প্রথমে data1 এর মান number (4)

data1 = 'mango';        // এখন data1 এর মান string হয়ে গেছে
data1 = true;           // এখন data1 এর মান boolean হয়ে গেছে
data1 = { price: 100 }; // এখন data1 একটি object হয়ে গেছে
data1 = [1, 2, 5, 6];   // এখন data1 একটি array (array ও object টাইপের অন্তর্ভুক্ত)

console.log(typeof data1); 
// শেষ যেই মান দেওয়া হয়েছে ([1,2,5,6]) সেটার টাইপ দেখাবে
// output হবে: "object" (কারণ JavaScript এ array এর টাইপও object)



// ================= Primitive Data Types =================
// Primitive মানে হলো সাধারণ/বেসিক ডাটা টাইপ

let a = 4;          // number টাইপ
let d = 'nishat';   // string টাইপ
let f = false;      // boolean টাইপ



// ================= Non-Primitive Data Types =================
// Non-Primitive মানে হলো জটিল বা reference টাইপ ডাটা

let b = { price: 100 };      // object টাইপ
let c = [112, 2, 2, 15];     // array টাইপ (এটাও object এর ভিতরে পড়ে)