// What is DOM?
// stands for document object model - represents the document with a logical tree
// defines the structure and props of elements on the web
// can be used to access and modify the data present in document using JavaScript

// -> access/select element
// var h1 = document.querySelector("h1");

// -> modify contents of html
// h1.innerHTML = "Hello.";

// -> modify styles
// h1.style.color = "red";

// Event listener - fnc that waits for an event to occur then responds to it

// var h1 = document.querySelector("h1");
// h1.addEventListener("click", function () {
//   h1.innerHTML = "<h1>Hello.</h1>";
//   h1.style.color = "white";
//   h1.style.backgroundColor = "black";
// });

// Bulb
var btn = document.querySelector("button");
var bulb = document.querySelector("#bulb");
var state = false;

btn.addEventListener("click", function () {
  if (!state) {
    bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "Turn the bulb off.";
    state = true;
  } else {
    bulb.style.backgroundColor = "";
    btn.innerHTML = "Turn the bulb on.";
    state = false;
  }
});

// How to select multiple elements at once?

// var h = document.querySelectorAll("h1");
// h.forEach(function (e) {
//   console.log(e);
// });

// document.getElementById
// document.getElementsByClassName

// innerHTML -> renders content accrdn to tags
// textContent -> text
