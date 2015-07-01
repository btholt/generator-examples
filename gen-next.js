'use strict';

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'black', 'white', 'orange'];

const colorGenerator = function*() {
  for (let color of colors) {
    yield color;
  }
}

let generator = colorGenerator();

for (let i = 0; i < 5; i++) {
  console.log(generator.next());
}