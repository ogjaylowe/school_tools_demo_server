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
var CurrentDetentionEntry = require('../models/CurrentDetentionEntry.model')
var Student = require('../models/Student.model')

// get Schema information from mongo db
router.get('/', function (req, res) {
    CurrentDetentionEntry.find({})
        .populate('student')
        .exec(function (err, CurrentDetentionEntries) {
            if (err) {
                res.send(err)
            } else {
                console.log("GET success")
                res.json(CurrentDetentionEntries)
            }
        })
});

// create a new homeworkClubEntry and append it to the student for historical data keeping
router.post('/', function (req, res) {
    // this unique _id gets used as a reference during the appending step
    var _idForDetentionEntry = mongoose.Types.ObjectId()

    // find a student document based on the query data and use it as a property of the new homeworkClubEntry
    // note that the alternation in studentFname convension is due to splicing name data in frontend
    Student.findOne({ fname: req.body.studentFname, lname: req.body.studentLname })
        .exec(function (err, student) {
            if (err) {
                console.log(err)
            } else if (student == null) {
                console.log("null student value returned!")
            }

            console.log(req.body)

            // create a new entry based on data from user
            var newCurrentDetentionEntry = new CurrentDetentionEntry({
                _id: _idForDetentionEntry,
                date: req.body.date,
                assignedBy: req.body.assignedBy,
                period: req.body.period,
                class: req.body.class,
                description: req.body.description,
                student: student
            });

            console.log(newCurrentDetentionEntry)

            // save the homeworkClubEntry to the CurrentHomeworkClub collection
            newCurrentDetentionEntry.save(function (err, nCurrentDetentionEntry) {
                console.log("new entry process start")
                if (err) {
                    console.log(err)
                    res.send('error')
                } else {
                    // append homework club data on student's homework club history with saved _id from before
                    console.log(req.body)
                    Student.findOneAndUpdate(
                        { fname: req.body.studentFname, lname: req.body.studentLname },
                        { $push: { detentionHistory: _idForDetentionEntry } },
                        { upsert: true },
                        function (err) {
                            if (err) {
                                res.send('error')
                            } else {
                                console.log("current detention entry success")
                                res.json(nCurrentDetentionEntry)
                            }
                        }
                    )

                    
                }
            })
        })



})

router.delete('/', function (req, res) {
    console.log(req.body)
    CurrentDetentionEntry.findOneAndDelete(
        { _id: req.body.referenceId },
        function (err, obj1) {
            if (err) {
                res.send('error')
            } else {
                console.log("DELETE success")
                res.status(204)
            }
        }
    )
})

module.exports = router;