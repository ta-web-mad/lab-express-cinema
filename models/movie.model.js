const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [],
    image: String,
    description: String,
    showtimes: []

}, {
    timestamps: true
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie