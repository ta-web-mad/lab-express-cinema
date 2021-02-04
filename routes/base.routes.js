const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.model')

// Endpoints

//HOME PAGE
router.get('/', (req, res) => res.render('index'))

// MOVIES DISPLAY
router.get('/movies', (req, res) => {
    Movie
        .find()
        .select('title').select('image')
        .then(movies => {
            res.render('movies', {movies})
        })
        .catch(err => console.log('Error:', err))
})

// MOVIE INFO
router.get('/movie/:id', (req, res) => {
    const movieID = req.params.id
    
    Movie
        .findById(movieID)
        .then(movie => res.render('movie-info.hbs', movie))
        .catch(err => console.log('Error:', err))
})






module.exports = router
