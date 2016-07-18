// set up router
const router = require('koa-router')();

// require routes dependencies
var movies = require('./movies');

// just a root route to get it started
router.get('root', '/', function *(next) {
    this.body = 'Hello World';
});

// call the routers you want
router.use(movies.routes());

module.exports = router;
