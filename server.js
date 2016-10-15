var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser')


var app = express();

app.use(morgan('dev'))

app.use(express.static('public'));

app.use(
  bodyParser.json(),
  bodyParser.urlencoded({extended:true})
)

var PORT = process.env.PORT || 8080;
app.listen(PORT, function(error){
  console.log('Server Running on Port:',PORT)
})
