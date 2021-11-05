'use strict';

//Load controller
angular.module('SampleApp')
.controller('HomeCtrl', function($scope, commonSVC) {

    commonSVC.showMessage('홈 화면에 접속되었습니다.');
      
  }
);
