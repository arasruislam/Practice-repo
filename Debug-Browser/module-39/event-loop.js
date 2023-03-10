function a() {
  console.log("a");
  b();
  console.log("a2");
}

function b() {
  console.log("b");
  d();
  console.log("b2");
}

function d() {
  console.log("d");
  console.log("d2");
}

function x() {
  console.log('x');
  y();
  console.log('x2');
}
function y() {
  console.log('y');
  z();
  console.log('y2');
}
function z() {
  console.log('z');
  console.log('z2');
}
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

a();
x();