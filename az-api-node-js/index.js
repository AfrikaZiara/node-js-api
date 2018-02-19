const express=require('express');
const routes = require('./routes');
const user = require('./routers/user');
const http = require('http');
const path = require('path');


// starting up the app

const app = express();
const mysql = require('mysql');
const bodyParser=require("body-parser");


// connect to db mysql
const con = mysql.createConnection({
    host: "localhost",
    user: "frenx",
    password: "Pokerface1994",
    database:"afrikaziara_db"

});
con.connect();

// view engine setup - template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware libraries
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));


//route handling
app.use('/', index);


// Error handling
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
