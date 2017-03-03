var mongoose = require('mongoose')

var calendarSchema = mongoose.Schema({
  weeks:{type:Array}
})

module.exports = mongoose.model('Calendar',calendarSchema)
