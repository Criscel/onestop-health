const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const consultationSchema = new Schema (
    {
    date: {type: String, required: true},
    patientId: {type: mongoose.Schema.Types.ObjectId, ref: "Patient"},
    // patientId: {type: String, required: true},
    // lastname: {type: mongoose.Schema.Types.ObjectId, ref: "Patient"},
    // firstname: {type: mongoose.Schema.Types.ObjectId, ref: "Patient"},
    lastname: {type: String, required: true},
    firstname: {type: String, required: true},
    illness: {type: String, required: true},
    diagnosis: {type: String, required: true},
    consultant: {type: String, required: true},
}
);

const Consultation = mongoose.model("Consultation", consultationSchema);

module.exports = Consultation;