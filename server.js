var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var path=require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.database, function(err){
    if(err){
        console.log('could not connect to database', err);
    }
    else{
        console.log('connected to database: '+ config.db);
    }
});


app.use(express.static(__dirname + '/angular-src/src'));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname + '/angular-src/src/index.html'));
});

app.listen(config.port, function(){
    console.log('listening on port 8080');
});