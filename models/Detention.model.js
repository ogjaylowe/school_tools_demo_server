var mongoose = require('mongoose')
var Schema = mongoose.Schema

var DetentionSchema = new Schema({
    date: Date,
    period: Number,
    assignedBy: String,
    length: Number,
    reason: String,
    completed: Boolean
})

module.exports = mongoose.model('Detention', DetentionSchema)

// db.detentions.insert({date: 12/12/1212, period: 3, assignedBy: "Smith", length: 30, reason: "refused directions", completed: true})