-- MySQL initialization script
CREATE DATABASE healthdata;

USE healthdata;

CREATE TABLE data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    heartRate INT NOT NULL,
    temperature INT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
