// this is the parent homework club API and may be removed!

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
var HomeworkClub = require('../models/HomeworkClub.model')
var Student = require('../models/Student.model')

// get Schema information from mongo db
router.post('/', function (req, res) {
    console.log(req.body.studentId)
    Student.findOne({ _id: "5ed6d408b937d05a4e6e10bc" })
        .populate('homeworkClubHistory')
        .exec(function (err, populated) {
            if (err) {
                res.send(err)
            } else {
                res.json(populated.homeworkClubHistory)
            }
        })
});


module.exports = router;