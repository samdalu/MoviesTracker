var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var apps = require('./app/routes/api')(router);
var path = require('path');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api' ,apps);

mongoose.connect('mongodb://localhost:27017/movies', function(err){
  if (err){
    console.log('Not connected to Db');
  } else{
    console.log('Hooray!! It\'s alive! ');
  }
});



app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port, function(){
  console.log("Running the server on port "+ port);
});