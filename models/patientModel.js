const mongoose = require("mongoose");

const patientsSchema = {
    title: String,
    lastname: String,
    firstname: String
}

const Patient = mongoose.model("Patient", patientsSchema);

module.exports = Patient;