const express = require('express');
const mysql = require ('mysql2');
const PORT = process.env.PORT || 3000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Password@123',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);


// db.query(''() {
 
// })

app.post('/api/add-movie', (req, res) => {
    const newMovie = req.body.movie_name;
    console.log(newMovie);
    db.query(`INSERT INTO movies (movie_name) VALUES (?);`, newMovie, (err, result) =>{
        if(err){
        throw err;
        res.json(err)
        }
  
        console.log('New movie added')
        res.json(result)
    })
});

app.get('/api/movies', (req, res) => {
    

    db.query(`SELECT * FROM movies;`, (err, result) =>{
        if(err){
        throw err;
        res.json(err)
        }
  
        console.log('Here are all the movies')
        res.json(result)
    })
});

app.delete('/api/movie/:id', (req, res) => {
    num = req.body; 

    db.query(`DELETE FROM movies WHERE id = ?`, num,(err, result) =>{
        if(err){
        throw err;
        res.json(err)
        }
  
        console.log('movie deleted')
        res.json(result)
    })
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});