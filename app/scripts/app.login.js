'use strict';

angular.module('SampleApp')
.controller('LoginCtrl', function($scope, $state, loginModel, commonSVC) {
    
    $scope.form_data = {
      email: '134',
      pwd: '145'
    };

    // 로그인
    $scope.onSubmit = function () {
      console.log($scope.form_data);
      loginModel.login($scope.form_data, function (state, result) {
        if (state === 'success') {
          // 로그인 성공 후 홈화면으로 이동.
          $state.go('cl');
        }
      });      
    };

    // 비밀번호 찾기
    $scope.findpwd = function () {
      commonSVC.openModal('md', {}, 'FindPWDCtrl', 'views/findpwd.html');
    };
    
  });
