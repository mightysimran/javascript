// sync -> sequential execution
// synchronous code runs in a particular sequence of instructions; one after another

// async -> simultaneous excecution
// asynchronous code helps handle multiple tasks simultaneously rather than executing them one after another

// async keywords - setTimeout, setInterval, promises, async, await, fetch, axios

// If the code doesn't have above mentioned keywords then that part of code -> sync

// eg.

// setTimeout(callback, time)

// callback -> always a function
// time -> always in milliseconds here

// console.log("Hello, world.");
// setTimeout(function () {
//   console.log("Hello, world after another second.");
// }, 1000);

// above mentioned code runs after 1 sec

// setTimeout, setInterval are callback fncs
// callback fncs are part of async code, callback fncs runs after another fnc/task has finished execution

// sync code -> main stack
// async code -> side stack

// Event Loop - mechanism through which the 'calls waiting for execution' in the callback queue/job queue can be put on the call stack

// main stack <-> side stack

// console.log("a");
// console.log("b");
// setTimeout(function () {
//   console.log("c");
// }, 0);
// console.log("d");

// above mentioned returns ->
// a
// b
// d
// c

// JavaScript is single-threaded programming lang

// single threaded - runs one fnc at a time, in seq.
// multi threaded - simultaneous execution (concurrency)

// fetch, axios, promises, setTimeout, setInterval -> sends request
// then, catch, callbacks, async, await -> answers

// callbacks - always a fnc
// runs only when async code returns an answer

// promises: three states -> pending, resolve, reject

// resolve -> then
// reject -> catch

// eg.

// var ans = new Promise((res, rej) => {
//   if (true) {
//     return res();
//   } else {
//     return rej();
//   }
// });

// ans
//   .then(function () {
//     console.log("resolve");
//   })
//   .catch(function () {
//     console.log("reject");
//   });

// proper eg.
// var ans = new Promise((res, rej) => {
//   var n = Math.floor(Math.random() * 10);
//   console.log(n);
//   if (n < 5) {
//     return res();
//   } else {
//     return rej();
//   }
// });

// ans
//   .then(function () {
//     console.log("The answer is less than 5");
//   })
//   .catch(function () {
//     console.log("The answer is greater than or equal to 5");
//   });

// How run async tasks in order - promise chaining

// var p1 = new Promise(function (res, rej) {
//   return res("Code 1");
// });

// var p2 = p1.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res("Code 2");
//   });
// });

// var p3 = p2.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res("Code 3");
//   });
// });

// var p4 = p3.then(function (data) {
//   console.log(data);
// });

// async await

// async function f() {
//   await fetch(``);
// }

// function f() {
//   fetch(`https://randomuser.me/api/`)
//     .then(function (raw) {
//       return raw.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }
// f();

// async await helps shorten above mentioned code

// async function f() {
//   let raw = await fetch(`https://randomuser.me/api/`);
//   let ans = await raw.json();
//   console.log(ans);
// }
// f();

// ref: https://randomuser.me/

// Concurrency, Parallelism and Throttle
// concurrency -> managing multiple instruction sequences at same time
// parallelism -> running multiple instruction sequences at same time
// throttle ->  helps us control the freq of fnc invocations or limits number of times a fnc is executed