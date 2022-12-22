const { Schema, model } = require('mongoose');


const studentSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 20,
        minlength: 3
    },
    class: {
        type: String,
        required: true
    },
    fathersName: {
        type: String,
        required: true
    },
    mothersName: {
        type: String,
        required: true
    },
    guardiansMobile: {
        type: String,
        required: true,
        maxlength: 15,
        minlength: 11
    }
})

const Student = model('Student', studentSchema);

module.exports = Student;