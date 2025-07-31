
// const Rect = function (width, hieght) {
//   this.width = width;
//   this.hieght = hieght;

//   let position = {
//     x: 20,
//     y: -100,
//   };

//   this.drow = function () {
//     console.log(`I am recangle...`);
//     printPro();
//   };

//   const printPro = function () {
//     console.log(`My width is ${width}`);
//     console.log(`My height is ${hieght}`);
//     console.log(`My position X ${position.x} Y ${position.y}`);
//   };

//   Object.defineProperty(this, "position", {
//     get: () => {
//       return position;
//     },
//     set: (value) => {
//       position = value;
//     },
//   });
// };

// const rect1 = new Rect(10, 20);

// rect1.drow();

// rect1.position = {
//   x: 50,
//   y: -10,
// };

// console.log(rect1.position);


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


const person = {
  name: "Arafat Nill"
}

const descriptor = Object.getOwnPropertyDescriptor(person, 'name')
descriptor.writable = false
console.log(descriptor)