// const arr = [65, 1, 2, 45, 3, 4, 5];

// const sum = arr.reduce(function (prev, curr, index, array) {
//   return prev + curr;
// }, 100);

// const max = arr.reduce((prev, curr) => {
//   return Math.max(prev, curr);
// }, 0);

// console.log(sum);
// console.log(max);

// const arr = [65, 1, 2, 45, 3, 4, 5];

// function myReduce(arr, cb, acc) {
//   for (let i = 0; i < arr.length; i++) {
//     acc = cb(acc, arr[i]);
//   }
//   return acc;
// }

// const sum = myReduce(
//   arr,
//   function (prev, curr) {
//     return prev + curr;
//   },
//   0
// );

// const max = myReduce(
//   arr,
//   function (prev, curr) {
//     return Math.max(prev, curr);
//   },
//   0
// );
// const min = myReduce(
//   arr,
//   function (prev, curr) {
//     return Math.min(prev, curr);
//   },
//   arr[0]
// );

// console.log(sum);
// console.log(max);
// console.log(min);

// const cart = [
//   {
//     naem: "shirt",
//     price: 25,
//   },
//   {
//     naem: "shirt",
//     price: 57,
//   },
//   {
//     naem: "shirt",
//     price: 85,
//   },
//   {
//     naem: "shirt",
//     price: 236,
//   },
// ];

// const totalPrice = cart.reduce(function (prev, curr) {
//   return prev + curr.price;
// }, 0);

// console.log(totalPrice);

// const arr = [1, 2, 3, 4, 5, 55];

// function myReduce(arr, cb, acc) {
//   for (let i = 0; i < arr.length; i++) {
//     acc = cb(acc, arr[i]);
//   }
//   return acc;
// }

// const sum = myReduce(
//   arr,
//   function (prev, curr) {
//     return prev + curr;
//   },
//   0
// );

// const max = myReduce(
//   arr,
//   function (acc, curr) {
//     return Math.max(acc, curr);
//   },
//   arr[0]
// );

// const min = myReduce(
//   arr,
//   function (acc, curr) {
//     return Math.min(acc, curr);
//   },
//   arr[0]
// );

// console.log(sum);
// console.log(min);
// console.log(max);

// const products = [
//   { name: "Pen", ammount: 5, price: 10 },
//   { name: "Pen", ammount: 5, price: 10 },
//   { name: "Pen", ammount: 10, price: 12 },
//   { name: "Pen", ammount: 3, price: 15 },
//   { name: "Pen", ammount: 4, price: 7 },
// ];

// const totalPrice = products.reduce((acc, currItem) => {
//   return (acc = acc + currItem.ammount * currItem.price);
// }, 0);

// console.log(totalPrice);

const products = [
  { name: "Pen", ammount: 5, price: 10, discount: 0 },
  { name: "Notepad", ammount: 5, price: 10, discount: 10 },
  { name: "Book", ammount: 10, price: 12, discount: 20 },
  { name: "chocklet", ammount: 3, price: 15, discount: 5 },
  { name: "Bisket", ammount: 4, price: 7, discount: 0 },
];

const totalPrice = products.reduce((acc, currentValue) => {
  const discountRate = currentValue.discount || 0;

  const itemTotal =
    currentValue.ammount * currentValue.price * (1 - discountRate / 100);
  return acc + itemTotal;
}, 0);

console.log(totalPrice);
