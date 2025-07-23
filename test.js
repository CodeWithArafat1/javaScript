// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce(func,0);

// function func(acc, currentValue, currentIndex, sourceArray) {
//   return acc + currentValue;
// }

// console.log(sum);

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
//   0
// );
// const min = myReduce(
//   arr,
//   function (acc, curr) {
//     return Math.min(acc, curr);
//   },
//   arr[0]
// );

// console.log(min);
// console.log(max);
// console.log(sum);

const products = [
  { name: "Pen", ammount: 5, price: 10 },
  { name: "Pen", ammount: 5, price: 10 },
  { name: "Pen", ammount: 10, price: 12 },
  { name: "Pen", ammount: 3, price: 15 },
  { name: "Pen", ammount: 4, price: 7 },
];

const totalPrice = products.reduce((acc, currItem) => {
  return (acc = acc + currItem.ammount * currItem.price);
}, 0);

console.log(totalPrice);
