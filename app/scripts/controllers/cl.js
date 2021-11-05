'use strict';

angular.module('SampleApp')
 .controller('clCtrl', function($scope, $http) {
     console.log('문화생활비 조회 페이지 접속');

  $http.jsonp({
    method: 'jsonp',
    url: 'https://github.com/playauto/gmp.tutorial/blob/master/Task3/Step1/sample.json',
    headers: {'Content-Type': 'application/json; charset=utf-8'}  
  })
   .then(function(){
     console.log("asd");
   },function(error){
    console.log(error);
   });
});