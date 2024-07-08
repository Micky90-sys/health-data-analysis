const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  heartRate: { type: Number, required: true },
  temperature: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Data = mongoose.model('Data', dataSchema);
module.exports = Data;
