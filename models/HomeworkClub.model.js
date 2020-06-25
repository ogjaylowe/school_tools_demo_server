var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HomeworkClubSchema = new Schema({
    date: Date,
    assignedBy: String,
    period: Number,
    class: String,
    type: String,
    reason: String,
    completed: Boolean
}, { collection: 'homeworkClubs' })

module.exports = mongoose.model('HomeworkClub', HomeworkClubSchema)

/*
db.homeworkClubs.insert({
    dateAssigned: Date(),
    dueDate: ,
    studentName: ,
    assignedBy: "Lowe",
    period: 5,
    class: "CSP",
    type: "homework",
    reason: "missing",
    completed: true
})

*/