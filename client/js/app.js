var theNetwork = angular.module('theNetwork', ['ngRoute']);

theNetwork.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/users.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});