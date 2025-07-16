//! ********** Object ***********

//! JS Object | JS All You Need to Know | JS Bangla Tutorials

// const car = {
//   brand: "toyta",
//   color: "Black",
//   weight: 1043,
// };

// car.isFlay = false; //? insert data in object

// console.log(car);

// const obj = Object(); //? object constructor

// obj.name = "Arafat Nill";
// obj.email = "arafat@gmail.com";

// obj.name = "Nill"; //? update value
// delete obj.name; //? delete data in object

// console.log(obj);
// console.log(obj["name"]);

//! Comparing Two Objects in Javascript | JS All You Need To Know | JS Bangla Tutorials

// const obj1 = {
//   a: 10,
//   b: 20,
// };
// const obj2 = {
//   a: 10,
//   b: 20,
// };

// console.log(obj1);
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// console.log(obj1 === obj2); // output : false

// if (obj1.a === obj2.a && obj1.b === obj2.b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//! Iterate Object Properties in Javascript | JS All You Need To Know | JS Bangla Tutorials

// const obj = {
//   x: 430,
//   y: 540,
//   z: 39,
// };

// console.log("x" in obj); //? aita check kore obj te x propaty ase ki nah

// for (let i in obj) {
//   console.log(i); //? only key
//   console.log(obj[i]); //? only value
// }

//! Object Methods in Javascript | JS All You Need To Know | JS Bangla Tutorials

const obj = {
  x: 430,
  y: 540,
  z: 39,
};

// const newObj = Object.keys(obj);
// const newObj2 = Object.values(obj);
// const newObj3 = Object.entries(obj);

// console.log(newObj3);

// newObj3.map((item) => {
//   console.log(item);
// });

const obj2 = obj; //? 2 ta object er value change hoye jabe and same array er jonnow

const obj3 = Object.assign({}, obj); //? create new obj in original obj

obj3.x = 100;
console.log(obj);
console.log(obj3);
