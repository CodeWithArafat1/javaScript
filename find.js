const arr = [7.5, 3, 2, 5, 7, 8, 9, 1, 3];

// const result = arr.find(function (value, index) {
//   return value === 3;
// });

// console.log(result);

// const result2 = arr.findIndex(function(value){
//     return value ===9
// })

// console.log(result2)

function myfind(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return value;
    }
  }
}

console.log(myfind(arr, 8));

//? chaile callBack use kore kora jai
function myfindIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
}

//? using callBack function
function myfindIndex2(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
}

const result = myfindIndex2(arr, function (value) {
  return value === 9;
});

console.log(result);
console.log(myfindIndex(arr, 7));
