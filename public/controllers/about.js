angular.module('app')
  .controller('about',aboutController)


function aboutController($timeout){
  var a = this;
  console.log('about')

  $(document).ready(function(){
     $('.parallax').parallax();
   });

}
