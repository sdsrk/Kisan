'use strict';

angular.module('kisanApp')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    if(Auth.isLoggedIn())
         $location.path('/list');

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          //$scope.$apply();
           console.log(Auth.isLoggedIn());
          $location.path('/list');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
