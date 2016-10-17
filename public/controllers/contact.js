angular.module('app')
  .controller('contact',contactController)

contactController.$inject = ['$http']

function contactController($http){
  var c = this;

  c.message = {
    name:'',
    email:'',
    text:'',
  }

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
    $http.post('/mail/send', c.message).then(function(res){
      console.log(res)
    })
  }
}
