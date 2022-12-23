const router = require('express').Router();
const studentControllers = require('./controllers')

router.route('/')
    .get(studentControllers.getStudents)
    .post(studentControllers.addStudent)


router.route('/:studentId')
    .get(studentControllers.getStudentById)
    .put(studentControllers.updateStudentById)
    .delete(studentControllers.deleteStudentById)

// delete student from html page
router.get('/delete/:id', studentControllers.deleteStudent)

module.exports = router;