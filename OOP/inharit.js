// function Shape() {}

// Shape.prototype = {
//   common: function () {
//     console.log("I am common Method...");
//   },
// };
//? updated
// Shape.prototype.common = function () {
//   console.log("I am common Method...");
// };

// Square.prototype = Object.create(Shape.prototype);

// function Square(width) {
//   this.width = width;
// }

// Square.prototype.drow = function () {
//   console.log("I am Drowing...");
// };

// function Circle(width) {
//   this.width = width;
// }
// Circle.prototype = Object.create(Shape.prototype);

// Circle.prototype.xyz = function () {
//   console.log("Hello world");
// };

// const c1 = new Circle(29);
// const s1 = new Square(45); //? s1 -> Square -> Object
// const shap = new Shape(); //? shap -> Shape -> Object

//! but we need
//? s1 -> Square -> Shape -> Object
// Square.prototype = Object.create(Shape.prototype);

function Shape(color, color2) {
  this.color = color
  this.color2 = color2
}

Shape.prototype.common = function () {
  console.log("I am common Method...");
};

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

function Square(width, color, color2) {
   Shape.apply(this, color, color2)
  //  Shape.call(this, color)
  this.width = width;
}

const s1 = new Shape(); //? s1 -> Shape -> Object
const sqr = new Square(10, ["green", 'red']); //? sqr -> Square -> Object
// const sqr = new Square(10,"green"); //? sqr -> Square -> Object

//! but we need
//? sqr -> Square -> Shape -> Object


const test = "widget-" + Math.random().toString(36).substring(2,9);
console.log(test)

