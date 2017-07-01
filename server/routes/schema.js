var mongoose=require('mongoose');
var schema=mongoose.Schema({
    FirstName:String,
    LastName:String,
    UserName:String,
    Email:String,
    Password:String
});
var userAcc=mongoose.model('Account',schema);
module.exports=userAcc;