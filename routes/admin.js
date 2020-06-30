var express = require('express');
var router = express.Router();
var cors = require('cors')



// mongoDB connection via mongoose
var configValues = require('../config.js')
var mongoose = require('mongoose')

mongoose.connect(configValues.db), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// mongo Schema to be used
var Admin = require('../models/Admin.model')



// cors origin URL - Allow inbound traffic from origin
corsOptions = {
    origin: "https://ogjaylowe.github.io/school_tools_frontend_fresh/",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};


//corsOptions = { origin: false }
router.options('/', cors()) // enable pre-flight request for POST request
router.use(cors(corsOptions));

/*
router.get('/', cors(corsOptions), function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for only example.com.' })
})
*/

// get Schema information from mongo db
router.get('/', cors(corsOptions), function (req, res) {
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
router.post('/', cors(corsOptions), function (req, res) {
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