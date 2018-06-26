const mongoose = require('mongoose');
const schema = mongoose.Schema;
//bcryptjs can use for hashing functions and check them
const bcrypt = require('bcryptjs');

const admnSchema = new schema({
    //firstname:{type:String,required:true},
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    username:{type:String, required:true},
    password:{type:String, required:true},
    serialkey:{type:String, required:true}
});


const myAdmin = module.exports = mongoose.model("admin", admnSchema);

module.exports.registerAdmin = function(newUser,callback){

    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.serialkey, salt, function(err,hash){
            console.log(hash);
            newUser.serialkey = hash; 
            console.log(newUser.serialkey);
            
            if (err) throw err;

            //newUser.save(callback);
            
        });
        bcrypt.hash(newUser.password, salt, function(err,hash){
            console.log(hash);
            newUser.password = hash; 
            console.log(newUser.password);
            
            if (err) throw err;

            newUser.save(callback);
            
        });
    });
};

module.exports.findadmnUsername = function(username, callback){

    const query = {username:username};

    myAdmin.findOne(query, callback);
    
};

module.exports.logcheckingPwd = function(enteredPwd, hashedpwd, callback){
    bcrypt.compare(enteredPwd, hashedpwd, function(err, res) {
        // res === true
        //console.log(res);
        if(err) throw err;
        if(res){
            callback(null, res);
        }
    });
    
    
};

module.exports.logcheckingSer = function(enteredSer, hashedSer, callback){
    bcrypt.compare(enteredSer, hashedSer, function(err, res) {
        // res === true
        //console.log(res);
        if(err) throw err;
        if(res){
            callback(null, res);
        }
    });
    
    
};

module.exports.findUserbyID = function(id,callback){
    User.findOne(id,callback);
};



