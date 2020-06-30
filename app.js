var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var mongoose = require('mongoose')

var configValues = require('./config.js')

// mongoDB connection via mongoose
mongoose.connect(configValues.db), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// testing connection command
mongoose.connection.on('connected', () => {
  console.log('MongoDB connection established')
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var parentsRouter = require('./routes/parents')
var adminsRouter = require('./routes/admin')

var singleStudentRouter = require('./api/singleStudent')
var detentionCenterRouter = require('./api/detentionCenter')
var homeworkClubRouter = require('./api/homeworkClub')
var adminHomeworkClub = require('./api/adminHomeworkClub')
var fetchStudentNames = require('./api/fetchStudentNames')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS security options and pre-flight
app.options('/', cors()) // enable pre-flight request for POST request
app.use(cors(configValues.corsOptions));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/parents', parentsRouter);
app.use('/admin', adminsRouter);

app.use('/api/singleStudent', singleStudentRouter)
app.use('/api/detentionCenter', detentionCenterRouter)
app.use('/api/homeworkClub', homeworkClubRouter)
app.use('/api/adminHomeworkClub', adminHomeworkClub)
app.use('/api/fetchStudentNames', fetchStudentNames)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
