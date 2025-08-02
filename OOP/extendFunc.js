function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log("I am common Method...");
};

extend(Shape, Square);
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}

extend(Shape, Circle);

//! over wride the common method
Circle.prototype.common = function () {
  Shape.prototype.common.call(this); //? amader jodi projon pore er moddhe parent er main prototype take cal korte thole amra emon kore korte parbo
  console.log("I am calling form circle and I have Overridden!");
};
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

const c1 = new Circle(20, "green");
const sqr = new Square(10, "red");
