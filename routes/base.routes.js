const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.models')

// Endpoints
router.get('/', (req, res) => res.render('index'))

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(moviesInDatabase => res.render('./movies/movies', { moviesInDatabase }))
})

router.get('/movie/:id', (req, res) => {
    console.log(req.params.id)

    Movie
        .findById(req.params.id)
        .then(movieById => res.render('./movies/movie', movieById))
})


module.exports = router
