const mongoose=require('mongoose')
var user=new mongoose.Schema({
    name:{type:String},
    rollno:{type:String},
    age:{type:Number},
    email:{type:String},
    phonenumber:{type:Number}
})
module.exports=mongoose.model('form',user)