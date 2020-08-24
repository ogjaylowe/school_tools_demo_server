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
    fname: "Karl",
    lname: "H.",
    username: "karlh",
    password: "10432",
    email: "",
    student: ObjectId("5f32d0565864b3f5d055d8fb")
})

db.parents.insert({
    fname: "Jennifer",
    lname: "W.",
    username: "janep",
    password: "10404",
    email: "",
    student: ObjectId("5f32d4065864b3f5d055d907")
})

db.parents.insert({
    fname: "Laura",
    lname: "Z.",
    username: "lauraz",
    password: "10417",
    email: "",
    student: ObjectId("5f32d4065864b3f5d055d90b")
})
db.parents.insert({
    fname: "Violette",
    lname: "S.",
    username: "violettes",
    password: "10428",
    email: "",
    student: ObjectId("5f32d4055864b3f5d055d900")
})
db.parents.insert({
    fname: "Andrea",
    lname: "C.",
    username: "gerit",
    password: "10429",
    email: "",
    student: ObjectId("5f35bde75864b3f5d055d940")
})

db.parents.insert({
    fname: "Irene",
    lname: "C.",
    username: "irenec",
    password: "202021003",
    email: "",
    student: ObjectId("5f35bde75864b3f5d055d941")
})

db.parents.insert({
    fname: "Ken",
    lname: "D.",
    username: "kend",
    password: "202021004",
    email: "",
    student: ObjectId("5f35bde75864b3f5d055d942")
})

db.parents.insert({
    fname: "Mickey",
    lname: "E.",
    username: "mickeye",
    password: "202021005",
    email: "",
    student: ObjectId("5f35bde75864b3f5d055d943")
})


db.parents.insert({
    fname: "Sarah",
    lname: "T.",
    username: "saraht",
    password: "202021010",
    email: "",
    student: ObjectId("5f35bde75864b3f5d055d944")
})

db.parents.insert({
    fname: "Jessica",
    lname: "G.",
    username: "jessicag",
    password: "202021015",
    email: "",
    student: ObjectId("5f35bde85864b3f5d055d945")
})
db.parents.insert({
    fname: "Tim",
    lname: "H.",
    username: "timh",
    password: "202021013",
    email: "",
    student: ObjectId("5f35be4a5864b3f5d055d946")
})
db.parents.insert({
    fname: "Anna",
    lname: "C.",
    username: "annac",
    password: "202021012",
    email: "",
    student: ObjectId("5f35be4a5864b3f5d055d947")
})

db.parents.insert({
    fname: "Gene",
    lname: "K.",
    username: "genek",
    password: "202021008",
    email: "",
    student: ObjectId("5f35be4a5864b3f5d055d948")
})

db.parents.insert({
    fname: "Anissa",
    lname: "L.",
    username: "anissal",
    password: "202021006",
    email: "",
    student: ObjectId("5f35be4a5864b3f5d055d949")
})

db.parents.insert({
    fname: "Erin",
    lname: "M.",
    username: "erinm",
    password: "202021007",
    email: "",
    student: ObjectId("5f35be4b5864b3f5d055d94a")
})




db.parents.insert({
    fname: "Dennis",
    lname: "P.",
    username: "dennisp",
    password: "202021009",
    email: "",
    student: ObjectId("5f35be4b5864b3f5d055d94b")
})


db.parents.insert({
    fname: "Sarah",
    lname: "R.",
    username: "sarahr",
    password: "202021011",
    email: "",
    student: ObjectId("5f35be4b5864b3f5d055d94c")
})









db.parents.insert({
    fname: "Anna",
    lname: "C.",
    username: "annac",
    password: "202021012",
    email: "",
    student: ObjectId("5f35be4a5864b3f5d055d947")
})

db.parents.insert({
    fname: "Gene",
    lname: "K.",
    username: "genek",
    password: "202021008",
    email: "",
    student: ObjectId("5f35be4a5864b3f5d055d948")
})

db.parents.insert({
    fname: "Anissa",
    lname: "L.",
    username: "anissal",
    password: "202021006",
    email: "",
    student: ObjectId("5f35be4a5864b3f5d055d949")
})

db.parents.insert({
    fname: "Erin",
    lname: "M.",
    username: "erinm",
    password: "202021007",
    email: "",
    student: ObjectId("5f35be4b5864b3f5d055d94a")
})
*/