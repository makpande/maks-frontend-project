
// (function () {
//     function config($stateProvider, $locationProvider) {
//         $locationProvider
//             .html5Mode({
//                 enabled: true,
//                 requireBase: false
//             });
//
//         $stateProvider
//             .state('main', {
//                 url: '/',
//                 controller: 'MainCtrl as main',
//                 templateUrl: '/templates/main.html'
//             });
//     }
//
//     angular
//         .module('maksBlocTime', ['ui.router', 'firebase'])
//         .config(config);
//
// })();


var app = angular.module("maksBlocTime", ['firebase', 'ui.router']);
var myDataRef = new Firebase('https://maksbloctime.firebaseio.com/');

app.controller('MainCtrl', ['$scope', '$interval', function($scope, $interval) {

  $scope.time = (60*25);

  $scope.taskName = 'Start';

  var stop;

  $scope.countdown = function() {

    if ( angular.isDefined(stop) ) return;

    stop = $interval(function() {
      $scope.time -= 1;
    }, 1000);

    $scope.taskName = 'Reset';
  };

  $scope.stopTime = function() {
    if (angular.isDefined(stop)) {
      $interval.cancel(stop);
      stop = undefined;
    }
    $scope.taskName = 'Start';
  };

  $scope.reset = function() {
    $scope.stopTime();
    $scope.time = (60*25);
  };

  $scope.startReset = function() {
    if ($scope.taskName == 'Start' ){
      $scope.countdown();
    }
    else{
      $scope.reset();
    }
  };


}]);
