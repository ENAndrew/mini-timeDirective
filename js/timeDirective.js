var app = angular.module('timeApp');

var directive = function(){
    return {
        restrict: 'E',
        template: '<div>The current time is {{time}}</div>',
        link: function($scope){
            var currentTime = new Date();
            $scope.time = currentTime.toString();
        }
    };
};

app.directive('showTime', directive);

