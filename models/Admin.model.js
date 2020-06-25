var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AdminSchema = new Schema({
    fname: String,
    lname: String,
    username: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('Admin', AdminSchema)

/*
db.admins.insert({
    fname: "Audrey",
    lname: "Wertz",
    username: "1",
    email: "awertz.com",
    password: "123",
})
*/