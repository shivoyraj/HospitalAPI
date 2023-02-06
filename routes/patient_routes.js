const express = require('express');
const {authenticate} = require('../config/jwt');
const router = express.Router();
const patientController = require('../controllers/patient_controller');
const reportController = require('../controllers/report_controller')

// mapping incoming routes with respective controller methods
router.post('/register', authenticate,patientController.register);
router.post('/:id/create_report',authenticate, reportController.createReport);
router.get('/:id/all_reports', reportController.getAllReports);

module.exports = router;
