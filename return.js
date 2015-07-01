'use strict';

function* logFavoriteColors() {
    console.log('starting up …');
    const favColors = ['green', 'blue', 'black', 'gray'];
    try {
        for (let color of favColors) {
            yield color;
        }
    }
    finally {
        console.log('cleaning up …');
    }
}

let gen = logFavoriteColors();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.return('pink').value);