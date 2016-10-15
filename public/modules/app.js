
angular.module('app', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/about',{
      templateUrl:'/about.html',
      controller:'about',
      controllerAs:'a',
    }).when('/resume',{
      templateUrl:'/resume.html',
      //controller:'',
      //controllerAs:'',
    }).when('/portfolio',{
      templateUrl:'/portfolio.html',
      //controller:'',
      //controllerAs:'',
    }).when('/contact',{
      templateUrl:'/contact.html',
      //controller:'',
      //controllerAs:'',
    })
  })
