var theNetwork = angular.module('theNetwork', ['ngRoute']);

theNetwork.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'views/partials/banner.partial.html'
    })
    
    .otherwise({
        redirectTo: '/',
        templateUrl: 'views/partials/banner.partial.html'
    });
});