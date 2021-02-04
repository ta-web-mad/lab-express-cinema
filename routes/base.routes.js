const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie.model')


// Endpoints
router.get('/', (req, res) => res.render('index'))




// listado de peliculas
router.get('/movies', (req, res)=>{

    Movie
        .find()
        .select('title')
        .select('image')
        .then(movies => {
            

            res.render('movies-list', {movies})})
        .catch(err => console.log('Error', err))
} )


// detalles de la pelicula
router.get('/detalles/:movieid', (req, res) => {

    const movie_id = req.params.movieid
    
    Movie
        .findById(movie_id)
        .then(themovie => {
            res.render('movie-details', themovie)})
        
        .catch(err => console.log('Error', err))
})


module.exports = router
