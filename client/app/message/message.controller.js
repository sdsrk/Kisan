'use strict';

angular.module('kisanApp')
    .controller('MessageCtrl', function($scope, service, $mdDialog, $mdMedia, Auth,$state,$location) {

        var _user = Auth.getCurrentUser();
        $scope.isLoggedIn = Auth.isLoggedIn;
       
         setTimeout(function () {
        $scope.$apply(function () {
            //console.log( $scope.isLoggedIn());
            if(!$scope.isLoggedIn())
            	$state.go('login');
        });
    }, 10);
        $scope.list = function() {
            service.getContactList().then(function(res) {
                $scope.contacts = res;
            });
        }
        $scope.list();
        $scope.display = function(ind) {
            $scope.clicked = true;
            $scope.info = $scope.contacts[ind];

        }
        $scope.showConfirm = function(ev) {
        		
            var ran = Math.floor((Math.random() * 1000000) + 1);
            var confirm = $mdDialog.confirm()
                .title('Would you like send OTP?')
                .textContent('OTP is:' + ran)
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Send')
                .cancel('Cancel');
            $mdDialog.show(confirm).then(function() {

                var data = { email: $scope.info.email, otp: ran, cell: $scope.info.phNo, sentTo: $scope.info._id, sentBy: _user._id };
                console.log('ddddddddddd',data)
                service.sendOTP(data).then(function(res) {
                    console.log('mail response');
                })
                $scope.status = 'Cancel.';
            }, function() {
                $scope.status = 'You decided send.';
            });
        }

        $scope.listMessage = function(){
        	service.getMessages(_user._id).then(function(res){
        		$scope.messageList = res;
        		$scope.messageList.sort(function (a, b) {
  					var date1 = new Date(a['lastModified']);
					  var date2 = new Date(b['lastModified']);
					  return date1 < date2;
});
        		//console.log($scope.messageList);
        	})
        }




    });
