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
var Parent = require('../models/Parent.model')

// get Schema information from mongo db
router.get('/', function (req, res) {
    Parent.find({})
        .exec(function (err, parent) {
            if (err) {
                res.send('error!')
            } else {
                res.json(parent)
            }
        })
});

// check for a parent -- if none found return false (indicates not a user)
router.post('/', function (req, res) {
    console.log(req.body)
    Parent.findOne({ username: req.body.username, password: req.body.password })
        .exec(function (err, parent) {
            if (err) {
                console.log(err)
            } else if (!parent) {
                res.send(false)
            } else {
                console.log(parent)
                res.json(parent)
            }

        })
});

/*
// create a new parent and connect them to their student via POST
router.post('/create', function (req, res) {
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
*/

module.exports = router;