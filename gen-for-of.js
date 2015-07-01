'use strict';
// let target = document.querySelector('#write-target');
// const appendText = function(text) {
//   let p = document.createElement("p");
//   p.innerText = text;
//   document.body.appendChild(p);
// }
require('babel/register');

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'black', 'white', 'orange'];

const colorGenerator = function*() {
  for (let color of colors) {
    yield color;
  }
}

let generator = colorGenerator();

for (let item of generator) {
  console.log(item);
}