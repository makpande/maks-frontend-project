(function () {

    function MainCtrl($scope, $interval) {
      var myDataRef = new Firebase('https://maksbloctime.firebaseio.com/');
      var work_session = (60*25);
      var break_session = (60*5);
      var stop;

      $scope.time = work_session;
      $scope.taskName = 'Start';
      $scope.onBreak = false;


      $scope.countdown = function() {

          if ( angular.isDefined(stop) ) return;

          stop = $interval(function() {
            if ($scope.time > 0) {
              $scope.time -= 1;
          } else {
            $scope.stopTime();
            if (!$scope.onBreak){
              $scope.onBreak = true;
              $scope.taskName = 'Break';
              $scope.time = break_session;
            } else {
              $scope.onBreak = false;
              $scope.taskName = 'Start';
              $scope.time = work_session;
            }
          }
        }, 1000);
        $scope.taskName = 'Reset';
      };

      $scope.stopTime = function() {
        if (angular.isDefined(stop)) {
          $interval.cancel(stop);
          stop = undefined;
        }

        if (!$scope.onBreak){
          $scope.taskName = 'Start';
        } else {
          $scope.taskName = 'Break';
        }
      };

      $scope.reset = function() {
        $scope.stopTime();
        if (!$scope.onBreak) {
          $scope.time = work_session;
        } else {
          $scope.time = break_session;
        }
      };

      $scope.startReset = function() {
        if ($scope.taskName == 'Start' || $scope.taskName == 'Break'){
          $scope.countdown();
        } else {
          $scope.reset();
        }
      };

    }


    angular
        .module('maksBlocTime')
        .controller('MainCtrl', ['$scope', '$interval',  MainCtrl]);
})();
