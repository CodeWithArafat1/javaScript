//! map original array k change kore na she ekta notun array k retrun kore

// const arr = [1, 2, 3, 4, 5];

// const newArray = arr.map((value, index, arrs) => {
//   //   return Math.floor(Math.random() * 100);
//   return value * value;
// });
// console.log(newArray);

// console.log(arr);

// function myMap(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i] * arr[i];
//     newArray.push(temp);
//   }
//   return newArray;
// }

//! manual map funtion crate

// function myMap(arr, cb) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     let temp = cb(arr[i], i, arr);
//     newArray.push(temp);
//   }
//   return newArray;
// }

// console.log(myMap(arr));

// const qb = myMap(arr, (value) => {
//   return value * value * value;
// });

// const mten = myMap(arr, (value) => {
//   return value * value;
// });

// console.log(qb);
// console.log(mten);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];

// const newArray = function myMap(arr, cb) {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     const newrArr = cb(arr[i], i, arr);

//     temp.push(newrArr);
//   }

//   return temp;
// };

// console.log(
//   newArray(arr, function (value) {
//     return value * value;
//   })
// );

// console.log(arr);

// function myForEach(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr);
//   }
// }

// let sum = 0;

// myForEach(arr, function (value) {
//   return (sum += value);
// });

// console.log(sum);
// console.log(arr);
