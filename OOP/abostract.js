// //? Pass by value vs pass by Refrence
// //? Call by Value vs call by Refernce

// //! function body kono primitive data change korte pare nah

// let n = 10;
// function change(n) {
//   n += 100;
//   console.log(n);
// }

// change(n);
// console.log(n);

// //! function body kono OBJ data change korte pare
// const obj = {
//   a: 10,
//   b: 20,
// };

// function changeMe(obj) {
//   obj.a = obj.a + 100;
//   obj.b = obj.b + 100;

//   console.log(obj);
// }

// changeMe(obj);

// console.log(obj);

// const Rectangle = function (width, height) {
//   this.width = width;
//   this.height = height;

//   let position = {
//     x: 50,
//     y: -100,
//   };

//   const printPro = function () {
//     console.log(`my width is ${this.width}`);
//     console.log(`my hieght is ${this.height}`);
//     console.log(`position X = ${position.x} , Y = ${position.y}`);
//   }.bind(this);

//   this.drow = function () {
//     console.log("I am reactangle...");

//     printPro();
//   };
// this.getPosition = function(){
//   return positon
// }

// Object.defineProperty(this, "position", {
//   get: function () {
//     return position;
//   },
//   set: function (value) {
//     position = value;
//   },
// });

//   Object.defineProperty(this, "position", {
//     get: function () {
//       return position;
//     },
//     set: (value) => {
//       position = value;
//     },
//   });
// };

// const rect1 = new Rectangle(10, 20);

// rect1.drow();

// console.log(rect1.getPosition()) //? first way
// rect1.position = {
//   x : 123,
//   y: 1010
// }

// rect1.position = {
//   x: 10,
//   y: 20,
// };
// console.log(rect1.position); //? currect way

//! Improtent

const Rect = function (width, hieght) {
  this.width = width;
  this.hieght = hieght;

  let position = {
    x: 20,
    y: -100,
  };

  this.drow = function () {
    console.log(`I am recangle...`);
    printPro();
  };

  const printPro = function () {
    console.log(`My width is ${width}`);
    console.log(`My height is ${hieght}`);
    console.log(`My position X ${position.x} Y ${position.y}`);
  };

  Object.defineProperty(this, "position", {
    get: () => {
      return position;
    },
    set: (value) => {
      position = value;
    },
  });
};

const rect1 = new Rect(10, 20);

rect1.drow();

rect1.position = {
  x: 50,
  y: -10,
};

console.log(rect1.position);
