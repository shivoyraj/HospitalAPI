const Patient = require('../models/patient');

// for register patient if that already exists will simply return patient object
exports.register = async (req, res) => {
  try {
    const { name, phoneNumber } = req.body;
    let patient = await Patient.findOne({ phoneNumber });

    if (patient) {
      return  res.json(patient);
    }

    patient = new Patient({
      name,
      phoneNumber
    });

    await patient.save();

    return res.json(patient);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
};