const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    isActive: { type: Boolean, default: true } // For soft deletion
});
module.exports = mongoose.model('Patient', patientSchema);