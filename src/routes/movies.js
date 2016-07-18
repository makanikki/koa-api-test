// set up movies router
var movies = require('koa-router')({
    prefix: '/movies'
});

// declare the controller you need
var moviesController = require('../controllers/moviesController');

// Now, we can declare our routes
// get all movies
movies.get('/', moviesController.index);

// get a movie
movies.get('/:id', moviesController.getMovie);

module.exports = movies;
