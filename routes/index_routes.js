const express = require("express");
const router = express.Router();
const fs = require('fs')

const doctorRoutes = require("./doctor_routes");
const patientRoutes = require("./patient_routes");
const reportRoutes = require("./report_routes");

// reroute different incoming request to their respective routers
router.use("/doctors", doctorRoutes);
router.use("/patients", patientRoutes);
router.use("/reports", reportRoutes);

router.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile('index.html', function (err, data) {
        if (err) 
            return res.end('<h1>Error!</h1>')
        return res.end(data)
    });
});

module.exports = router;
