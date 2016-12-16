console.log('Hit: Front End Routes');

var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/partials/login.html',
            controller: 'loginController'
        })
        .when('/home', {
            templateUrl: 'assets/partials/home.html',
            controller: 'homeController'
        })
        .when('/ask', {
            templateUrl: 'assets/partials/ask.html',
            controller: 'askController'
        })
        .when('/answer/:id', {
            templateUrl: 'assets/partials/answer.html',
            controller: 'answerController'
        })
        .when('/question/:id', {
            templateUrl: 'assets/partials/question.html',
            controller: 'questionController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
