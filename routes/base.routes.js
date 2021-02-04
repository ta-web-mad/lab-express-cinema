const express = require('express')
const router = express.Router()


const Movie = require('./../models/Movie.model')


// Endpoints
router.get('/', (req, res) => res.render('index'))



router.get('/movies-list', (req, res) => {

        Movie
                .find()
                .select('title')
                .select('image')
                .then(movies => res.render('movies-list', { movies}))
                .catch(err => console.log('ERROR:', err))
})




router.get('/movies/description/:id', (req, res) => {
        const movieid = req.params.id
        Movie
        .findById(movieid)
        .then(movie => res.render('movies-description', movie))
        .catch(err => console.log(err))          

})

        module.exports = router
