
//Start of the program
//Load the router
(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'MainCtrl as main',
                templateUrl: '/templates/home.html'
            });
    }

    angular
        .module('maksBlocTime', ['ui.router', 'firebase'])
        .config(config);

})();
