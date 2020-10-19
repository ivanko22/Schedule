const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    maxAttend: Number,
    attendees: [ String ],
    teacher: String
});

module.exports = mongoose.model("Class", ClassSchema);



