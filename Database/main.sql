-- Creating the Database

CREATE DATABASE CodeWind;

-- \c into CodeWind: To connect a specified database
-- \d table name: To view the table created

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    userName VARCHAR(255),
    passWord VARCHAR(255)
);

-- Teachers Table
CREATE TABLE IF NOT EXISTS teachers (
    teacher_id SERIAL PRIMARY KEY,
    tfirstname VARCHAR(255),
    tlastname VARCHAR(255),
    tusername VARCHAR(255),
    tpassword VARCHAR(255)
);

-- Answers Table
CREATE TABLE IF NOT EXISTS answers (
    id SERIAL PRIMARY KEY,
    users_id INT,
    answer_selected VARCHAR(10),
    correct_answer VARCHAR(10)
);