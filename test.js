// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce(func,0);

// function func(acc, currentValue, currentIndex, sourceArray) {
//   return acc + currentValue;
// }

// console.log(sum);

// function myReduce(arr, cb, acc) {
//   for (let i = 0; i < arr.length; i++) {
//     acc = cb(acc, arr[i]);
//   }

//   return acc;
// }

// const sum = myReduce(
//   arr,
//   function (prev, curr) {
//     return prev + curr;
//   },
//   0
// );

// const max = myReduce(
//   arr,
//   function (acc, curr) {
//     return Math.max(acc, curr);
//   },
//   0
// );
// const min = myReduce(
//   arr,
//   function (acc, curr) {
//     return Math.min(acc, curr);
//   },
//   arr[0]
// );

// console.log(min);
// console.log(max);
// console.log(sum);

// const products = [
//   { name: "Pen", ammount: 5, price: 10 },
//   { name: "Pen", ammount: 5, price: 10 },
//   { name: "Pen", ammount: 10, price: 12 },
//   { name: "Pen", ammount: 3, price: 15 },
//   { name: "Pen", ammount: 4, price: 7 },
// ];

// const totalPrice = products.reduce((acc, currItem) => {
//   return (acc = acc + currItem.ammount * currItem.price);
// }, 0);

// console.log(totalPrice);


var fileName = "pdfData.jpg";
// ----------------------------------------------------
// সমাধান ১: if-else if-else ব্যবহার করে
// ----------------------------------------------------
function solveWithIfElse(file) {
  if (file.startsWith("#")) {
    console.log("Store");
  } else if (file.endsWith(".pdf")) {
    console.log("Store");
  } else if (file.endsWith(".docx")) {
    console.log("Store");
  } else {
    console.log("Delete");
  }
}
solveWithIfElse(fileName);

var fileName = "pdfData.jpg";
// ----------------------------------------------------
// সমাধান ২: Logical OR (||) ব্যবহার করে
// ----------------------------------------------------
function solveWithLogicalOR(file) {
  if (
    file.startsWith("#") ||
    file.endsWith(".pdf") ||
    file.endsWith(".docx")
  ) {
    console.log("Store");
  } else {
    console.log("Delete");
  }
}
solveWithLogicalOR(fileName);


var fileName = "pdfData.jpg";
// ----------------------------------------------------
// সমাধান ৩: switch স্টেটমেন্ট ব্যবহার করে
// ----------------------------------------------------
function solveWithSwitch(file) {
  switch (true) {
    case file.startsWith("#"):
    case file.endsWith(".pdf"):
    case file.endsWith(".docx"):
      console.log("Store");
      break;
    default:
      console.log("Delete");
  }
}
solveWithSwitch(fileName);


var fileName = "pdfData.jpg";
// ----------------------------------------------------
// সমাধান ৩: switch স্টেটমেন্ট ব্যবহার করে
// ----------------------------------------------------
function solveWithSwitch(file) {
  switch (true) {
    case file.startsWith("#"):
    case file.endsWith(".pdf"):
    case file.endsWith(".docx"):
      console.log("Store");
      break;
    default:
      console.log("Delete");
  }
}


var fileName = "pdfData.jpg";
// ----------------------------------------------------
// সমাধান ৪: Regular Expression (Regex) ব্যবহার করে
// ----------------------------------------------------
function solveWithRegex(file) {
  // Regex প্যাটার্ন: ^# মানে হলো স্ট্রিংয়ের শুরুতে # থাকবে
  // | মানে হলো OR
  // (\.pdf|\.docx)$ মানে হলো ডট (.) দিয়ে শুরু এবং pdf বা docx দিয়ে শেষ হবে
  const storePattern = /^#|(\.pdf|\.docx)$/;
  if (storePattern.test(file)) {
    console.log("Store");
  } else {
    console.log("Delete");
  }
}


var fileName = "pdfData.jpg";
// ----------------------------------------------------
// সমাধান ৫: Array methods ব্যবহার করে
// ----------------------------------------------------
function solveWithArrayMethods(file) {
  const allowedExtensions = [".pdf", ".docx"];
  const hasAllowedExtension = allowedExtensions.some(ext => file.endsWith(ext));

  if (file.startsWith("#") || hasAllowedExtension) {
    console.log("Store");
  } else {
    console.log("Delete");
  }
}
solveWithArrayMethods(fileName);
