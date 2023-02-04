const express = require("express");
const router = express.Router();

const doctorRoutes = require("./doctor_routes");
const patientRoutes = require("./patient_routes");
const reportRoutes = require("./report_routes");

router.use("/doctors", doctorRoutes);
router.use("/patients", patientRoutes);
router.use("/reports", reportRoutes);

module.exports = router;
