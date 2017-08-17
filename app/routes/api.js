var Movie = require('../models/movie');

module.exports = function(router) {

  router.post('/movies', function(req, res) {
    var movie = new Movie();
    movie.title = req.body.title;
    movie.genre = req.body.genre;
    movie.star = req.body.star;
    movie.year = req.body.year;
    movie.img = req.body.img;
    if (req.body.title == null || req.body.title == '' || req.body.genre == null || req.body.genre == '' || req.body.year == null || req.body.year == '') {
      res.json({
        success: false,
        message: 'Ensure fields were provided'
      });
    } else {
      movie.save(function(err) {
        if (err) {
          res.json({
            success: false,
            message: 'title already exists!'
          });
        } else {
          res.json({
            success: true,
            message: 'Movie created!'
          });
        }
      });
    }
  });

  router.get('/movies', function(req, res) {
    Movie.getMovies(function(err, movies) {
      if (err) {
        throw err;
      }
      res.json(movies);
    });
  });

  router.get('/movies/:_id', function(req, res) {
    Movie.getMovie(req.params._id, function(err, movies) {
      if (err) {
        throw err;
      }
      res.json(movies);
    });
  });

  router.put('/movies/:_id', function(req, res) {
    var id = req.params._id;
    var movie = req.body;
    Movie.editMovie(id, movie, {}, function(err, movie) {
      if (err) {
        throw err;
      }
      res.json(movie);
    });
  });

  router.delete('/movies/:_id', function(req, res) {
    var id = req.params._id;
    Movie.deleteMovie(id, function(err, movie) {
      if (err) {
        throw err;
      }
      res.json(movie);
    });
  });

  return router;

}
