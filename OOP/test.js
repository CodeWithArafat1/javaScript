// var
// const
// let

// var myName = 10; // number
// var str= "something" // string
// var bool = true // false

// console.log(str.length)

// console.log(typeof myName);
// console.log(typeof srt);
// console.log(typeof bool);

// var price = 1000;
// var discount = 10;

// var discountPrice = (price * discount) / 100;
// console.log(discountPrice);

// var originalPirce = price - discount
// console.log(originalPirce)

// console.log("hello");

// for (var i = 10; i <= 20; i++) {
//   console.log(i, "hello");
// }

// var isTrue = false;
// var count = 1;
// while (count <= 10) {
//   console.log(count,"Hello");
//   count++;
// }

// let p1 = 10
// let p2 = 3

// let p3 = p1 / p2

// console.log(p3.toFixed(2))

// const arr = [5, 6, 7, 3, 5, 2, 52, 7];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// index =0
// length = 1

// for (var i = 10; i <= 20; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// বাস্তব জীবনের উদাহরণ: স্মার্ট এসি
// const SmartAC = function () {

//   let actualRoomTemperature = 28;
//   let compressorStatus = "OFF";

//   const manageCompressor = (targetTemp) => {
//     if (actualRoomTemperature > targetTemp) {
//       compressorStatus = "ON";
//       console.log(`(AC Logic: Room is hot. Compressor turned ON to reach ${targetTemp}°C)`);
//     } else {
//       compressorStatus = "OFF";
//       console.log(`(AC Logic: Room is cool enough. Compressor is ${compressorStatus})`);
//     }
//   };

//   this.showStatus = function () {
//     console.log(`Current room temperature is ${actualRoomTemperature}°C.`);
//     console.log(`Compressor is ${compressorStatus}.`);
//   };

//   // Getter এবং Setter
//   Object.defineProperty(this, "targetTemperature", {

//     get: () => {
//       console.log("(Remote: Displaying current room temperature)");
//       return actualRoomTemperature;
//     },

//     set: (newTemp) => {
//       console.log(`(Remote: New temperature set to ${newTemp}°C)`);
//       manageCompressor(newTemp);
//     },
//   });
// };

// const myAc = new SmartAC()

// myAc.showStatus()
// myAc.targetTemperature = 20

// const SmartAC = function () {
//   let actualTemp = 28;
//   let acStatus = "OFF";

//   const manageTemp = (remoteValue) => {
//     if (actualTemp > remoteValue) {
//       acStatus = "ON";
//       console.log(
//         `AC Logic: Room is hot. Compressor turned ${acStatus} to reach ${remoteValue}`
//       );
//     } else {
//       acStatus = "OFF";
//       console.log(`AC Logic: Room cool enough. Compressor is ${acStatus} `);
//     }
//   };

//   this.showStatus = () => {
//     console.log(`Current room temperature is ${actualTemp}°C.`);
//     console.log(`Compressor is ${acStatus}`);
//   };

//   Object.defineProperty(this, "remoteTemp", {
//     get: () => {
//       return actualTemp;
//     },
//     set: (value)=>{
//       console.log(`Remote: Setting temperature to ${value}°C`);
//       manageTemp(value)
//       actualTemp = value
//     }
//   });
// };

// const myAC = new SmartAC();

// myAC.remoteTemp = 50

// myAC.showStatus();

// const SmartAC = function () {
//   let actualTem = 28;
//   let acStatus = "OFF";

//   const manageStatus = function (remoteValue) {
//     if (actualTem > remoteValue) {
//       acStatus = "ON";
//       console.log(`Room is hot. Current room temp ${actualTem}`);
//     } else {
//       acStatus = "OFF";
//       console.log(`Room is very cool and temp ${actualTem}`);
//     }
//   };

//   this.showStatus = function () {
//     console.log(`Current room temperature is ${actualTem}°C.`);
//     console.log(`Compressor is ${acStatus}`);
//   };

//   Object.defineProperty(this, "targetValue", {
//     get: () => {
//       return actualTem;
//     },
//     set: (value) => {
//       console.log(`Remote: Setting temperature to ${value}°C`);
//       manageStatus(value);
//       actualTem = value;
//     },
//   });
// };

// const myAc = new SmartAC();

// myAc.targetValue = 10;

// myAc.showStatus();

// const SmartAC = function () {
//   let actualTemp = 28;
//   let targetTemp = 28
//   let acStatus = "OFF";

//   const manageStatus = function () {
//     if (actualTemp > targetTemp) {
//       acStatus = "ON";
//       console.log(`Room is hot. Current room temp ${actualTemp}`);
//     } else {
//       acStatus = "OFF";
//       console.log(`Room is very cool and temp ${targetTemp}`);
//     }
//   };

//   this.showStatus = function () {
//     console.log(`Current room temperature is ${targetTemp}°C.`);
//     console.log(`Compressor is ${acStatus}`);
//   };

//   Object.defineProperty(this, "targetValue", {
//     get: () => targetTemp,
//     set: (value) => {
//       console.log(`Remote: Setting temperature to ${value}°C`);
//       targetTemp = value;
//       manageStatus();
//     },
//   });
// };

// const myAc = new SmartAC();

// myAc.targetValue = 21;
// myAc.showStatus();

// function Person(name){
//   this.name = name
// }

// const p1 = new Person('Arafat')

// console.log(p1)

// const SmartAC = function () {
//   let currentTemp = 28;
//   let userSetTemp = 28;
//   let acStatus = "OFF";

//   const manageAC = function () {
//     if (currentTemp > userSetTemp) {
//       acStatus = "ON";
//       console.log(`AC Logic: Room is hot. and AC is ${acStatus}`);
//     } else {
//       acStatus = "OFF";
//       console.log(`AC Logic: Room is cool and AC ${acStatus}`);
//     }
//   };

//   this.showStatus = function () {
//    console.log(`🌡️ Actual Room Temp: ${currentTemp}°C`);
//     console.log(`🎯 Target Temp: ${userSetTemp}°C`);
//     console.log(`❄️ Compressor is ${acStatus}`);
//   };

//   this.semulateColing = function(){
//     if(acStatus === "ON"){
//       currentTemp--
//       console.log(`...AC running, room is colling...`)
//       manageAC()
//     }
//   }

//   Object.defineProperty(this, 'targetTemp',{
//     get:()=>{
//       return currentTemp
//     },
//     set: (value)=>{
//       console.log(`User setTemp ${value}`)
//       userSetTemp = value
//       manageAC()
//     }
//   })
// };

// const myAC = new SmartAC();

// myAC.targetTemp = 25

// myAC.showStatus();

// myAC.semulateColing()
// myAC.showStatus()

// function BankAccount(accountHolder, initialBalance) {
//   this.accountHolder = accountHolder;
//   let balance = initialBalance;

//   this.withdrow = function (ammount) {
//     if (balance >= ammount) {
//       balance -= ammount;

//       console.log(
//         `Transaction for ${this.accountHolder}: Withdrow ${ammount}. new balance ${balance}.`
//       );
//     } else {
//       console.log(`Transaction for ${accountHolder}: Insufficient funds.`);
//     }
//   };
// }

// BankAccount.prototype = {
//   generateMonthlyStatement: function () {
//     console.log(`---- Genarating statement for ${this.accountHolder} ----`);
//     console.log(`Applying monthly service fee..`);

//     // this.withdrow(210);
//   },
// };

// const p1 = new BankAccount("Arafat", 1000);
// const p2 = new BankAccount("Nill", 350);

// p1.generateMonthlyStatement();
// p1.withdrow(20);
// console.log(`----------------------------`);
// p2.generateMonthlyStatement();
// p2.withdrow(20);


//1. create tow array


// const fruits = ['Apple','banana', 'orange']
// const vegetables = ['carrot', 'pototo', 'tomato']



// const fruitsVegetables = fruits.concat(vegetables)

// console.log(fruitsVegetables)



// let obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// let obj2 = {
//     ...obj
// }


// console.log(obj2)