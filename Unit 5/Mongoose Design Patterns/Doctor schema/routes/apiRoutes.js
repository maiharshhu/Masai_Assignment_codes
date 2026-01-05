const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const Consultation = require('../models/Consultation');
const doctorCtrl = require('../controllers/doctorController');

// 1. Basic CRUD
router.post('/doctors', async (req, res) => {
    const doc = await Doctor.create(req.body);
    res.status(201).json(doc);
});

router.post('/consultations', async (req, res) => {
    const { doctorId, patientId } = req.body;
    const doc = await Doctor.findById(doctorId);
    const pat = await Patient.findById(patientId);

    // Only allow if both are active
    if (!doc?.isActive || !pat?.isActive) {
        return res.status(400).json({ error: "Doctor or Patient is inactive." });
    }
    const consultation = await Consultation.create(req.body);
    res.status(201).json(consultation);
});

// 2. Read Operations using inbuilt functions
router.get('/patients', async (req, res) => {
    // Return all active male patients
    const patients = await Patient.find({ gender: "Male", isActive: true });
    res.json(patients);
});

router.get('/consultations/recent', async (req, res) => {
    // Return last 5 active consultations
    const recent = await Consultation.find({ isActive: true })
        .sort({ consultedAt: -1 })
        .limit(5);
    res.json(recent);
});

// 3. Soft Delete Routes
router.delete('/doctors/:id', doctorCtrl.deleteDoctor);

module.exports = router;