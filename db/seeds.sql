USE movies_db;

INSERT INTO movies (movie_name)
VALUES ('Mean Girls'),
       ('Shrek');

INSERT INTO reviews (movie_id, review)
VALUES (1, "A hilarious take on the millienial highschool experience"),
       (2, "Hilarious and irreverant"),
       (2, "Trash humor");
