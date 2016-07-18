// init the app
const app = require('koa')();

//dependencies
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

// config app
const env = process.env.NODE_ENV || 'development';
const config = require('./config/' + env);

// config db
const knex = require('./db/knex');

try {
    global.db = knex;
} catch (err) {
    throw new Error(err);
}

// install app
app.use(bodyParser());
app.use(cors());

// call the router
var router = require('./src/routes/router');

app.use(router.routes());
app.use(router.allowedMethods());

// start the app
app.listen(config.port);
