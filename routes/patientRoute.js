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
})

router.route("/:id").get((req,res) => {
    Consultation.findById(req.params.id)
    .then(foundPatient => res.json(foundPatient))
})

//delete specific patient
router.route("/:id").delete((req,res) => {
    Patient.findByIdAndDelete(req.params.id)
    .then(() => res.json(patientDeleted))
})

router.route("/:id").put((req,res) => {
    Patient.findById(req.params.id)
    .then(foundPatient => res.json(foundPatient))
    console.log(foundPatient)
})

// router.route('/update/:id').post((req, res) => {
//     Patient.findById(req.params.id)
//       .then(foundPatient => {
//         foundPatient.title = req.body.title;
//         foundPatient.lastname = req.body.lastname;
//         foundPatient.firstname = req.body.firstname;
//         foundPatient.mobile = req.body.mobile;
//         foundPatient.gender = req.body.gender;
//         foundPatient.allergies = req.body.allergies;
//         foundPatient.dob = req.body.dob;
//         foundPatient.diabetic = req.body.diabetic;
  
//         foundPatient.save()
//           .then(() => res.json('Patient updated!'))
//           .catch(err => res.status(400).json('Error: ' + err));
//       })
//       .catch(err => res.status(400).json('Error: ' + err));
//   });
  

module.exports = router;