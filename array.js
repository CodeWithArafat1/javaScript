//? *************** What is Array **********

// ! Array is a Data Stucture where we can organize multiple data under a single variable

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let length = 0;

// for (;;) {
//   if (data[length] === undefined) {
//     break;
//   } else {
//     length++;
//   }
// }
// console.log(length);
// const arr = Array(1,3,4,5)

//! JS Array Traversing | JS All You Need to Know | JS Bangla Tutorials

// const data = [3, 5, 32, 6, 4, 12, 6];

// for (let i = 0; i <= data.length - 1; i++) {
//   console.log(data[i]);
//    data[i] = data[i] +  2;
//   data[i] += 2;
// }

// console.log(data);

// let sum = 0;

// for (let i = 0; i <= data.length - 1; i++) {
//   sum += data[i];
//   sum = sum + data[i];
// }

// console.log(sum);

//! Array Insert Remove and Replace | JS All You Need to Know | JS Bangla Tutorials

// const data = [3, 5, 32, 6, 4, 12, 6];

// data.splice(2, 1, [10, 23, 32, 54]);

// data.slice(1, -1);
// console.log(data);

// var arr = [1, 10, 3, 2, 8, 7, 9, 11, 72, 78];
// var i;
// var pos = 0;
// for (i = pos - 1; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }

// for (i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i]);
// }

//! JS Search Value in Array | JS All You Need to Know | JS Bangla Tutorials

// const arr = [13, 54, 2, 5, 456, 23, 456, 32, 73, 10];

// const find = 13;
// let isFound = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === find) {
//     console.log("Data found at index", i);
//     isFound = true;
//     break;
//   }
// }

// if (!isFound) {
//   console.log("data not found");
// }

//! JS Reverse An Array | JS All You Need to Know | JS Bangla Tutorials

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length / 2; i++) {
//   const temp = arr[i];

//   arr[i] = arr[arr.length - 1 - i];
//   arr[arr.length - 1 - i] = temp;
// }
// console.log(arr);

//! JS Array Methods | JS All You Need to Know | JS Bangla Tutorials

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.join(" \\ "));
