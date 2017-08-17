angular.module('movieApp', [])

  .controller('ngCtrl', function($http) {

    var app = this;
    this.refresh = function() {
      $http.get('/api/movies').then(function(response) {
        console.log("RECIEVED");
        app.movieTime = response.data;
        console.log(response.data);

      });
    }
    this.refresh();



    this.createMov = function(movData) {
      app.errMess = false;
      console.log(this.movData);
      $http.post('/api/movies', this.movData).then(function(data) {
        console.log(data.data.success);
        console.log(data.data.message);
        if (data.data.success) {

          app.successMess = data.data.message;

        } else {
          app.errMess = data.data.message;
        }
      });
    }

    this.removeMovie = function(id) {
      console.log(id);
      $http.delete('/api/movies/' + id).then(function(response) {
        app.refresh();
      });
    };

    this.editMovie = function(id) {

      $http.get('/api/movies/' + id).then(function(response) {
        app.movie = response.data;
        console.log(response.data);
      });
    };

    this.saveMovie = function() {
      console.log(app.movie._id)
      $http.put('/api/movies/' + app.movie._id, app.movie).then(function(response) {
        console.log(app.movie);
        app.refresh();
      });
    };
    this.show_me = true;

  });
