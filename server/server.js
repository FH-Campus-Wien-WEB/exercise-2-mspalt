const express = require('express')
const path = require('path')
const movies = require('./movie-model')
const app = express()

app.use(express.json());
app.use(express.static(path.join(__dirname, 'files')));

app.get('/movies', function (req, res) {
  res.json(Object.values(movies))
})

app.get('/movies/:imdbID', function (req, res) {
  const movie = movies[req.params.imdbID];
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send('Movie not found');
  }
})

app.put('/movies/:imdbID', function (req, res) {
  const imdbID = req.params.imdbID;
  const movieData = req.body;

  // Ensure the imdbID in the body matches the one in the URL, or set it from the URL
  movieData.imdbID = imdbID;

  if (movies[imdbID]) {
    movies[imdbID] = movieData;
    res.status(200).send();
  } else {
    movies[imdbID] = movieData;
    res.status(201).json(movieData);
  }
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")