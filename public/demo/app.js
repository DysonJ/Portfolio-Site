var app = angular.module('app',[]);

app.controller('user',function(){
    this.data = {
        username:"Jon Dyson",
        birthday: "12/19/1985",
        favDay:4,
    };
    this.toggleEdit = function(e){
        console.log(e.target.tagName,e.target.tagName.indexOf('hidden'));
        var toggle = false;
        if(e.type == "click"){
            var label = e.target;
            var input = e.target.nextElementSibling;
            toggle = true;
        }else if(e.type == 'keydown'){
            var label = e.target.previousElementSibling;
            var input = e.target;
            toggle = true;
        }else if (e.type == 'blur'){
            console.log(e);
            var label = e.target.previousElementSibling;
            var input = e.target;
            label.classList.remove('hidden');
            input.classList.add('hidden');
        }
        
        if (toggle == true){
            label.classList.toggle('hidden');
            input.classList.toggle('hidden');
            console.log('toggled');
        }
        if (e.type == 'click'){
            input.focus();
        }
        
        
        
    };
    
});

app.directive('ngEnterPressed', function(){
    return function(scope,element,attrs){
            element.bind('keydown', function(e){
            var keyCode = e.which || e.keyCode;
            //if enter is pressed
                if(keyCode === 13){
                
                    scope.$apply(function(){
                    //evaluate the expression
                    scope.$eval(attrs.ngEnterPressed,{'$event':event});
                    })
                }
            })
        }
    
    
})

