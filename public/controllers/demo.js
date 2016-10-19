angular.module('app')
  .controller('demo', demoController)

demoController.$inject = ['$routeParams', '$sce', '$scope']

function demoController($routeParams, $sce, $scope){
  var d = this;

  d.changeView = function(targetView){
    d.view = targetView;
  }

  d.demos = {
    mobileUI:{
      url:'http://jondyson.info/portfolio/expression-audio-redesign/index.cfm',
      whitePaper:'mobile-ui',
      view:'mobile',
    },
    expressionAudio:{
      url:'http://jondyson.info/portfolio/expression-audio/index.cfm',
      whitePaper:'expression-audio',
      view:'desktop',
    },
    americanBakeware:{
      url:'http://jondyson.info/portfolio/american-bakeware/index.cfm',
      whitePaper:'american-bakeware',
      view:'desktop',
    },
    cws:{
      url:'http://jondyson.info/portfolio/litchfield-coffee-co/index.cfm',
      whitePaper:'culinary-web-solutions',
      view:'desktop',
    }

  }

  d.project = d.demos[$routeParams.project];
  d.view = d.project.view;

  d.back = function(){
    window.location.href = '#/white-paper/'+ d.project.whitePaper;
  }

  d.url = d.demos[$routeParams.project].url;
  d.url = $sce.trustAsResourceUrl(d.url);

}
