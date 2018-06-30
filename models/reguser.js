const mongoose = require('mongoose');
const schema = mongoose.Schema;
//bcryptjs can use for hashing functions and check them
const bcrypt = require('bcryptjs');

const usrSchema = new schema({
    //firstname:{type:String,required:true},
    firstname:{type:String},
    lastname:{type:String},
    username:{type:String},
    password:{type:String},
    regno:{type:String},
    contact:{type:String},
    address:{type:String}
});


const myUser = module.exports = mongoose.model("User", usrSchema);

module.exports.registerUser = function(newUser,callback){

    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.password, salt, function(err,hash){
            console.log(hash);
            newUser.password = hash; 
            console.log(newUser.password);
            
            if (err) throw err;

            newUser.save(callback);
            
        });
    });
};

module.exports.findbyUsername = function(username, callback){

    const query = {username:username};

    myUser.findOne(query,callback);
    
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

module.exports.findUserbyID = function(id,callback){
    myUser.findOne(id,callback);
};

module.exports.findallUsers = function(callback){

    // const query = {bookname:username};
 
    myUser.find(callback);
     
};

module.exports.deleteUsr = function(_id, callback){

    const query = {_id:_id};

    myUser.remove(query,callback);
};
