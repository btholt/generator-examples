
function* giveDarkColors() {
  yield 'blue';
  yield 'black';
}

function* giveColors() {
  yield 'red';
  yield* giveDarkColors();
  yield 'green';
}

for (color of giveColors()) {
  console.log(color);
}

