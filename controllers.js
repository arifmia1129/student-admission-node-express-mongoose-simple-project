const Student = require("./Student")

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(201).json({
            success: true,
            message: 'Successfully get students',
            students
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Couldn't get students",
            error: error.message
        })
    }
}
exports.getStudentById = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findOne({ _id: studentId });

        res.status(201).json({
            success: true,
            message: 'Successfully get student',
            student
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Couldn't get student",
            error: error.message
        })
    }
}

exports.addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();

        res.status(201).json({
            success: true,
            message: 'Successfully add student'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Couldn't add student",
            error: error.message
        })
    }
}