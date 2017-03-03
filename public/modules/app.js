
angular.module('app', ['ngRoute','ngAnimate'])
  .config(function($routeProvider){
    $routeProvider.when('/about',{
      templateUrl:'/about.html',
      controller:'about',
      controllerAs:'a',
    }).when('/resume',{
      templateUrl:'/resume.html',
      controller:'resume',
      controllerAs:'r',
    }).when('/contact',{
      templateUrl:'/contact.html',
      controller:'contact',
      controllerAs:'c',
    }).when('/portfolio',{
      templateUrl:'/portfolio.html',
      //controller:'',
      //controllerAs:'',
    }).when('/dev',{
      templateUrl:'/dev.html',
      controller:'dev',
      controllerAs:'d',
    }).when('/white-paper/mobile-ui',{
      templateUrl:'/white-papers/mobile-ui.html',
      //controller:'',
      //controllerAs:'',
    }).when('/white-paper/expression-audio',{
      templateUrl:'/white-papers/expression-audio.html',
      //controller:'',
      //controllerAs:'',
    }).when('/white-paper/true-menu',{
      templateUrl:'/white-papers/true-menu.html',
      //controller:'',
      //controllerAs:'',
    }).when('/white-paper/explainer-video',{
      templateUrl:'/white-papers/explainer-video.html',
      //controller:'',
      //controllerAs:'',
    }).when('/white-paper/american-bakeware',{
      templateUrl:'/white-papers/american-bakeware.html',
      //controller:'',
      //controllerAs:'',
    }).when('/white-paper/culinary-web-solutions',{
      templateUrl:'/white-papers/culinary-web-solutions.html',
      //controller:'',
      //controllerAs:'',
    }).when('/demo/:project',{
      templateUrl:'/demo.html',
      controller:'demo',
      controllerAs:'d',
    })
  })

angular.module("app")
  .run(function($rootScope, $location, $window){
    $rootScope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute){
      //Could use currentRoute to scroll to a specific id tag
      window.scrollTo(0,0);
    })
  })
