const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema(
{
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
      trim: true,
      default: "Nombre desconocido",
    },
    director: {
      type: String,
      required: true,
    },
    stars: {
      type: [String],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 500,
    },
    showtimes: {
      type: [String],
      required: true,
    },
  },  {
    timestamps: true
});

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie