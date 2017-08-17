var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  genre: {
    type: String
  },
  star: {
    type: String
  },
  year: {
    type: Number
  },
  img: {
    type: String
  }
});

var Movie = module.exports = mongoose.model('Movie', MovieSchema);

module.exports.getMovies = function(callback, limit) {
  Movie.find(callback).limit(limit);
}

module.exports.getMovie = function(id, callback) {
  Movie.findById(id, callback);
}


module.exports.editMovie = function(id, movie, options, callback) {
  var query = {
    _id: id
  };
  var update = {
    title: movie.title,
    genre: movie.genre,
    star: movie.star,
    year: movie.year
  }
  Movie.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteMovie = function(id, callback) {
  var query = {
    _id: id
  };
  Movie.remove(query, callback);
}
