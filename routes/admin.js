var express = require('express');
var router = express.Router();
var cors = require('cors')

var configValues = require('../config.js')

// mongoDB connection via mongoose
var mongoose = require('mongoose')

mongoose.connect(configValues.db), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// mongo Schema to be used
var Admin = require('../models/Admin.model')


// CORS security options and pre-flight
console.log(configValues.corsOptions)
router.options('/', cors()) // enable pre-flight request for POST request
router.use(cors(configValues.corsOptions));


// get Schema information from mongo db
router.get('/', cors(configValues.corsOptions), function (req, res) {
  Admin.find({})
      .exec(function (err, admin) {
          if (err) {
              res.send(err)
          } else {
              res.json(admin)
          }
      })
});


// check for a parent -- if none found return false (indicates not a user)
router.post('/', cors(configValues.corsOptions), function (req, res) {
    console.log("POST body --> ", req.body)
    Admin.findOne({ username: req.body.username, password: req.body.password })
        .exec(function (err, admin) {
            if (err) {
                res.send(err)
            } else if (!admin) {
                console.log("no admin with cred found")
                res.send(false)
            } else {
                console.log(admin)
                res.json(admin)
            }
        })
});



module.exports = router;