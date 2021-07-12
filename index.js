require("dotenv").config();
const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json()) // => req.body

// ROUTES //

// Checking if the server is listening to our queries
app.listen(5000, () => {
    console.log("Server is Listening on Port 5000");
});

// Login Data
app.post('/userRegister', async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            username,
            password
        } = req.body;
        const RegisterUsers = await pool.query("INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4) RETURNING *",
            [firstname, lastname, username, password]
        );
        res.json(RegisterUsers.rows);
    } catch (error) {
        console.error(error.message);
    }
});

// Answers Submission
app.post('/userAnswers', async (req, res) => {
    try {
        const {
            users_id,
            answer_selected,
            correct_answer
        } = req.body;
        const SelectedAnswer = await pool.query("INSERT INTO answers (users_id, answer_selected, correct_answer) VALUES ($1, $2, $3) RETURNING *",
            [users_id, answer_selected, correct_answer]
        );
        res.json(SelectedAnswer.rows);
    } catch (err) {
        console.error(err.message);
    }
});