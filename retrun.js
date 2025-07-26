//! Return Function from Another Function in Javascript | JS All You Need To Know | JS Bangla

// function greet(msg) {
//   function sayHi(name) {
//     return msg + ", " + name + "!";
//   }
//   return sayHi;
// }

// const gm = greet("Good Morning");

// const msg = gm("Arafat");

// console.log(msg);

// function checkPermission(role) {
//   return function (action) {
//     if (role === "admin") {
//       return `Admin can ${action}`;
//     } else {
//       return `Access denied for ${role} to ${action}`;
//     }
//   };
// }

// const adminCheck = checkPermission("admin");
// const userCheck = checkPermission("user");

// console.log(adminCheck("delete user")); // Admin can delete user
// console.log(userCheck("delete user"));  // Access denied for user to delete user

//! ✅ 1. Permission Checker (Authentication System)
// function checkPermission(role) {
//   return function (aciton) {
//     if (role === "admin") {
//       return `Admin can ${aciton} `;
//     } else {
//       return `Access denied ${role} to ${aciton}`;
//     }
//   };
// }

// const adminCheck = checkPermission("admin");
// const userCheck = checkPermission("user");

// console.log(adminCheck("delete user"));
// console.log(userCheck("delete user"));

//! ✅ 2. Formatted Logger / Debugger Function

function logger(type) {
  return function (msg) {
    if (type === "success") {
      return console.log(`${type} : ${msg}`);
    } else {
      return console.log(`${type} : ${msg}`);
    }
  };
}

const errLog = logger("error");
const infoLog = logger("success");

errLog("Invalid password");
infoLog("user logged in");

//! ✅ 3. Custom Greeting Generator

function customGreeting(msg) {
  return function (name) {
    return console.log(`${msg}, ${name}`);
  };
}

const mg = customGreeting("Good Morning");
mg("Arafat");
const mg2 = customGreeting("Good Night");
mg2("Arafat Nill");

//! ✅ ৪. Discount Calculator Generator (E-commerce)

function discountCalculator(disc) {
  return function (price) {
    return price - price * (disc / 100);
  };
}

const tenPercentOff = discountCalculator(20);
const thirtyPercentOff = discountCalculator(30);

console.log(tenPercentOff(100));
console.log(thirtyPercentOff(100));

// function base(b) {
//   return function (n) {
//     let result = 1;
//     for (let i = 1; i <= b; i++) {
//        result *= n;
//     }
//     return result
//   };
// }

// const base10 = base(10)
// const base5= base(5)

// console.log(base5(2));
// console.log(base10(2));

function base(b) {
  return function (n) {
    let result = 1;
    for (let i = 1; i <= b; i++) {
      result = result * n;
    }
    return result;
  };
}

const base10 = base(10);
const base2 = base(2);
console.log(base2(2));
console.log(base10(2));
