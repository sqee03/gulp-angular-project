'use strict';

angular.module('myApp', [
        'ui.router'
    ])

    .config(
        function($stateProvider, $urlRouterProvider) {

            // Routing
            $stateProvider
                // Init config files
                .state('app', {
                    abstract: true,
                    url: '',
                    template: '<ui-view/>',
                    resolve: {
                        config: function() {
                            console.info('Put some init config loading here ...');
                        }
                    }
                })
                // Home page
                .state('app.home', {
                    url: '/home',
                    controller: 'yourCtrl',
                    template: '<h1>{{greetings}}</h1>'
                })
                // Default redirect
                $urlRouterProvider.otherwise("/home");
    });