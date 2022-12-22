const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('<h1>Welcome to Student Admission Node Express Mongoose Simple Project')
})

const port = process.env.PORT || 8080;

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1/studentAdmission')
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on PORT ${port}`);
        })
    })
    .catch((error) => {
        console.log(error.message)
    })