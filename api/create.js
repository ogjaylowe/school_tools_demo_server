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