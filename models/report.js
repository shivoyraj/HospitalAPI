const mongoose = require("mongoose");

//Report schema with required fields patient , status and date of creation
const reportSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    status: {
        type: String,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;





