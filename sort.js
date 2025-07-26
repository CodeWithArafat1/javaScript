const persons = [
  {
    name: "A",
    age: 21,
  },
  {
    name: "B",
    age: 24,
  },
  {
    name: "C",
    age: 18,
  },
  {
    name: "D",
    age: 17,
  },
];
//! sort main array change kore fele
const arr = [4, 5, 2, 6, 7, 2, 67, 8, -56];

// arr.sort();
// arr.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// arr.sort((a, b) => a - b); //! perfect way
// console.log(arr);

// persons.sort();

// const newPerson = [...persons].sort(function (a, b) {
//   return a.age - b.age;
// });
//? same jinish logic er maddhome
// persons.sort(function (a, b) {
//   if (a.age > b.age) {
//     return 1;
//   } else if (a.age < b.age) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(persons);

const res1 = arr.every((value) => {
  return value % 2 === 0;
});
const res2 = arr.every((value) => {
  return value >= 0;
});
console.log(res1);
console.log(res2);


const res3 = arr.some(function(value){
    return value %2===1
})

console.log(res3);


const res4 = arr.some((value)=>{
    return value < 0
})
console.log(res4)