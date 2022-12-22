const Student = require("./Student")

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json({
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

        res.status(200).json({
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
exports.updateStudentById = async (req, res) => {
    try {
        const { studentId } = req.params;
        await Student.updateOne({ _id: studentId }, req.body);

        res.status(201).json({
            success: true,
            message: 'Successfully update student',
            student: req.body
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Couldn't update student",
            error: error.message
        })
    }
}
exports.deleteStudentById = async (req, res) => {
    try {
        const { studentId } = req.params;
        await Student.deleteOne({ _id: studentId });

        res.status(201).json({
            success: true,
            message: 'Successfully delete student'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Couldn't delete student",
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