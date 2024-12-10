const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    ReportId: { type: Number, required: true },
    AthleteId: { type: Number, required: true },
    UserId: { type: Number, required: true },
    Technical: { type: Number, default: 0 },
    Speed: { type: Number, default: 0 },
    CompetitiveAttitude: { type: Number, default: 0 },
    Intelligence: { type: Number, default: 0 },
    Height: { type: String, default: '' },
    Morphology: { type: String, default: '' },
    FinalRating: { type: Number, default: 0 },
    FreeText: { type: String, default: '' },
});

module.exports = mongoose.model('Report', reportSchema);
