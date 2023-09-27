const express = require('express');
const router = express.Router();
const { EnrollmentController } = require('../controllers');

// Routes for Enrollments
router.get('/', EnrollmentController.getAllEnrollments);
router.post('/create', EnrollmentController.createEnrollment);
router.post('/update/:id', EnrollmentController.updateEnrollment);
router.delete('/delete/:id', EnrollmentController.deleteEnrollment);

module.exports = router;
