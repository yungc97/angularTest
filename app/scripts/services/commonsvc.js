'use strict';

angular.module('SampleApp')
  .factory('commonSVC', function ($http, $uibModal) {
    return {

      /**
      * AJAX 통신용
      */
      sendUrl: function (method, url, params, next) {

        const callbackFlag = typeof (next) == 'function'; // next가 함수면 true (전달된 함수가 있으면 true)
        const promise = $http({
          method: method,
          url: url,
          contentType: 'application/json',
          data: params
        });

        if (callbackFlag) {
          promise.then(function successCallback(response) {
            next('success', response.data);
          }, function errorCallback(response) {
            next('error', response);
          });
        } else {
          return promise;
        }
      },

      /**
       * alert 메세지       
       */
      showMessage: function (title, contents, callback) {
        swal({
          title: title,
          text: contents,
          confirmButtonColor: '#5C90D2',
          confirmButtonText: '확인'
        }, callback);
      },

      /**
       * modal 오픈
       * @param size modal 크기 (ex > sm: 스몰 lm: 라지)
       * @param data modal에 넘겨줄 data
       * @param ctrl modal controller
       * @param template modal template URL / path       
       */
       openModal: function (size, data, ctrl, template) {

        const modal = $uibModal.open({
          animation: false,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: template,
          controller: ctrl,
          size: size,
          resolve: data
        });

        console.log(modal);

        return modal;
      }

    };
  });
