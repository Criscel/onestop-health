const mongoose = require("mongoose");

const patientsSchema = {
    title: String,
    lastname: String,
    firstname: String,
    mobile: Number,
    gender: String,
    allergies: String,
    dob: String,
    diabetic: String,
}

const Patient = mongoose.model("Patient", patientsSchema);

module.exports = Patient;