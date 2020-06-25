var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CurrentHomeworkClubSchema = new Schema({
    date: Date,
    assignedBy: String,
    period: String,
    class: String,
    description: String,
    student: {type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
}, { collection: 'currentHomeworkClubEntries' })

module.exports = mongoose.model('CurrentHomeworkClubEntry', CurrentHomeworkClubSchema)

/*
db.currentHomeworkClubEntries.insert({
    date: 06/01/2020,
    assignedBy: "Lowe", 
    period: 5, 
    class: "Intro to Technology", 
    description: "test 1",
    student: ObjectId("5eb0a14c8ec536f27b41a3b0")
})

*/