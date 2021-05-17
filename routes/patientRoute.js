const express = require("express");
const Consultation = require("../models/consultationModel");
const router = express.Router();
const Patient = require("../models/patientModel");

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
    console.log('patient save to mongoose!')
});

router.route("/createConsultation").post((req, res) => {
    const date = req.body.date;
    const patientId = req.body.patientId;
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const illness = req.body.illness;
    const diagnosis = req.body.diagnosis;
    const consultant = req.body.consultant;
    const newConsultation = new Consultation({
        date,
        patientId,
        lastname,
        firstname,
        illness,
        diagnosis,
        consultant
    });

    newConsultation.save();
    console.log('consultation save to mongoose!')
});

//another route to take page to /lists and get data from database
router.route("/lists").get((req,res) => {
    Patient.find()
    .then(foundPatients => res.json(foundPatients))
    console.log("patient list below")
})

//select specific patient by id
router.route("/:id").get((req,res) => {
    Patient.findById(req.params.id)
    .then(foundPatient => res.json(foundPatient))
});


router.route("/:id").get((req,res) => {
    Consultation.findById(req.params.id)
    .then(foundPatient => res.json(foundPatient))
});

//delete specific patient
router.route("/:id").delete((req,res) => {
    Patient.findByIdAndDelete(req.params.id)
    .then(() => res.json('Patient deleted.'))
});

// update specific patient
router.route("/update/:id").put((req,res) => {
    Patient.findById(req.params.id)
    .then(patient => {
    patient.title = req.body.title;
    patient.lastname = req.body.lastname;
    patient.firstname = req.body.firstname;
    patient.mobile = req.body.mobile;
    patient.gender = req.body.gender;
    patient.allergies = req.body.allergies;
    patient.dob = req.body.dob;
    patient.diabetic = req.body.diabetic;
    patient.save()
    })
    console.log('patient updated to mongoose!')
});


// app.get("/populatedview", (req, res) => {
//     db.User.find({})
//       .populate("notes")
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
  
  


module.exports = router;