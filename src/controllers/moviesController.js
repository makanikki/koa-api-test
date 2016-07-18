const Movie = require('../models/Movie');

// get all movies
module.exports.index = function * index(next) {
    if('GET' != this.method) return yield next;

    var movies = yield Movie.collection().fetch({ withRelated: ['category'] });

    this.body = { movies: movies.toJSON() };
}

// get a movie
module.exports.getMovie = function * getMovie(next) {
    if('GET' != this.method) return yield next;

    var movie = yield Movie.where('id', this.params.id).fetch({ withRelated: ['category'] });

    this.body = { movie: movie.toJSON() };
}
