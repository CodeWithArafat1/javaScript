//! filter always retrun true and false
// const arr = [4, 4, 7, 8, 4, 7, 3, 2, 9, 3, 5];

// const newArr = arr.filter((value, i, arr) => {
//   return value % 2 === 0;
// });

// console.log(newArr);

//? emon kore define korle amader bar bar function change kora lagbe aita dinamic way nah
// function myFilter(arr) {
//   const newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
// console.log(myFilter(arr));

//? this is dinamic way

const arr = [4, 4, 7, 8, 4, 7, 3, 2, 9, 3, 5];

function myFilter(arr, cb) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(
  myFilter(arr, function (value) {
    return value > 4;
  })
);
console.log(
  myFilter(arr, function (value) {
    return value % 2 === 0;
  })
);
console.log(
  myFilter(arr, function (value) {
    return value % 2 === 1;
  })
);

console.log(arr);
