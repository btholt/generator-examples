'use strict';

function* logIncreasingAdditions() {
    var count = 0;
    console.log('Starting up …');
    while(true) {
        var input = yield;
        console.log(`New answer: ${count + input}`);
        count++;
    }
}

let gen = logIncreasingAdditions();

// Initialize
gen.next();

gen.next(1);
gen.next(1);
gen.next(1);
gen.next(10);