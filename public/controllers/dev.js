angular.module('app')
  .controller('dev', devController)

devController.$inject = ['$http']

function devController($http){
  var d = this;

  d.days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  d.colors = [
    '#03A9F4',
    '#4CAF50',
    '#FFEB3B'
  ]

  d.calendar = {
    weeks:[
      {
        startDate:'2017-02-27',
        endDate:'2017-03-03',
        tasks:[
          {
            title:'API Task One',
            comments:['step 1', 'step 2'],
            duration:[45,30,0,0,0]
          },
          {
            title:'API Task Two',
            comments:['step 1', 'step 2'],
            duration:[45,0,0,0,0]
          }
        ]
      }
    ]
  }

  function Task(week){
    this.title = 'Title',
    this.comments = [],
    this.duration = [0,0,0,0,0]
    this.color = d.colors[week.tasks.length]
  }

  d.addTask = function(week){
    var newTask = new Task(week);
    week.tasks.push(newTask)
  }

  d.removeTask = function(index,week){
    console.log(index)
    week.tasks.splice(index,1);
    d.init()
  }

  d.removeComment = function(task,index){
    task.comments.splice(index,1)
  }

  d.addComment = function(task){
    task.comments.push('new comment')
  }

  d.init = function (){

    d.calendar.weeks.forEach(function(week){
      week.totalDurations = [0,0,0,0,0]
      week.allWorkDuration = 0;

      week.tasks.forEach(function(task){
        task.duration.forEach(function(duration,index){
          week.totalDurations[index] += duration;
          week.allWorkDuration += duration;
        })
      })
      week.tasks.forEach(function(task,index){
        task.color = d.colors[index];
        task.dailyPercentage = [0,0,0,0,0]
        task.weeklyDuration = 0;
        task.duration.forEach(function(duration,dIndex){
          if(week.totalDurations[dIndex] != 0){
            task.dailyPercentage[dIndex] = (duration / week.totalDurations[dIndex]) * 100;
            task.weeklyDuration += duration;
          }
        })
        if(week.allWorkDuration != 0){
          task.weeklyPercentage = (task.weeklyDuration / week.allWorkDuration) * 100;
        }

      })


      console.log('week',week)

    })


  }

  d.save = function(){
    var payload = {
      method:'POST',
      url:'http://localhost:8080/saveCalendar',
      data:{
        weeks:d.calendar.weeks
      }
    }

    $http(payload).then(function(result){
      console.log(result)
    })
  }

  d.init()
}
