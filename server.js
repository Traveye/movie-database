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
    password: 'password',
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

app.get('/api/movies-reviews', (req,res) =>{

db.query(`SELECT * FROM movies LEFT JOIN reviews ON movies.id = reviews.movie_id`, (err, result) =>{
    if(err){
    throw err;
    res.json(err)
    }

    console.log('Here is a list of movie reviews')
    res.json(result)
})
app.put('/api/review/:id', (req, res) =>{

    let reviewUpdate = req.body.review;
    let reviewID = req.body.id;

    dq.query(`UPDATE reviews SET review= ? WHERE id = ?`, [reviewUpdate, reviewID], (err, result) => {
        if(err){
            throw err;
        }
        console.log("Updated review")
        res.json(result);
    })
})
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});