'use strict';

angular.module('SampleApp')
  .service('loginModel', function (commonSVC) { // commonSVC 공통적으로 사용할 함수 저장소
    return {

      /**
      * 로그인
      */
      login: function (params, next) {
        const url = `http://localhost:8080/api/loginTest`;

        commonSVC.sendUrl('POST', url, params, function (state, data) {
          next(state, data);
        });
      }

    };
  });
