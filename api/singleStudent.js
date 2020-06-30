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

router.get('/', function(req, res) {
    res.send('response recieved')
}) 

// get Schema information for a single student from Mongo
router.post('/', function (req, res) {
    Student.findOne({ _id: req.body.studentId })
        .exec(function (err, student) {
            if (err) {
                res.send('error!')
            } else {
                res.json(student)
            }
        })
});

// update a student via PUT
router.put('/', function (req, res) {
    Student.findOneAndUpdate(
        { _id: req.body.studentId },
        { $inc: { totalHours: req.body.hoursUpdate } },
        { upsert: true },
        function (err) {
            if (err) {
                res.send('error')
            } else {
                res.status(204)
            }
        }
    )
  })

module.exports = router;