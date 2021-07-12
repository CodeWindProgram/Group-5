-- Creating the Database

CREATE DATABASE CodeWind;

-- \c into CodeWind

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    userName VARCHAR(255),
    passWord VARCHAR(255)
);

-- Answers Table
CREATE TABLE IF NOT EXISTS answers (
    id SERIAL PRIMARY KEY,
    users_id INT,
    answer_selected VARCHAR(10),
    correct_answer VARCHAR(10)
);