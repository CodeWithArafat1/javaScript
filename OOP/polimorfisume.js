// function extend(Parent, Child) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape(color) {
//   this.color = color;
// }

// Shape.prototype.common = function () {
//   console.log("I am common Method...");
// };

// extend(Shape, Square);
// Square.prototype.common = function () {
//   console.log("I am calling form Squre...!");
// };

// function Square(width, color) {
//   Shape.call(this, color);
//   this.width = width;
// }

// extend(Shape, Circle);

// Circle.prototype.common = function () {
//   console.log("I am calling form circle and I have Overridden!");
// };

// function Circle(radius, color) {
//   Shape.call(this, color);
//   this.radius = radius;
// }

// const s = new Shape("red");
// const c1 = new Circle(20, "green");
// const sqr = new Square(10, "red");

// const shapes = [s, c1, sqr];

// for (let i of shapes) {
//   i.common();
// }

function mixin(target, ...sources) {
  Object.assign(target.prototype, ...sources);
}

const canWalk = {
  walk: function () {
    console.log("Walking...");
  },
};

const canEat = {
  eat: function () {
    console.log("Eating...");
  },
};

const canSwim ={
    swim: function(){
        console.log("Swiming...")
    }
}

// const person = Object.assign({}, canWalk, canEat);

function Person(name) {
  this.name = name;
}

mixin(Person, canWalk, canEat)

const person = new Person("Arafat Nill");
console.log(person);


function GoldFish(name){
    this.name = name
}


mixin(GoldFish, canSwim)

const fish = new GoldFish("bla bla bla...")
console.log(fish)