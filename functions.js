//! What is Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

//? what is function
//? Input Output Processing ai 3 ta jinish thake function a

// function functionName() {
//   console.log("I am function");
// }
// functionName();

// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 20));

// function somthing(count) {
//   for (let i = 1; i <= count; i++) {
//     let result = "";
//     for (let j = 1; j <= i; j++) {
//       result += "* ";
//     }

//     console.log(result);
//   }
// }

// somthing(10);
// somthing(5);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 10, 5];

// function sum(item) {
//   let result = 0;

//   for (let i = 0; i <= item.length; i++) {
//     result += item[i];
//   }
//   console.log(result);
// }

// sum(arr2);

// function test(a, b, c) {
//   console.log(arguments); //? arguments মানে হলো function-এর ভিতরে পাঠানো সব arguments-এর একটা array-like object।

//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// test(10, 20, 30);

// function addAll() {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   console.log(sum);
// }
// //! argiments use korbo jokhun janbo na user koto ta input dibe
// addAll(12, 14, 53, 56, 67, 12, 90);

//! Return Something from a Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

// function addAll() {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum; //? restun use kora hoi kono variable a data store korar jonno
// }

// const a = addAll(1, 3, 5);
// console.log(a);

// function person(name, email) {
//   return { //? retrun anything
//     name: name,
//     email: email,
//   };
// }

// console.log(person("Arafat Nill", "arafat@gmail.com"));

// const addition = function (a, b) {
//   return a + b;
// };

// setTimeout(function () {
//   console.log(addition(1, 20));
// }, 5000);

// const another = addition;

// console.log(another(10, 20));

//!  Inner Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

// function something(greet, name) {
//   function getFirstName() {
//     //? say hi function use full name
//     function sayHi() {
//       console.log(greet, name);
//     }
//     sayHi();

//     //?  use just first name
//     if (name) {
//       return name.split(" ")[0];
//     } else {
//       return "";
//     }
//   }

//   const massage = greet + " " + getFirstName();

//   console.log(massage);
// }

// something("Hi", "Arafat Nill");

//! Function Scoping in Javascript | JS All You Need To Know | JS Bangla Tutorials

// function test(n) {
//   function a() {
//     return n % 3 === 0;
//   }

//   function b() {
//     return n % 3 === 0;
//   }

//   if (a() && b()) {
//     console.log("Divide by both numbers");
//   } else {
//     console.log("Not a valid Number!");
//   }
// }

// test(15);
