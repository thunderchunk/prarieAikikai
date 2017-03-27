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