'use strict';
require('babel/register');

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'black', 'white', 'orange'];

const colorGenerator = function*() {
  for (let color of colors) {
    yield color;
  }
}

let generator = colorGenerator();
let values = Array.from(generator);
console.log(values);