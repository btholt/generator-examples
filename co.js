'use strict';

// not currently working; needs to actually code methods
// and not do lame hand-waving
var co = require('co');

co(function* () {
  let [user, actionGenre] = yield Promise.all([
    promiseAjax.get('http://example.com/user/31.json'),
    promiseAjax.get('http://example.com/movies/action.json'),
  ]);
  handleUserData(user);
  populateMovieList(actionGenre);
});