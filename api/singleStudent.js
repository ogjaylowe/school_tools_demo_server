var express = require('express' );
var router = express.Router();

// connection to mongo
var mongoose = require('mongoose')
var db = "mongodb+srv://jlowe:SgtPepper10@webappdb-7ymjf.mongodb.net/orion?retryWrites=true&w=majority";
mongoose.connect(db), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

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