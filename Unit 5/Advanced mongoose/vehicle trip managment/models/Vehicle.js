const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    distance: {
        type: Number,
        required: true,
        min: [0.01, 'Distance must be greater than 0'] // Validation: distance > 0
    },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
});

const vehicleSchema = new mongoose.Schema({
    registrationNumber: {
        type: String,
        required: true,
        unique: true // Validation: must be unique
    },
    type: {
        type: String,
        required: true,
        enum: ['car', 'truck', 'bike'] // Enum validation
    },
    model: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    trips: [tripSchema] // Nested subdocuments
});

module.exports = mongoose.model('Vehicle', vehicleSchema);