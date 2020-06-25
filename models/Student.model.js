var mongoose = require('mongoose')
var Schema = mongoose.Schema

var StudentSchema = new Schema({
    fname: String,
    lname: String,
    totalHours: Number,
    detentionHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Detention' }],
    homeworkClubHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HomeworkClub' }]
})

module.exports = mongoose.model('Student', StudentSchema)

/*
original_id = ObjectId()

db.students.insert({
        fname: "Proper",
        lname: "Student",
        totalHours: 100,
        detentionHistory: [],
        homeworkClubHistory: []
    })

*/