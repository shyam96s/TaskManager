const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    fullname :{
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    saltSecret : String
});
//encrypt funtion of password
userSchema.pre('save', function (next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        });
    });
});
const User = mongoose.model('User', userSchema);
module.exports=User;