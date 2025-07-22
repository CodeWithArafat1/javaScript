//! Callback Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

// function sample(a, b) {
//   const c = a + b;
//   const d = a - b;

//   return {
//     sum: sum(c, d),
//     sub: sub(c, d),
//   };
// }

// function sum(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }

// console.log(sample(5, 8).sub);
// 13 , -3 = 10

//! this is callBack function

function sample(a, b, cb) {
  const c = a + b;
  const d = a - b;

  const result = cb(c, d);
  console.log(result);
}

function sum(a, b) {
  return a + b;
}

sample(5, 8, sum);

//!  we can careate function as we need
sample(5, 8, (a, b) => {
  return a - b;
});
