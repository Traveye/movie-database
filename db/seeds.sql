USE movies_db;

INSERT INTO movies (id, movie_name)
VALUES (1, 'Mean Girls'),
       (2, 'Shrek');

INSERT INTO reviews (id, movie_id, review)
VALUES (1, 1, "A hilarious take on the millienial highschool experience"),
       (2, 2, "Hilarious and irreverant"),
       (3, 2, "Trash humor");
