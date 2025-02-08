const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamId: { type: Number, required: true, unique: true },
  teamName: { type: String, required: true, unique: true },
  escalao: { type: String},
  teamType: { type: String, enum: ['Own', 'Shadow', 'Club'], required: true },
  tasks: { type: [Number], default: [] },
});

module.exports = mongoose.model('Team', teamSchema);
