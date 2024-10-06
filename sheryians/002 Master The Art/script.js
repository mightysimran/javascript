// var, let and const - the difference
// -> es5: var, es6: var, let and const
// -> var is function scoped, let and const are scoped within {}
// -> var adds itself to the window - not ideal, whereas let and const doesn't

// function f()
// {
//     for(var i=0; i<10; i++){
//         console.log(i);
//     }
//     console.log(i) // No error: var is fnc scoped - can be used anywhere inside its parent function

//     for(let i=0; i<10; i++){
//         console.log(i);
//     }
//     console.log(i) // Error: let is scoped within the brackets hence it'd throw an error here
// }
// f();

// Heap memory - stores intermediate data reqd. during the code execution

// Execution Context - Whenever we run a fn, the fn creates an imaginary container of itself that contains the following components:
// 1) variables
// 2) functions inside that parent fnc
// 3) lexical environment of that function

// Lexical environment - Every fn has lexical environment attached to it, it tells us what we can access inside and what we can't. The innermost fnc can access anything from parent fncs but the parent fnc can't access anything from the fncs defined inside them

// How to (real) copy reference values

// var a = [1,2,3,4,5];
// var b = [...a];

// var x = {name: "mightysimran"}
// var y = {...x};

// ... is spread operator

// Truthy and Falsy
// falsy values - 0, false, undefined, null, NaN, document.all
// truthy values - anything except falsy values

// forEach loop

// arr = [0,1,2,3,4,5];
// arr.forEach(function(val){
//     console.log(val+1);
// })
// arr.forEach(val => {
//     console.log(val+1);
// });

// forin loop
// var car = {
//     brand: "Aston Martin",
//     model: "",
//     acceleration:"",
//     power:"",
// }
// for(var prop in car){
//     console.log(prop); // keys
//     console.log(car.prop); // values
//     console.log(car[prop]); // values
// }

// Callback functions - Callbacks ensures that the function is not going to run before a task is completed but will run right after the task has completed. It’s a function that receives input from another function. They are often used for handling asynchronous events like network requests or file input/output - i/o (asynchronous programming)

// eg.
// setTimeout(() => {
//     alert("Callbacks are part asynchronous programming ")
// }, 1000); // 1000 milliseconds - 1 second

// First class functions - fnc that can be treated as variable

// var x = function(){}; // No error

// function fnc(another_fnc) {
//   another_fnc();
// }
// fnc(function () {
//   console.log("Hello!");
// });

// How arrays are made behind the scenes
// arr = [1,2,3,4,5]
// typeof(arr); // Object

// Array.isArray([]) // True
// Array.isArray({}) // False

// How to add prop
// var car = {
//     brand: "Aston Martin"
// }
// car["acceleration"] = "";

// How to delete prop
// var car = {
//     brand: "Aston Martin"
// }
// delete car.brand;
