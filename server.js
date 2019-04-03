var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mailer = require('express-mailer'),
    config = require('./config.js'),
    mongoose = require('mongoose')

if(!config.local){
  mongoose.connect('mongodb://localhost/jondyson',function(error){
    if (error){
      console.error('Could Not Start mongoose: ', error)
      process.exit(1);
    }else{
      console.log('Mongoose Started!')
    }
  })
}



var app = express();

app.use(morgan('dev'))

app.use(express.static('public'));

app.use(
  bodyParser.json(),
  bodyParser.urlencoded({extended:true})
)


app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

mailer.extend(app,{
  from:'Public Question<hello@jondyson.com>',
  host:'smtp.zoho.com',
  secureConnection:true,
  port:465,
  transportMethod:'SMTP',
  auth:{
    user:config.emailUser,
    pass:config.emailPass,
  }
})

require('./routes')(app);

var PORT = process.env.PORT || 8080;
app.listen(PORT, function(error){
  console.log('Server Running on Port:',PORT)
})
