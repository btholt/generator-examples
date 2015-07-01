// not implemented right now in JS engines

async function () {
  let [user, actionGenre] = await Promise.all([
    promiseAjax.get('http://example.com/user/31.json'),
    promiseAjax.get('http://example.com/movies/action.json'),
  ]);
  handleUserData(user);
  populateMovieList(actionGenre);
}