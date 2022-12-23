const { findOneAndUpdate } = require("./Student");
const Student = require("./Student")

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.render('index', { students, error: {} })

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
exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await Student.deleteOne({ _id: id });
        const students = await Student.find();
        res.render('index', { students, error: {} })
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
        let error = {};
        const { name, fathersName, mothersName, className, guardiansMobile, id } = req.body;

        if (!name) {
            error.name = 'Please provide a name'
        }
        if (!fathersName) {
            error.fathersName = 'Please provide a father name'
        }
        if (!mothersName) {
            error.mothersName = 'Please provide a mother name'
        }
        if (!className) {
            error.className = 'Please provide a class name'
        }
        if (!guardiansMobile) {
            error.guardiansMobile = 'Please provide a mobile number'
        }

        const isValid = Object.keys(error).length == 0;
        const students = await Student.find();
        if (!isValid) {
            return res.render('index', { students, error })
        }

        if (id) {
            const result = await Student.findOneAndUpdate({ _id: id }, {
                $set: {
                    name,
                    fathersName,
                    mothersName,
                    class: className,
                    guardiansMobile
                }
            })
            const students = await Student.find();
            res.render('index', { students, error: {} })

        } else {
            const student = new Student({
                name,
                fathersName,
                mothersName,
                class: className,
                guardiansMobile
            });
            await student.save();
            const latestStudents = await Student.find();
            res.render('index', { students: latestStudents, error: {} })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Couldn't add student",
            error: error.message
        })
    }
}