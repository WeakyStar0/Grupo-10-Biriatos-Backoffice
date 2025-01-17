const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    reportId: { type: Number, required: true },
    athleteId: { type: Number, required: true },
    userId: { type: Number, required: true },
    technical: { type: Number, required: true },
    speed: { type: Number, required: true },
    competitiveAttitude: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    height: { type: String, required: true },
    morphology: { type: String, required: true },
    finalRating: { type: Number, required: true },
    freeText: { type: String },
});

module.exports = mongoose.model('Report', ReportSchema);
