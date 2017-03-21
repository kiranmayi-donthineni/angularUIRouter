/**
 * Created by kavuri on 2/5/2017.
 */

var express= require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://kiran:Training@ds151707.mlab.com:51707/classroom');
var db = mongoose.connection;
db.on('error',function(){
    console.log('eror ..........');
});
db.once('open',function(){
    console.log('db connection -------');
});
app.use('/',require('./routes'));
app.listen(3040);
console.log("server listening on 3040");

/*
var express = require ('express');
var bodyparser = require('body-parser');
var mongoose= require('mongoose');
var app= express();
app.use(express.static(__dirname));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect('mongodb://kiranmayi:lakshminarayana1A@ds151707.mlab.com:51707/classroom');
//mongoose.connect('mongodb://leela1:Sathvik@ds031751.mlab.com:31751/classroom');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('connection is success')
});
process.on('SIGINT', function(){
    db.close(function(){
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
app.use('/',require('./routes'));
app.listen(5000);
console.log('server is listening on port 5000');*/
