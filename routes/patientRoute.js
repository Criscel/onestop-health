const express = require("express");
const router = express.Router();
const Patient = require("../models/patientModel");

//configure the route to get and send data from database
router.route("/create").post((req, res) => {
    const title = req.body.title;
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const newPatient = new Patient({
        title,
        lastname,
        firstname
    });

    newPatient.save();
});

module.exports = router;