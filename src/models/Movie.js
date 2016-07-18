const bookshelf = require('../../db/bookshelf');
const Category = require('./Category');

var Movie = bookshelf.Model.extend({
    tableName: 'movie',
    category: function () {
        return this.belongsTo(Category);
    }
});

module.exports = Movie;
