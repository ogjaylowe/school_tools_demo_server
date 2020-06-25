var express = require('express');
var router = express.Router();

// connection to mongo
var mongoose = require('mongoose')
var db = "mongodb+srv://jlowe:SgtPepper10@webappdb-7ymjf.mongodb.net/orion?retryWrites=true&w=majority";
mongoose.connect(db), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

var Student = require('../models/Student.model')

router.get('/', function (req, res) {
    Student.find({})
        .exec(function (err, students) {
            if (err) {
                res.send('error!')
            } else {
                res.json(students)
            }
        })
})

module.exports = router