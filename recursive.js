//! Recursive Function in Javascript | JS All You Need To Know | JS Bangla Tutorials

//! Recursive function emon ekta function jeta niyei nijeke call korte pare !

function recursive(n) {
  if (n === 0) {
    return;
  }

  console.log("I am calling");
  recursive(n - 1);
}

recursive(5);

function sum(n) {
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
}

console.log(sum(5));

function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}

console.log(fact(5));

const arr = [1, 2, 3, 4, 5];

function sumOfArray(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }

  return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
}

console.log(sumOfArray(arr, arr.length - 1));

//! 📌 উদাহরণ ২: Countdown

function countdown(n) {
  if (n === 0) {
    console.log("Task Finish!");

    return;
  }
  console.log(n);
  return countdown(n - 1);
}

countdown(5);

//! ✅ JavaScript কোডে Laundry Function:

function washClothes(basket) {
  if (basket.length === 0) {
    console.log("সব কাপড় ধোয়া শেষ ✅");
    return;
  }

  const cloth = basket.pop()
  console.log(`ধোওয়া হচ্ছে: ${cloth} 🧼`)
  washClothes(basket)
}


const myBasket = ["শার্ট", "প্যান্ট", "মোজা", "টুপি"];
// myBasket.unshift

washClothes(myBasket)