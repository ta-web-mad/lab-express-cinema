const express = require('express')
const router = express.Router()

require('../configs/mongoose.config')
const Movie = require('../models/Movie.model')

// Endpoints
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(allMoviesfromDB => {
            //console.log('Las peliculas importadas:', allMoviesfromDB)
            res.render('movies', { allMoviesfromDB })
        })
        .catch(err => console.log('CRUD ERROR:', err))
})

router.get('/movie/:movieId', (req, res) => {
    //console.log('Vamos a ver la pelicula con ID:', req.params.movieId)
    Movie
        .findById(req.params.movieId)
        .then(foundMovie => {
            //console.log("Pelicula a buscar:", foundMovie.title)
            res.render('movie', foundMovie)
        })
        .catch(err => console.log('ERROR while reading MongoDB: ', err))
})

module.exports = router