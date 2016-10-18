angular.module('app')
  .controller('demo', demoController)

demoController.$inject = ['$routeParams', '$sce', '$scope']

function demoController($routeParams, $sce, $scope){
  var d = this;
  d.project = $routeParams.project;
  d.view = 'mobile';

  d.back = function(){
    window.location.href = '#/white-paper/'+ d.project
  }

  d.changeView = function(targetView){
    d.view = targetView;
  }

  d.url = "http://jondyson.com/" + $routeParams.project + '.cfm';
  d.url = $sce.trustAsResourceUrl(d.url);

}
