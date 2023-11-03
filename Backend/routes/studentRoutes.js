const express = require('express');
const router = express.Router();

// Import your controllers
const studentController = require('../controllers/studentController');
const teacherController = require('../controllers/teacherController');
const courseController =  require('../controllers/marksController');

// Student Routes
router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

// Teacher Routes
// router.post('/teachers', teacherController.createTeacher);
// router.get('/teachers', teacherController.getAllTeachers);
// router.get('/teachers/:id', teacherController.getTeacherById);
// router.put('/teachers/:id', teacherController.updateTeacher);
// router.delete('/teachers/:id', teacherController.deleteTeacher);

// // Course Routes
// router.post('/courses', courseController.createCourse);
// router.get('/courses', courseController.getAllCourses);
// router.get('/courses/:id', courseController.getCourseById);
// router.put('/courses/:id', courseController.updateCourse);
// router.delete('/courses/:id', courseController.deleteCourse);

module.exports = router;
