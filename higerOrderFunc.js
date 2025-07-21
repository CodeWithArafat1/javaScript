function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  let c = a + b;
  let d = a - b;

  //   function multiplay() {
  //     let m = func(a, b);
  //     return c * d * m;
  //   }
  return function () {
    let m = func(a, b);
    return c * d * m;
  };
}

const multiplay = manipulate(10, 20, add);
console.log(multiplay());
