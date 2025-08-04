// const person = {
//   name: "Arafat Nill",
//   email: "arafat@gmail.com",

//   address: {
//     city: "Rajshahi",
//     cuntry: "bangladesh",
//   },
// };

// let {
//   name,
//   email,
//   address: { city, cuntry },
// } = person;
// console.log(cuntry);

// const myObj = {
//   name: "Arafat Nill",

//   address: {
//     city: "Rajshahi",
//     cuntry: "Bangladesh",

//     contact: {
//       email: "arafat@gmail.com",

//       phone: {
//         phn1: 928428493,
//         phn2: 294824393,
//       },
//     },
//   },
// };

// const {
//   name,
//   address: {
//     city,
//     cuntry,
//     contact: {
//       email,
//       phone: { phn1, phn2 },
//     },
//   },
// } = myObj;

// console.log(phn2);

const obj = {
  a: 10,
  b: 20,
};

console.log(Object.entries(obj));

const objArr = [
  ["a", 10],
  ["b", 20],
];

console.log(Object.fromEntries(objArr))