(function () {

    function MainCtrl($scope, $interval) {
      console.log("main");
      var myDataRef = new Firebase('https://maksbloctime.firebaseio.com/');
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

      }


    angular
        .module('maksBlocTime')
        .controller('MainCtrl', ['$scope', '$interval',  MainCtrl]);
})();
