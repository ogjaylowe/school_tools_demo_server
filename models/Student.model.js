var mongoose = require('mongoose')
var Schema = mongoose.Schema

var StudentSchema = new Schema({
    fname: String,
    lname: String,
    totalHours: Number,
    detentionHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Detention' }],
    homeworkClubHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HomeworkClub' }],
    checkInHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CheckIn' }]
})

module.exports = mongoose.model('Student', StudentSchema)

/*
original_id = ObjectId()

db.students.insert({
        fname: "Oliver",
        lname: "H.",
        totalHours: 0,
        detentionHistory: [],
        homeworkClubHistory: [],
        checkInHistory: []
    })

db.students.insert({
        fname: "Hannah",
        lname: "H.",
        totalHours: 0,
        detentionHistory: [],
        homeworkClubHistory: [],
        checkInHistory: []
    })

db.students.insert({
        fname: "Zachary",
        lname: "K.",
        totalHours: 0,
        detentionHistory: [],
        homeworkClubHistory: [],
        checkInHistory: []
    })

db.students.insert({
        fname: "Jonathan",
        lname: "L.",
        totalHours: 0,
        detentionHistory: [],
        homeworkClubHistory: [],
        checkInHistory: []
    })

db.students.insert({
        fname: "Giana",
        lname: "M.",
        totalHours: 0,
        detentionHistory: [],
        homeworkClubHistory: [],
        checkInHistory: []
    })

db.students.insert({
        fname: "Aristotle",
        lname: "P.",
        totalHours: 0,
        detentionHistory: [],
        homeworkClubHistory: [],
        checkInHistory: []
    })

db.students.insert({
        fname: "Tommy",
        lname: "R.",
        totalHours: 0,
        detentionHistory: [],
        homeworkClubHistory: [],
        checkInHistory: []
    })

db.students.insert({
        fname: "Elliot",
        lname: "G.",
        totalHours: 0,
        detentionHistory: [],
        homeworkClubHistory: [],
        checkInHistory: []
    })

db.students.insert({
        fname: "Alexander",
        lname: "G.",
        totalHours: 0,
        detentionHistory: [],
        homeworkClubHistory: [],
        checkInHistory: []
    })
*/