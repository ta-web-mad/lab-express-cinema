const express = require('express')
const router = express.Router()
const Movie = require('./../models/movie.model')
// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/movies', (req, res) => {

    Movie 
        .find()
        .then(movies => res.render('movies',{movies}))
        .catch(err=>console.log('ERROR:',err))
})
        

router.get('/movies/:id', (req, res) => {
    console.log('Los detalles de la peli')
//En la consola me aparece, por eso seguí...
    Movie
        .findById(req.param.id)
        .then(movies => res.render('movie-details', { movies }))
        .catch(err => console.log('ERROR:', err))
})


module.exports = router
