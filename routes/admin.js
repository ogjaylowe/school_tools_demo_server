var express = require('express');
var router = express.Router();

var cors = require('cors')

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
    origin: "https://ogjaylowe.github.io/adminClient",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.use(cors(corsOptions));


// mongoDB connection via mongoose
var configValues = require('../config.js')
var mongoose = require('mongoose')

mongoose.connect(configValues.db), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// mongo Schema to be used
var Admin = require('../models/Admin.model')

// get Schema information from mongo db
router.get('/', function (req, res) {
    Admin.find({})
        .exec(function (err, admin) {
            if (err) {
                res.send('error!')
            } else {
                res.json(admin)
            }
        })
});

// check for a parent -- if none found return false (indicates not a user)
router.post('/', function (req, res) {
    console.log(req.body)
    Admin.findOne({ username: req.body.username, password: req.body.password})
        .exec(function (err, admin) {
            if (err) {
                res.send('error!')
            } else if (!admin) {
                res.send(false)
            } else {
                console.log(admin)
                res.json(admin)
            }
        })
});



module.exports = router;