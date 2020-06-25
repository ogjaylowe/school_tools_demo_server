var express = require('express');
var router = express.Router();

// modified URL
var mongoose = require('mongoose')
var dev_db_url = "mongodb+srv://jlowe:SgtPepper10@webappdb-7ymjf.mongodb.net/orion?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB), {
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