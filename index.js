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
        console.log("test");
        const {
            firstname,
            lastname,
            username,
            password
        } = req.body;
        const RegisterUsers = await pool.query("INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4) RETURNING *",
            [firstname, lastname, username, password]
        );
        console.log("Passed this line");
        res.json(RegisterUsers.rows);
    } catch (error) {
        console.error(error.message);
    }
});

// Register Data

// Answers Submission

// Results