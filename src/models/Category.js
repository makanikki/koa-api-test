const bookshelf = require('../../db/bookshelf');
const Movie = require('./Movie');

var Category = bookshelf.Model.extend({
    tableName: 'category',
    movies: function () {
        return this.hasMany(Movie);
    }
});

module.exports = Category;
