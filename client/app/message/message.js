'use strict';

angular.module('kisanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.message', {
        url: '/',
        templateUrl: 'app/message/message.html',
        controller: 'MessageCtrl'
      })
      .state('main.message.tab1', {
        url: 'list',
        templateUrl: 'app/message/list.html'
      });
  });