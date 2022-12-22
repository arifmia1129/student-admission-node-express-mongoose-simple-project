const router = require('express').Router();
const studentControllers = require('./controllers')

router.route('/')
    .get(studentControllers.getStudents)
    .post(studentControllers.addStudent)

module.exports = router;