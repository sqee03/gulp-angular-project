'use strict';

angular.module('myApp')

.controller('yourCtrl',
    function ($scope) {

        console.log('JS file "code.js" builded and injected. Nice!');
        $scope.greetings = "Hello world!";
});