const router = require('express').Router();
const studentControllers = require('./controllers')

router.route('/')
    .post(studentControllers.addStudent)

module.exports = router;