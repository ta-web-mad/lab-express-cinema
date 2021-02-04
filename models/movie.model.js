const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title:{
    type:String
}, director:{
    type:String
},   stars: {
        type: Array,
    }, image: {
    type:String
    }, description: {
    type:String
    }, showtimes: {
        type: Array,
    }
   
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie