var express = require('express');
var router = express.Router();

// mongoDB connection via mongoose
var configValues = require('../config.js')
var mongoose = require('mongoose')

mongoose.connect(configValues.db), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// mongo Schema to be used
var Student = require('../models/Student.model')

// get Schema information from mongo db
router.get('/', function (req, res, next) {
  Student.find({})
    .exec(function (err, student) {
      if (err) {
        res.send('error!')
      } else {
        res.json(student)
      }
    })
});

// create a new student via POST
router.post('/', function (req, res) {  
  var newStudent = new Student();
  newStudent.fname = req.body.fname
  newStudent.lname = req.body.lname
  newStudent.totalHours = req.body.totalHours

  newStudent.save(function (err, student) {
    if (err) {
      res.send('error')
    } else {
      res.json(student)
    }
  })
})

// update a student via PUT
router.put('/', function (req, res) {
  Student.findOneAndUpdate(
      { _id: req.body.studentId },
      { $set: { totalHours: req.body.hoursUpdate } },
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

router.delete('/', function (req, res) {
  Student.findOneAndDelete(
      { _id: req.body.studentId },
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