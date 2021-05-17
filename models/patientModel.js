const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientsSchema = new Schema (
    {
    title: String,
    lastname: {type: String, required: true},
    firstname: {type: String, required: true},
    mobile: String,
    gender: String,
    allergies: [String],
    dob: {type: String, required: true},
    diabetic: String,
}
);

const Patient = mongoose.model("Patient", patientsSchema);

module.exports = Patient;