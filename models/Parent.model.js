var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ParentSchema = new Schema({
    fname: String,
    lname: String,
    username: String,
    password: String,
    email: String,
    password: String,
    student: {type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
})

module.exports = mongoose.model('Parent', ParentSchema)

/*
db.parents.insert({
    fname: "Biggy",
    lname: "Cottontail",
    username: "4",
    password: "123",
    email: "pcottontail_forest.com",
    student: ObjectId("5ed6d408b937d05a4e6e10bc")
})
*/