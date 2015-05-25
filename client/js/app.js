var theNetwork = angular.module('theNetwork', ['ngRoute']);

theNetwork.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'views/partials/banner.partial.html'
    })
    .when('/signup',{
        templateUrl: 'views/partials/signup.partial.html'
    })
    .when('/login',{
        templateUrl: 'views/partials/login.partial.html'
    })
    .when('/theNetwork',{
        templateUrl: 'views/partials/theNetwork.partial.html'
    })
    .when('/theChatroom',{
        templateUrl: 'views/partials/theChatroom.partial.html'
    })
    .otherwise({
        redirectTo: '/',
        templateUrl: 'views/partials/banner.partial.html'
    });
});