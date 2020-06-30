var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

var cors = require('cors')

var configValues = require('../config.js')

// CORS security options and pre-flight
router.options('/', cors()) // enable pre-flight request for POST request
router.use(cors(configValues.corsOptions));

// mongoDB connection via mongoose
mongoose.connect(configValues.db), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// mongo Schema to be used
var Student = require('../models/Student.model')

router.get('/', function (req, res) {
    console.log('Student Find exec')
    Student.find({})
        .exec(function (err, students) {
            if (err) {
                console.log(err)
                res.send('error!')
            } else {
                console.log("this is the console log for students, --> ", students)
                res.json(students)
            }
        })
})

module.exports = router