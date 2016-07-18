// Update with your config settings.

module.exports = {
  development: require('./config/development').db,
  production: require('./config/production').db
};
