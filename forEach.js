//! forEach change main array

const arr = [1, 2, 3, 4, 5];

// let sum = 0;

// arr.forEach((value) => {
//   return (sum += value);
// });

// console.log(sum);

//! manual forEach funtion crate
function manualForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

let sum = 0;
manualForEach(arr, (value) => {
  sum += value;
});
console.log(sum);

manualForEach(arr, function (value, i, arr) {
  arr[i] = value + 5;
});
console.log(arr);

