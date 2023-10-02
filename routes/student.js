const express = require('express');
const router = express.Router();
const { StudentController } = require('../controllers');

// Routes for Students
router.get('/', StudentController.getAllStudents);
router.post('/create', StudentController.createStudent);
router.get('/:id/courses', StudentController.getStudentCourse);
router.post('/update/:id', StudentController.updateStudent);
router.get('/delete/:id', StudentController.deleteStudent);
router.get('/:id/enroll', StudentController.getRegisterCourse);
router.get('/:id/enroll/:courseId', StudentController.registerCourse)

module.exports = router;
