angular.module('app')
  .controller('about',aboutController)

aboutController.$inject = ['$timeout']

function aboutController($timeout){
  var a = this;
  console.log('about')
  
  $timeout(function(){
    $('.parallax').parallax();
  },1)
  // $(document).ready(function(){
  //    $('.parallax').parallax();
  //  });

}
