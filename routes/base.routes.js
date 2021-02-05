const express = require('express')
const {Mongoose} = require('mongoose')
const router = express.Router()
const Movie = require('./../models/Movie.model')

// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get("/movies", (req, res) => {
    Movie
        .find()
        .select("title")
        .select("image")
        .then((movies) => {
            res.render("movies", { movies });
        })
        .catch((err) => console.log("BE CAREFULL, WE HAD THIS ERROR:", err));    
})
router.get("/movies/:id", (req, res) => {
    const movieID = req.params.id
    Movie
        .findById(movieID)
        .then((movie) => {
        res.render("details",  movie );
        })
        .catch((err) => console.log("BE CAREFULL, WE HAD THIS ERROR:", err));
});


module.exports = router
