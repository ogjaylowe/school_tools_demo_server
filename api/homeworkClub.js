// NOTE* this gets used with parent homework club view and is up for slashing

var express = require('express');
var router = express.Router();

// connection to mongo
var mongoose = require('mongoose')
var db = "mongodb+srv://jlowe:SgtPepper10@webappdb-7ymjf.mongodb.net/WebAppDB?retryWrites=true&w=majority";
mongoose.connect(db), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

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