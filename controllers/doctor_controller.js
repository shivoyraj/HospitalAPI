const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctor");
const { secret } = require("../config/jwt");

// Register a new doctor with handing validations if already exists will throw response with code 400
exports.register = async (req, res) => {
    try {
        let doctor = await Doctor.findOne({
            username: req.body.username,
            password: req.body.password
        });
        if (doctor)
            return res.status(400).send({ error: "Doctor with this username already exists" });
        doctor = new Doctor({
            username: req.body.username,
            password: req.body.password,
        });
        await doctor.save();
        res.status(201).send({ message: "Doctor registered successfully" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Login a doctor on successfull will return jwt token and also validation is handled
exports.login = async (req, res) => {
    try {
        const doctor = await Doctor.findOne({
            username: req.body.username,
            password: req.body.password,
        });
        if (!doctor) {
            return res.status(401).send({ error: "Invalid username or password" });
        }
        const token = jwt.sign({ id: doctor._id }, secret, {
            expiresIn: 86400,
        });
        res.status(200).send({ token });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};