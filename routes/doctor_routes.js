const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor_controller');

// mapping incoming routes with respective controller methods
router.post('/register', doctorController.register);
router.post('/login', doctorController.login);

module.exports = router;
