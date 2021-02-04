const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

// Endpoints
router.get('/', (req, res) => {
    Movie
        .find()
        .select('title image')
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log('ERROR:', err))
})

router.get('/:title/:id', (req, res) => {

    const movieId = req.params.id

    Movie
        .findById(movieId)
        .then(movie => res.render('movie_details', movie))
        .catch(err => console.log('ERROR:', err))
})

module.exports = router