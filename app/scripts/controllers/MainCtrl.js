(function () {
    function MainCtrl($interval) {
        console.log('Starting MainCtrl');
      }

      angular
            .module('maksBlocTime')
            .controller('MainCtrl', ['$interval', MainCtrl]);
    })();
