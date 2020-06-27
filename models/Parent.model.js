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
    fname: "Huck",
    lname: "Stillwater",
    username: "hstillwater",
    password: "123",
    email: "asdf.com",
    student: ObjectId("5ef63cf5d1599c4bcac2a770")
})
*/