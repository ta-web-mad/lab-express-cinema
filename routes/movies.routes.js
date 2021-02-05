const express = require("express")
const router = express.Router()

const Movie = require("../models/Movie.model")

// Endpoints
router.get("/", (req, res) =>
  Movie.find()
    .select("title image")
    .then((allMovies) => res.render("movies", { allMovies }))
    .catch((err) => console.err(err))
)

router.get("/:movieId", (req, res) =>
  Movie.findById(req.params.movieId).then((movie) =>
    res.render("movie-detail", movie)
  )
)
module.exports = router
