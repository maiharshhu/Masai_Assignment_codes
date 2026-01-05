const Doctor = require('../models/Doctor');
const Consultation = require('../models/Consultation');

// Soft Delete Doctor (Cascade Style)
exports.deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        await Doctor.findByIdAndUpdate(id, { isActive: false });
        // Cascade: Mark related consultations as inactive
        await Consultation.updateMany({ doctorId: id }, { isActive: false });
        res.json({ message: "Doctor and related consultations marked inactive." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /doctors/:id/patients
exports.getDoctorPatients = async (req, res) => {
    const consultations = await Consultation.find({ doctorId: req.params.id, isActive: true })
        .populate('patientId')
        .select('patientId consultedAt')
        .sort({ consultedAt: -1 }); // Sorted by time
    res.json(consultations);
};