// const rect = {
//   width: 100,
//   height: 50,

//   //? this is method drow
//   drow: function () {
//     console.log("I am a rectangle");
//     this.printProperties() //? aikhanew amra function k call korte pari

//     console.log(this) //? output : this object
//   },

//   printProperties: function () {
//     console.log("my width is " + this.width);
//     console.log("my height is " + this.height);
//   },
// };

// rect.drow();

// rect.height = 100; //! change this value
// rect.drow();

//! what is this?

// function myFunc() {
//   console.log(this); //? its useable
// }
// myFunc(); //? output: window Objcet

// new myFunc(); //? output : empty obj

// const anather ={
//     width: 47,
//     height: 56,

//     print: rect.printProperties()
// }

// console.log(anather.print)
// anather.print

// const rect = {
//   width: 100,
//   height: 50,

//   drow: function () {
//     console.log("I am a rectangle");
//     this.printProperties();
//     console.log(this);
//   },

//   printProperties: function () {
//     console.log("my width is " + this.width);
//     console.log("my height is " + this.height);
//   },
// };

// //! factory pratran
// const createRect = function (width, height) {
//   return {
//     width: width,
//     height: height,

//     drow: function () {
//       console.log("I am a rectangle");
//       this.printProperties();
//       console.log(this);
//     },

//     printProperties: function () {
//       console.log("my width is " + this.width);
//       console.log("my height is " + this.height);
//     },
//   };
// };

// const rect1 = createRect(10, 20);
// rect1.drow();
// const rect2 = createRect(50, 20);
// rect2.drow();

//! constructor method
const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.drow = function () {
    console.log("I am a rectangle");
    this.printProperties();
    console.log(this);
  };

  this.printProperties = function () {
    console.log("my width is " + this.width);
    console.log("my height is " + this.height);
  };
};

// const rect3 = new Rectangle(10, 20);
// rect3.drow();

function myNew(constructor) {
  const obj = {};

  Object.setPrototypeOf(obj, constructor.prototype);
  const argsArray = Array.prototype.slice.apply(arguments);

  constructor.apply(obj, argsArray.slice(1));

  return obj;
}

const rect2 = myNew(Rectangle, 19,49)

rect2.drow()