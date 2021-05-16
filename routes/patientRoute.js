const express = require("express");
const router = express.Router();
const Patient = require("../models/patientModel");
const Consultation = require("../models/consultationModel");

//configure the route to get and send data from database
router.route("/create").post((req, res) => {
    const title = req.body.title;
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const mobile = req.body.mobile;
    const gender = req.body.gender;
    const allergies = req.body.allergies;
    const dob = req.body.dob;
    const diabetic = req.body.diabetic;

    const newPatient = new Patient({
        title,
        lastname,
        firstname,
        mobile,
        gender,
        allergies,
        dob,
        diabetic
    });

    newPatient.save();
});

router.route("/createConsultation").post((req, res) => {
    const date = req.body.date
    const illness = req.body.illness;
    const diagnosis = req.body.diagnosis;
    const newConsultation = new Consultation({
        date,
        illness,
        diagnosis
    });

    newConsultation.save();
    console.log('save to mongoose!')
});

//another route to take page to /lists and get data from database
router.route("/lists").get((req,res) => {
    Patient.find()
    .then(foundPatients => res.json(foundPatients))
})

//select specific patient by id
router.route("/:id").get((req,res) => {
    Patient.findById(req.params.id)
    .then(foundPatient => res.json(foundPatient))
})

//delete specific patient
router.route("/:id").delete((req,res) => {
    Patient.findByIdAndDelete(req.params.id)
    .then(() => res.json(patientDeleted))
})


module.exports = router;