'use strict';

angular.module('kisanApp')
  .service('service', function (Restangular) {
  //	_.contains = _.includes;
    // AngularJS will instantiate a singleton by calling "new" on this function
    var _all = function() {
      return Restangular.all('contacts');
    };

    var _allM = function() {
      return Restangular.all('messages');
    };

    return {
      getContactList: function() {
        return _all().getList();
      },
      get : function(id) {
        return _all().one(id).get();
      },
      sendOTP : function(data){
        return _all().all('sendOTP').post(data);
      },
      getMessages :function(id){
        return _allM().one(id).getList();
      }
      
    };
  });
