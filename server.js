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
    const newMovie = req.body;
    db.query('INSERT INTO movies (movie_name) VALUES (?)'),[newMovie.movie_name], (err, result) =>{
        if(err){
        throw err;
        res.json(err)
        }
  
        console.log('New movie added')
        res.json(result)
    }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});