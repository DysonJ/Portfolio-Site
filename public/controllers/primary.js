angular.module('app')
  .controller('primary', primaryController)

function primaryController(){
  var p = this;
  p.test = 'here';

  $zopim(function() {
    $zopim.livechat.badge.hide();
  });
}
