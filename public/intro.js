window.onload = function(){
  var text = ['&#xe901;','&#xe902;','&#xe903;','&#xe904;']
  var index = 0;
  setTimeout(function(){
    var typing = setInterval(function(){
      if (index < text.length){
        var string = '';
        for (var i = 0; i<=index; i++){
          string += text[i]
        }
        document.getElementById('stack-type').innerHTML = string+'<span>|</span>'
        console.log(index);
        index++
      }else{
        clearInterval(typing);
        document.getElementById('logo').style = 'transform:scale(1) translateX(-50%);color:#ef3c3c;'

        setTimeout(function(){
          document.getElementById('stack-type').innerHTML = '&#xe901;&#xe902;&#xe903;&#xe904;';
        },1200)
      }
    },170)
  },1000)

}
