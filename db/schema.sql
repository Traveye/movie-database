DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_name VARCHAR(100)
);

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
    id INT,
    movie_id INT,
    review TEXT,
    FOREIGN KEY(movie_id)
    REFERENCES movies (id)
    ON DELETE SET NULL
);