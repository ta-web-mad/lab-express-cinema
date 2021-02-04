const express = require("express")
const router = express.Router()

const Movie = require("../models/Movie.model")

// Endpoints
router.get("/", (req, res) => {
  Movie.find()
    .select("title image")
    .then((allMovies) => res.render("movies", { allMovies }))
})

module.exports = router
