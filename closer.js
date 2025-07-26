//!  Closure First Look in Javascript | JS All You Need To Know | JS Bangla Tutorials

//? First look at closer

// let b = 10;

// function a() {
//   let c = 20;

//   return function () {
//     console.log(c);
//   };
// }

// a()();

// const abc = a();

// console.dir(abc);

// function outer() {
//   let b = 10;

//   function inner() {
//     console.log(b);
//   }

//   return inner;
// }

// 1. outer() → call হলে ভিতরের inner function তৈরি হয়
// 2. outer() → inner function কে return করে
// 3. inner → মনে রাখে outer এর b মানে 10

// 👇 এই কারণে:
// ✅ inner function == Closure (because it remembers its outer scope)

//             ┌────────────┐
//             │  Global    │
//             │  Scope     │
//             └────┬───────┘
//                  │
//         ┌────────▼─────────┐
//         │   outer() call   │
//         │   b = 10         │
//         └────┬─────────────┘
//              │
//      ┌───────▼────────┐
//      │  inner()       │ ← remembers b from outer scope
//      │  console.log(b)│
//      └────────────────┘

// ✅ Practical Example 1: Counter with Closure

// function careateCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = careateCounter();
// counter() // 1
// counter() // 2
// counter() // 3

// ✅ Practical Example 2: outer()();

// function sayHello(name) {
//   return function () {
//     console.log("Hello, " + name);
//   };
// }

// sayHello("Arafat")(); // Output: Hello, Arafat
// 👉 sayHello("Arafat") return করছে একটা ফাংশন (closure), যেটা মনে রাখছে name = "Arafat"।

//! Closer Mini Porject

// function careateVisitorCountor() {
//   let count = 0;

//   return {
//     increment: function () {
//       count++;
//     },
//     getCount: function () {
//       return count;
//     },
//     resetCount: function () {
//       count = 0;
//       return count;
//     },
//   };
// }

// const counter = careateVisitorCountor();
// counter.increment(); //1
// counter.increment(); //2
// counter.increment(); //3
// counter.increment(); //4
// console.log("Toal visitors:", counter.getCount()); // output:
// counter.resetCount(); // Counter reset
// console.log("total visitors", counter.getCount()); // output : 0

// // ! Debounce Function Generator

// function createDebouncedFunction(originalFunc, delay) {
//   let timer = null;

//   return function () {
//     if (timer) {
//       clearTimeout(timer);
//     }

//     timer = setTimeout(() => {
//       originalFunc(...arguments);
//     }, delay);
//   };
// }

// const debouncedSearch = createDebouncedFunction(searchHandler, 1000);

// debouncedSearch("h"); //? no exicute
// debouncedSearch("he"); //? no exicute
// debouncedSearch("hel"); //? no exicute
// debouncedSearch("hell"); //? no exicute
// debouncedSearch("hello"); //!  exicute

// function searchHandler(query) {
//   console.log("Search for", query);
// }

//! ✅ সংক্ষেপে: Debounce function-এর মূল কাজ হলো: 👉 যখন কোনো ফাংশন বারবার কল হয়, তখন সেটা শুধু শেষবার কল হওয়া ফাংশনটিকেই নির্দিষ্ট সময় পরে এক্সিকিউট করে, আগেরগুলো বাতিল করে দেয়।

//? 🎯 মূল উদ্দেশ্য: Unnecessary বা বারবার event trigger কে নিয়ন্ত্রণ করা।

// | 🧪 অবস্থান          | সমস্যা                          | Debounce দিয়ে সমাধান                          |
// | ----------------- | ------------------------------- | --------------------------------------------- |
// | 🔍 Search Box     | প্রতিটি টাইপে API কল হয়         | শেষ টাইপিংয়ের পর ১ সেকেন্ড অপেক্ষা করে API কল |
// | 📏 Window Resize  | প্রতি resize-এ layout update হয় | শেষ resize-এর পরে layout update করে           |
// | 🖱️ Scroll Event    | প্রতি স্ক্রলে function চালে     | শুধু শেষ scroll থেমে গেলে চালাও               |
// | 📩 Auto Save Form | প্রতি কী-প্রেসে save হয়         | শেষ ইনপুটের পরে save করো                      |

// debouncedSearch("H");
// debouncedSearch("He");
// debouncedSearch("Hel");
// debouncedSearch("Hell");
// debouncedSearch("Hello");

//! ...args কী করে?
//? ...args হচ্ছে Rest Parameter Syntax, যা JavaScript এ ব্যবহার হয় একটি ফাংশনে একাধিক আর্গুমেন্টকে একত্রে একটি array-র মতো সংগ্রহ করার জন্য

// function exampleFunction(...args) {
//   console.log(args);
// }
// exampleFunction(1, 2, 3, 4, 5, 6, "hello");

//! 🎯 Custom Timer with Start / Pause / Reset

// function createTimer() {
//   let time = 0;
//   let interValId = null;

//   return {
//     start: function () {
//       if (interValId) {
//         console.log("Timer Already running...");
//         return;
//       }

//       interValId = setInterval(() => {
//         time++;
//         console.log("Time : ", time, "seconds");
//       }, 1000);
//     },
//     pause: function () {
//       if (!interValId) {
//         console.log("Timer is not running");
//         return;
//       }
//       clearInterval(interValId);
//       interValId = null;
//       console.log("Timer Paused.");
//     },

//     getTime: function () {
//       return time;
//     },
//     reset: function () {
//       clearInterval(interValId);
//       interValId = null;
//       time = 0;
//     },
//   };
// }

// createTimer();

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }

//! for loop with closer 
for (let i = 1; i <= 5; i++) {
  (function (n) {
    setTimeout(() => {
      console.log(n);
    }, 1000 * n);
  })(i);
}
