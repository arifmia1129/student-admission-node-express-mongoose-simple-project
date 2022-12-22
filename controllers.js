const Student = require("./Student")

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