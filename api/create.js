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

// create a new parent and find/save their student as a property
router.post('/', function (req, res) {
    Student.findOne({ fname: req.body.studentFname, lname: req.body.studentLname })
        .exec(function (err, student) {
            if (err) {
                console.log(err)
            }

            var newParent = new Parent();
            newParent.fname = req.body.fname
            newParent.lname = req.body.lname
            newParent.email = req.body.email
            newParent.password = req.body.password
            newParent.student = student
            
            newParent.save(function (err, parent) {
                if (err) {
                    res.send('error')
                } else {
                    res.json(parent)
                }
            })
        })

    
})