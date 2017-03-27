var app = angular.module("aikikai", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

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

}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("aikikai").controller("mainCtrl", ["$scope", "$state", function($scope, $state) {

  // VARIABLES
  // ============================================================
$scope.test = "test";
  // FUNCTIONS
  // ============================================================


}]);
// INITILIZE SERVICE
// ============================================================
angular.module("aikikai").service("aikikaiService", ["$http", function($http) {

  // CRUD FUNCTIONS
  // ============================================================


  // OTHER FUNCTIONS
  // ============================================================


}]);
angular.module('aikikai')
    .directive('map', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/map/map.html',
            link: function(scope, element, attributes) {
              scope.initMap = function() {
                   scope.pAikikai = {lat: 41.597663, lng: -93.672367};
                   scope.map = new google.maps.Map(document.getElementById('map'), {
                     zoom: 17,
                     center: scope.pAikikai
                   });
                   scope.marker = new google.maps.Marker({
                     position: scope.pAikikai,
                     map: scope.map
                   });
                   console.log("it works");
                 };
                 
                 scope.initMap();

            }
};

});
angular.module('aikikai')
    .directive('nav', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/nav/nav.html',
            link: function(scope, element, attributes) {
              
            scope.littleMenu = false;
            
    

            }
};

});
// INITILIZE CONTROLLER
// ============================================================
angular.module("aikikai").controller("about", ["$scope", function($scope) {

  // VARIABLES
  // ============================================================
$scope.test = "test";
  // FUNCTIONS
  // ============================================================


}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("aikikai").controller("contact", ["$scope", function($scope) {

  // VARIABLES
  // ============================================================
$scope.test = "test";
  // FUNCTIONS
  // ============================================================


}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("aikikai").controller("home", ["$scope", function($scope) {

  // VARIABLES
  // ============================================================
$scope.test = "test";
  // FUNCTIONS
  // ============================================================


}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("aikikai").controller("schedule", ["$scope", function($scope) {

  // VARIABLES
  // ============================================================
$scope.test = "test";
  // FUNCTIONS
  // ============================================================


}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("aikikai").controller("what", ["$scope", function($scope) {

  // VARIABLES
  // ============================================================
$scope.test = "test";
  // FUNCTIONS
  // ============================================================


}]);