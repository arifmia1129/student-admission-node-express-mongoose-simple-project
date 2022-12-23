const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const studentRouter = require('./routes');


const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/student', studentRouter)

app.get('/', (req, res) => {
    res.redirect('/api/student')
})

const port = process.env.PORT || 8080;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on PORT ${port}`);
        })
    })
    .catch((error) => {
        console.log(error.message)
    })