const express = require("express");
const router = express.Router();

const doctorRoutes = require("./doctor_routes");
const patientRoutes = require("./patient_routes");
const reportRoutes = require("./report_routes");

// reroute different incoming request to their respective routers
router.use("/doctors", doctorRoutes);
router.use("/patients", patientRoutes);
router.use("/reports", reportRoutes);

module.exports = router;
