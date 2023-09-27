const express = require('express');
const router = express.Router();
const { CourseController } = require('../controllers');

// Routes for Courses
router.get('/', CourseController.getAllCourses);
router.get('/:id/students', CourseController.getCourseStudent);
router.post('/create', CourseController.createCourse);
router.post('/update/:id', CourseController.updateCourse);
router.get('/delete/:id', CourseController.deleteCourse);

module.exports = router;