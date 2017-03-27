var app = angular.module("aikikai", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/views/home/home.html',
        controller: 'home'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: './app/views/contact/contact.html',
        controller: 'contact'
      })
      .state('what', {
        url: '/what',
        templateUrl: './app/views/what/what.html',
        controller: 'what'
      })
      .state('about', {
        url: '/about',
        templateUrl: './app/views/about/about.html',
        controller: 'about'
      })
      .state('schedule', {
        url: '/schedule',
        templateUrl: './app/views/schedule/schedule.html',
        controller: 'schedule'
      })

});