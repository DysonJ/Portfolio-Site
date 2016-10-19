angular.module('app')
  .controller('contact',contactController)

contactController.$inject = ['$http']

function contactController($http){
  var c = this;
  // $scope.pageClass = 'contact-canvas';

  c.message = {
    name:'',
    email:'',
    text:'',
  }

  c.sending = false;

  function validate(){
    var valid = true;
    if(c.message.name == '' || c.message.email == '' || c.message.text == ''){
      valid = false;
    }
    return valid
  }

  c.sendMail = function(){
    if (validate()==false){
      console.log('empty')
      Materialize.toast('Please complete all fields', 10000)
      return
    }
    c.sending = true;
    $http.post('/mail/send', c.message).then(function(res){
      console.log(res)
      c.sending = false;
      Materialize.toast('Your message has been sent!', 10000)

      c.message.name = '';
      c.message.email = '';
      c.message.text = '';

    })

    
  }
}
