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