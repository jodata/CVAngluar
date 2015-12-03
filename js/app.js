'use strict';
var app = angular.module('cvApp', ['ngRoute','ngMaterial', 'angular-cv']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'Partials/home.html'
        })
        .when('/motivation', {
            templateUrl: 'Partials/motivation.html'
        })
        .otherwise({redirectTo:'/'});

}]);