'use strict';

const request = require('superagent');
const prefix = 'http://www.omdbapi.com/?&plot=short&r=json&i=tt';

function* logOutTitle() {
  console.log('starting up logger …');
  while(true) {
    let input = yield;
    console.log(`Title: ${input.body.Title}`);
  }
}

function* poll() {
  console.log('starting up poller …');
  while(true) {
    let id = yield;
    console.log(`Request ${id} …`)
    request.get(prefix + id).accept('json').end(function (err, data) {logger.next(data)});
  }
}

let poller = poll();
let logger = logOutTitle();

poller.next();
logger.next();

let id = 1856010;
setInterval(function() {poller.next(id++)}, 3000);