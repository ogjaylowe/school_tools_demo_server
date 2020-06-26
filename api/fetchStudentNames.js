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

// testing connection command
mongoose.connection.on('connected', () => {
    console.log('connected')
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

var Student = require('../models/Student.model')

router.get('/', function (req, res) {
    console.log('Student Find exec')
    Student.find({})
        .exec(function (err, students) {
            if (err) {
                console.log(err)
                res.send('error!')
            } else {
                console.log("this is the console log for students, --> ", students)
                res.json(students)
            }
        })
})

module.exports = router