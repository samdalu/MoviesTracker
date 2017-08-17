var app = angular.module('myRoute', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'app/views/pages/home.html'
	})

	.when('/addmovie', {
		templateUrl: 'app/views/pages/addmovie.html',
		controller:'ngCtrl',
		controllerAs : 'addmovie'
	})
	.when('/moviesList', {
		templateUrl: 'app/views/pages/moviesList.html',
		controller:'ngCtrl',
		controllerAs : 'moviesList'
	})


	.otherwise({ redirectTo: '/'} );

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});
