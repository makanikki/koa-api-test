var env = process.env.NODE_ENV || 'development';
var config = require('../config/' + env).db;

module.exports = require('knex')(config);
