var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CurrentDetentionSchema = new Schema({
    date: Date,
    assignedBy: String,
    period: String,
    class: String,
    description: String,
    student: {type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
}, { collection: 'currentDetentionEntries' })

module.exports = mongoose.model('CurrentDetentionEntry', CurrentDetentionSchema)

/*
db.currentDetentionEntries.insert({
    date: 06/01/2020,
    assignedBy: "Lowe", 
    period: 5, 
    class: "Intro to Technology", 
    description: "test 1",
    student: ObjectId("5ef4c438d1599c4bcac2a769")
})

*/