var express = require('express');
var router = express.Router();

// connection to mongo
var mongoose = require('mongoose')
var db = 'mongodb://localhost/complete';
mongoose.connect(db);

var Detention = require('../models/Detention.model')
var Student = require('../models/Student.model')

// get Schema information from mongo db
router.post('/', function (req, res) {
    Student.findOne({ _id: req.body.studentId })
        .populate('detentionHistory')
        .exec(function (err, populated) {
            if (err) {
                res.send(err)
            } else {
                res.json(populated.detentionHistory)
            }
        })
});

router.get('/', function (req, res) {
    res.send('response recieved')
})

module.exports = router;