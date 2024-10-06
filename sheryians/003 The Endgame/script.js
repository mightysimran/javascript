// Higher order fncs - The functions which accept a fnc in a parameter or returns a fnc or both

// useful for creation of closures

// function f(val) {}
// f(function () {});

// function f(val) {
//   return function () {};
// }

// Note:
// forEach method always takes another fnc inside it, so forEach is a higher order function.

// arr.forEach(function(val){})

// Constructor fncs - Function which whenever called with "new" keyword returns an object, if we use "this keyword" inside that fnc, it returns an object with all props and methods mentioned inside that fnc with this keyword.

// this -> by default points to the window

// function f(){} // normal fnc

// function card(color) {
//   this.height = 5;
//   this.width = 5;
//   this.color = color;
//   this.icon = false;
// }
// var red = new card("red");
// var green = new card("green");

// First class fncs - when the fncs  is treated as variables (normal values), you can save them or you can pass them as arguments to another functions

// var x = function f(){}

// function f() {}
// f(function () {});

// eg.
// setTimeout(() => {}, timeout);
// setInterval(() => {}, interval);

// new keyword

// iife -> immediately invoked function expression
//  function that runs as soon as/ immediately after it is defined.

// (function () {})() //iife;
// helpful in creation of private variables

// (function () {
//   var x = 5; // Private variable
// })();

// console -> Error: x is not defined, when accessin' x from console

// How to access var in iife?
// var ans = (function () {
//   var x = 5;
//   return {
//     getter: function () {
//       console.log(x);
//     },
//     setter: function (val) {
//       x = val;
//     },
//   };
// })();

// Here:
// ans -> {getter: f, setter: f}
// ans.getter() -> prints private var if written in getter fnc
// ans.setter(val) -> assigns val to private var written in setter fnc

// Prototype - Every object in JavaScript has a built-in property, called prototype: [[prototype]] - itself an object. All JavaScript objects inherit properties and methods from a prototype.

// [[prototype]] collection of built-in helper props and methods (functions)

// Prototypal inheritance - Prototypal inheritance in JavaScript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class. Prototypes are hidden objects that are used to share the properties and methods of a parent class with child classes.

// var human = {};
// var mightysimran = {};
// mightysimran.__proto__ = human;

// this - In JavaScript, this keyword always refers to an object. The object it refers depends on scope; where and how "this" is called.

// Global scope
// console.log(this); // returns -> Window

// Function scope
// function f() {
//   console.log(this);
// }
// f(); // returns -> Window

// Method scope
// var x = {
//   f: function () {
//     console.log(this); // returns -> parent object
//   },
// };
// Note: In any method, "this" keyword always refers to parent object

// Event listener
// var button = document.querySelector("button");

// button.addEventListener("click", function () {
//   console.log(this); // returns -> whatever written before .addEventListener
// });

// Function - normal fnc
// Method - a function in an object

// pure and impure functions - Pure fncs return the same output if we use the same input parameters. However, impure fncs results in different outcomes when same args passed multiple times.

// Impure fnc - eg.
// function f(val) {
//   return Math.random() * val;
// }
// var x = f(2);
// var y = f(2);

// Pure fnc - eg.
// function f(val) {
//   return val * 5;
// }
// var x = f(2);
// var y = f(2);
