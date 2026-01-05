const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');

// --- TASK 1: Student & Course APIs ---
router.post('/students', async (req, res) => {
    const student = await Student.create(req.body);
    res.status(201).json(student);
});

router.post('/courses', async (req, res) => {
    const course = await Course.create(req.body);
    res.status(201).json(course);
});

// --- TASK 2: Enroll API ---
router.post('/enroll', async (req, res) => {
    const { studentId, courseId } = req.body;
    const student = await Student.findById(studentId);
    const course = await Course.findById(courseId);

    if (!student?.isActive || !course?.isActive) {
        return res.status(400).json({ error: "Both student and course must be active." });
    }
    const enrollment = await Enrollment.create({ studentId, courseId });
    res.status(201).json(enrollment);
});

// --- TASK 3: Soft Delete ---
router.delete('/students/:id', async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, { isActive: false });
    await Enrollment.updateMany({ studentId: req.params.id }, { isActive: false });
    res.json({ message: "Student and related enrollments deactivated." });
});

router.delete('/courses/:id', async (req, res) => {
    await Course.findByIdAndUpdate(req.params.id, { isActive: false });
    await Enrollment.updateMany({ courseId: req.params.id }, { isActive: false });
    res.json({ message: "Course and related enrollments deactivated." });
});

// --- TASK 4: List APIs ---
router.get('/students/:id/courses', async (req, res) => {
    const enrollments = await Enrollment.find({ studentId: req.params.id, isActive: true })
        .populate({ path: 'courseId', match: { isActive: true } });

    // Filter out nulls if the course itself was inactive
    const activeCourses = enrollments.map(e => e.courseId).filter(c => c !== null);
    res.json(activeCourses);
});

router.get('/courses/:id/students', async (req, res) => {
    const enrollments = await Enrollment.find({ courseId: req.params.id, isActive: true })
        .populate({ path: 'studentId', match: { isActive: true } });

    const activeStudents = enrollments.map(e => e.studentId).filter(s => s !== null);
    res.json(activeStudents);
});

module.exports = router;