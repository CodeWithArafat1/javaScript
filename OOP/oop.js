//! OOP : Object Oriented Programming
//? is a programming paradigm based on the consept of "object". which can contain data, in the form of fields(often know as attributes), and code, in the form of procedures (ofter know as methods). [source - wikipedia]

//! Procedural

// const width = 10;
// const height = 20;

// function calcluteArea(width, height) {
//   return width * height;
// }

// function calcluteRange(width, height) {
//   return 2 * (width + height);
// }

// console.log(calcluteArea(width, height));
// console.log(calcluteRange(width, height));

// //! Object Oriented

// const rect = {
//   width: 10,
//   height: 20,

//   calcluteArea() {
//     return this.width * this.height
//   },
//   calcluteRange() {
//     return 2 * (this.width + this.height);
//   },
// };

// const area = rect.calcluteArea()
// const range = rect.calcluteRange()

// console.log(area)
// console.log(range)

class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcluteArea() {
    return this.width * this.height;
  }
  calcluteRange() {
    return 2 * (this.width + this.height);
  }
}


const ract = new Rect(20,10)
const ract2 = new Rect(20,10)

console.log(ract.calcluteArea())
console.log(ract.calcluteRange())
