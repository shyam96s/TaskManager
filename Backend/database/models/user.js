const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    fullname :{
        type : String,
        
    },
    email : {
        type : String,
        required : 'Email cant be empty',
        unique : true
    }, 
    password : {
        type : String,
        required : 'Password is mandatory',
        minlength : [8,'Password should be atleast 8chars long']
    },
    saltSecret : String,
    
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

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var EmailSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});

//validation for email
/*userSchema.path('email').validate((val)=>{
    emailRegex = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ ;
    return emailRegex.test(val);
}, 'Invalid email.');
*/ 
const User = mongoose.model('User', userSchema);
const Email = mongoose.model('Email', EmailSchema)
module.exports=User, Email;