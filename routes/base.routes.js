const express = require('express')
const Movie = require('../models/movie.model')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => res.render("movies", {movies}))
        .catch(err => console.log("ERROR", err))
})

router.get('/details/:movie_id', (req, res) => {

    const movie_id = req.params.movie_id
    Movie
        .findById(movie_id)
        .then(movie => res.render("movies-details", movie))
        .catch(err => console.log("ERROR", err))
})




module.exports = router
