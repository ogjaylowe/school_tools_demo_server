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
        fname: "Billy",
        lname: "Bob",
        totalHours: 64,
        detentionHistory: [],
        homeworkClubHistory: []
    })

db.students.insert({
        fname: "Carmel",
        lname: "Valley",
        totalHours: 126,
        detentionHistory: [],
        homeworkClubHistory: []
    })
    
db.students.insert({
        fname: "Tom",
        lname: "Stillwater",
        totalHours: 243,
        detentionHistory: [],
        homeworkClubHistory: []
    })

*/