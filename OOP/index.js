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
// const Rectangle = function (width, height) {
//   this.width = width;
//   this.height = height;

//   this.drow = function () {
//     console.log("I am a rectangle");
//     this.printProperties();
//     console.log(this);
//   };

//   this.printProperties = function () {
//     console.log("my width is " + this.width);
//     console.log("my height is " + this.height);
//   };
// };

// function rect(width, height) {
//   return {
//     drow: function () {
//       this.printProperties();
//       console.log(width * height);
//     },

//     printProperties: function () {
//       console.log(`My width is ${width}`);
//       console.log(`My hieght is ${height}`);
//     },
//   };
// }

// const rect1 = rect(10, 30);
// const rect2 = rect(50, 20);

// rect1.drow();
// rect2.drow();

// const Rect = function (width, height) {
//   this.width = width;
//   this.height = height;

//   this.drow = function () {
//     this.pirntPro();
//     console.log("I am rectangle!");
//     console.log(this)
//   };

//   this.pirntPro = function () {
//     console.log(`My width is ${this.width}`);
//     console.log(`My hieght is ${this.height}`);
//   };
// };

// const rect1 = new Rect(10,20)
// rect1.drow()

// const rect3 = new Rectangle(10, 20);
// rect3.drow();

// function myNew(constructor) {
//   const obj = {};

//   Object.setPrototypeOf(obj, constructor.prototype);
//   const argsArray = Array.prototype.slice.apply(arguments);

//   constructor.apply(obj, argsArray.slice(1));

//   return obj;
// }

// const rect2 = myNew(Rectangle, 19,49)

// rect2.drow()

// function test() {
//   console.log("something");
// }

// test();

// console.log(test.name , test.apply, test.prototype, test.arguments, test.bind)

//! function controctur
// const Rect = new Function(
//   "width",
//   "height",
//   `
//   this.width = width;
//   this.height = height;

//   this.drow = function () {
//     this.pirntPro();
//     console.log("I am rectangle!");
//     console.log(this)
//   };

//   this.pirntPro = function () {
//     console.log('My width is ' + width);
//      console.log('My width is ' + height);

//   };
//   `
// );

// const rect4 = new Rect(10, 20);
// console.log(rect4);

// Rect() //! emon kore call korle aita window object a refer kore

const Rect = function (width, height) {
  this.width = width;
  this.height = height;

  this.drow = function () {
    this.pirntPro();
    console.log("I am rectangle!");
    console.log(this)
    // console.log(arguments)
  };

  this.pirntPro = function () {
    console.log(`My width is ${this.width}`);
    console.log(`My hieght is ${this.height}`);
  };
};

function myNew(constructor) {
  const obj = {};

  Object.setPrototypeOf(obj, constructor.prototype);
  const argsArray = Array.prototype.slice.apply(arguments);

  constructor.apply(obj, argsArray.slice(1));

  return obj;
}
const rect1 = myNew(Rect, 10,20)
rect1.drow()

// function myFunc() {
//   console.log(this)
//   console.log(this.a + this.b);
// }

// myFunc() //? emon kore call korle aita hobe window obj

//! call method

// myFunc.call({a: 30, b:25}) //! amader nijer toiri kore obj take refer korbe
//  myFunc.apply({a: 400, b:205}) //! amader nijer toiri kore obj take refer korbe
// myFunc()

//? call and applay er modde parthokko
// function myFunc(c, d) {
//   console.log(this);
//   console.log(this.a + this.b + c + d);
// }

//!  call a amra function er args gula dite parbo
// myFunc.call({ a: 10, b: 20 }, 10, 20);

//! apply a amra function a args dite parbo nah but array dite parbo but jotota args ase totota array item dite parbo beshi dile kaj korbe nah
// myFunc.apply({ a: 30, b: 25 }, [10, 50]);

//! bind method bakider moto instant call hoi na aitake ekta variable er moddhe store kore rakhte hoi
// myFunc.bind({a: 7, b:3}, 5,5)

// const myBind = myFunc.bind({ a: 7, b: 3 });

// myBind(5, 20);


