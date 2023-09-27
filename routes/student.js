const express = require('express');
const router = express.Router();
const { StudentController } = require('../controllers');

// Routes for Students
router.get('/', StudentController.getAllStudents);
router.post('/create', StudentController.createStudent);
// router.get('/students/:id', StudentController.getStudentById);
router.get('/:id/courses', StudentController.getStudentCourse);
router.post('/update/:id', StudentController.updateStudent);
router.get('/delete/:id', StudentController.deleteStudent);

module.exports = router;
