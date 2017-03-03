angular.module('app')
  .controller('dev', devController)

devController.$inject = []

function devController(){
  var d = this;

  d.days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  d.colors = [
    '#03A9F4',
    '#4CAF50',
    '#FFEB3B'
  ]

  d.week = {
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

  function Task(){
    this.title = 'Title',
    this.comments = [],
    this.duration = [0,0,0,0,0]
    this.color = d.colors[d.week.tasks.length]
  }

  d.addTask = function(){
    var newTask = new Task();
    d.week.tasks.push(newTask)
  }

  d.removeComment = function(task,index){
    task.comments.splice(index,1)
  }

  d.addComment = function(task){
    task.comments.push('new comment')
  }

  d.test = function(){
    console.log(d.week.tasks)
  }

  d.init = function (){
    d.week.totalDurations = [0,0,0,0,0];
    d.week.allWorkDuration = 0;

    d.week.tasks.forEach(function(task){
      task.duration.forEach(function(duration,index){
        d.week.totalDurations[index] += duration;
        d.week.allWorkDuration += duration;
      })
    })
    d.week.tasks.forEach(function(task,index){
      task.color = d.colors[index];
      task.dailyPercentage = [0,0,0,0,0]
      task.weeklyDuration = 0;
      task.duration.forEach(function(duration,dIndex){
        if(d.week.totalDurations[dIndex] != 0){
          task.dailyPercentage[dIndex] = (duration / d.week.totalDurations[dIndex]) * 100;
          task.weeklyDuration += duration;
        }
      })
      if(d.week.allWorkDuration != 0){
        task.weeklyPercentage = (task.weeklyDuration / d.week.allWorkDuration) * 100;
      }

    })


    console.log('week',d.week)
  }

  d.init()
}
