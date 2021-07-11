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