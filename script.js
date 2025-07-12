// ! 001. How to Use This Course Contents | JS All You Need to Know | JS Bangla Tutorials
// ? javaScript and Node.js by default asynchronous programign
// ? DOM javaScript na DOM is just an Aplication or Libary

// ! 002. First Code of JS | JS All You Need to Know | JS Bangla Tutorials
// ? Q: What is Programming
// ? A: Programming is a set of instruction which our computer can read, understand and produce and output.

// ? print hello world

// console.log("Hello world!");
// console.log(45.5);
// console.log(9 + "9" + 9);

//! 003. What is Variables | JS All You Need to Know | JS Bangla Tutorials

// var creatorName = "Arafat Nill";
// var age = 21;

// console.log(creatorName + " knows JavaScript");
// console.log("His age is only " + age);
// console.log(creatorName + " is creating JavaScript course for free");
// console.log("But this age is only " + age);

//! aigula variable a use korte parbe nah

// ! Standard Reserved Words
// ? break       case        catch       class       const
// ? continue    debugger    default     delete      do
// ? else        export      extends     finally     for
// ? function    if          import      in          instanceof
// ? new         return      super       switch      this
// ? throw       try         typeof      var         void
// ? while       with        yield       null

// ! Future Reserved Words
// ? enum        await       implements  interface
// ? let         package     private     protected
// ? public      static

//! variable er name always camelCase or underscore (__) use korte hobe  like ↓

// var mathNumber = 21;
// var accountNumberDetailsId = 1010;

// var math_number = 21;
// var account_number_details_id = 1010;

//! 003. JS Data Types | JS All You Need to Know | JS Bangla Tutorials

//? JavaScript a 2 dhoroner data type ase
//! and primitive data type holo javaScript er nijer data type r obj data type hosce oi primitive data type ba jacsScript diye toiri kora amader mon moto toiri kora data type!

//! A : Primitive data type total 9 ta
// ? 1 : Number // 10 1.242
// ? 2 : String // text like "this id text" 'this is text' `this is text`
// ? 3 : Boolean // ture and false
// ? 4 : undifined  // false
// ? 5 : null // false
// ? 6 : BigInt
// ? 7 : Symble
// ? 8 : NaN
// ? 9 : infinity

//! B : object data type
// ? 1 : Array
// ? 2 : Object
// ? 3 : function

//! Numbers
// var n = 21; // intger Number
// var f = 21.2312; // float Number
// var itStr = "21";
// var nn = Number(itStr); // number jodi string a thake thole oita number a convart hoye jabe
// console.log(nn);

// var newNumber = 21.45;
// var parseIntConvert = Number.parseInt(newNumber);
// console.log(parseIntConvert); // output 21

// var isNumber = 22;
// var parseFoltConvert = Number.parseFloat(isNumber);
// console.log(parseFoltConvert); // output 22

// ? amra koto boro number and soto number store korte parbo
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

//? infinity Number
// console.log(1 / 0); // output : infinity

//? NaN not a number
// console.log("string" / 21); // output : NaN

// var hex = 0xff;
// console.log(hex); // output : 255
// var oct = 0756;
// console.log(oct); // output : 495

//! 004. JS Basic Strings | JS All You Need to Know | JS Bangla Tutorials

//? JavaScript a "" , '' , `` cotation a ja thake tai string

//? ai 3 ta holo litaral
// var str = "string";
// var str2 = "String";
// var str3 = `String`;

//? ai 3 ta constuctor
// var str4 = String("stign");
// var str5 = String(1345);
// var str5 = String(3.1416);

// console.log(typeof str, str2, str3, str4, str5);

//! 005. JS Basic Booleans | JS All You Need to Know | JS Bangla Tutorials

//? boolean a just 2 ta value true and false
// var b1 = true;
// var b2 = false;

// var b3 = Boolean(true);
// var b4 = Boolean(false);

//! 006. JS Null & Undefined | JS All You Need to Know | JS Bangla Tutorials

//? javascript a jokhun ekta variable k dicliyer kori and oitar jodi kono value na dei tokhun oita undifiend.
//? abar kono ekta variable a ekta value expect korci faka rakhte parbo na oita holo null. btu 2 ta same jinish nah

//! ***************** null vs undefined ***************

// var abc; // kono ekta kichu define kora hoice but value assign kora hoi nai aita holo undifiend
// var xyz = null; // value assign kora hoice but value te kichu nai

// console.log(abc); // output : undifiend
// console.log(xyz); // output : Null

//! 007. JS Type Conversion | JS All You Need to Know | JS Bangla Tutorials

//? ekta data type theke jokhun amra onno ekta data type a chole jai convert kori tokhun shi consspt take bola hoi type conversion

// var str = "100";
// var n = 10;

// console.log(str * n); // output : 1000 // automatic type conversion
// console.log(str + n); // 2 ta concat kore dei

// console.log(Number.parseInt(str));
// console.log(Boolean(Infinity));

//? Falsy values js always false dhorbe
// "" = empty string
// 0
// null
// undefined
// NaN

// console.log(Boolean("")); // output : false
// console.log(Boolean("hello world")); // output : true
// console.log(Boolean(null)); // output : false
// console.log(Boolean(undefined)); // output : false
// console.log(Boolean(NaN)); // output : false
// console.log(Boolean(482)); // output : true
// console.log(Boolean(0)); // output : false

// console.log(true.toString()); // output : string
//? constuctor list

// String Number Boolean
