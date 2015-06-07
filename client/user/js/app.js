var theNetworkInternal = angular.module('theNetworkInternal', ['ngRoute']);
console.log("WORKING")
theNetworkInternal.config(function ($routeProvider) {
  console.log("WORKING123", $routeProvider)

  $routeProvider
    .when('#/',{
        templateUrl: 'views/partials/banner.partial.html'
    })
    .when('#/chatroom',{
        templateUrl: '/user/views/partials/chatroom.partial.html'
    })
    .when('#/forums',{
        templateUrl: 'user/views/partials/forums.partial.html',
        controller: 'ForumsController'
    })
    .when('#/post/:id',{
        templateUrl: '/user/views/partials/post.partial.html',
        controller: 'PostController'
    })
    .when('#/posts',{
        templateUrl: '/user/views/partials/posts.partial.html'
    })
    .when('#/dashboard',{
        templateUrl: '/user/views/partials/dashboard.partial.html'
    })
    // .otherwise({
    //     redirectTo: '/',
    // });
});