var theNetwork = angular.module('theNetwork', ['ngRoute']);

theNetwork.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'views/partials/banner.partial.html'
    })
    .when('/register',{
        templateUrl: 'views/partials/register.partial.html',
        controller: 'UsersController'
    })
    .when('/login',{
        templateUrl: 'views/partials/login.partial.html',
        controller: 'SessionsController'
    })
    .when('/network',{
        templateUrl: 'views/partials/network.partial.html'
    })
    .when('/chatroom',{
        templateUrl: 'views/partials/chatroom.partial.html'
    })
    .when('/forums',{
        templateUrl: 'views/partials/forums.partial.html',
        controller: 'ForumsController'
    })
    .when('/posts',{
        templateUrl: 'views/partials/posts.partial.html'
    })
    .when('/dashboard',{
        templateUrl: 'views/partials/dashboard.partial.html'
    })
    .otherwise({
        redirectTo: '/',
    });
});