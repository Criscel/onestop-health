const mongoose = require("mongoose");

const consultationSchema = {
    date: Number,
    illness: String,
    diagnosis: String
}

const Consultation = mongoose.model("Consultation", consultationSchema);

module.exports = Consultation;