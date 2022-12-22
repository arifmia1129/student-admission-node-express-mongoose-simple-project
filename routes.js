const router = require('express').Router();
const studentControllers = require('./controllers')

router.route('/')
    .get(studentControllers.getStudents)
    .post(studentControllers.addStudent)


router.route('/:studentId')
    .get(studentControllers.getStudentById)

module.exports = router;