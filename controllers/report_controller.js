const Patient = require('../models/patient');
const Report = require('../models/report');


// create report of a patient on successfull it will return report object 
// patient validation is handled
exports.createReport = async (req, res) => {
    try {
        const { status } = req.body;
        const doctor = req.user;

        const patient = await Patient.findById(req.params.id);

        if (!patient) {
            return res.status(400).json({ msg: 'Patient not found' });
        }

        const report = new Report({
            createdBy: doctor._id,
            status,
            date: Date.now()
        });
        report.patient = patient._id;
        await report.save()
        patient.reports.push(report);
        await patient.save();

        return res.json(report);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
};

// get all reports of a particular patient
exports.getAllReports = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id)
            .populate('reports', 'status createdOn')

        if (!patient) {
            return res.status(400).json({ msg: 'Patient not found' });
        }

        return res.json(patient.reports);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
};


// get all reports of all patient with given status 
exports.getReportsByStatus = (req, res) => {
    const status = req.params.status;
    Report.find({ status })
        .populate('patient', 'name')
        .sort({ date: 1 })
        .then((reports) => {
            if (!reports) return res.status(404).send({ message: 'Reports not found' });
            res.status(200).send({ reports });
        })
        .catch((error) => {
            res.status(500).send({ message: error.message });
        });
};
