
const mongoose = require('mongoose');
const User = mongoose.model('User');



module.exports.register = (req,res,next) => {
    
    var userObj = new User();
    //userObj.userName= req.body.fullName;
    userObj.email = req.body.email;
    userObj.password = req.body.password;
    userObj.save((err,doc)=>{
        if(!err)
            res.send(doc);
        else{
            if(err.code == 11000){
            res.status(422).send(['Duplicate email address found.']);        
        }
        else{
            return next(err);
        }
    }
        
    });
} 