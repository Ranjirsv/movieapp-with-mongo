var express = require('express');
var router = express.Router();
const request=require('request');
var mongo=require('mongodb');
 var assert=require('assert');
 var mongoose=require('mongoose');
 var userAcc=require('./schema.js');
 mongoose.connect('mongodb://localhost:27017/test');
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/search',function(req,res){
    request.get('https://api.themoviedb.org/3/search/movie?api_key=3d34e72c9badeb4e4254c09ec0109d8e&language=en-US&query='+req.query.name+'&page=1&include_adult=false',function(err,response,body){
  
   if(!err && response.statusCode === 200){
        res.send(response.body);
        
    }  else{
        res.send('error occured in route');
    }  
    });
});
router.post('/insert',function(req, res, next){
    console.log('inside');
    console.log(req.query.firstName);
    var addAcc={
     FirstName:req.body.firstName,
     LastName:req.body.lastName,
     UserName:req.body.userName,
     Email:req.body.emailId,
     Password:req.body.password
    };
    var db=new userAcc(addAcc);
    db.save();
    console.log('data inserted');
    res.redirect('/');
});
module.exports = router;
