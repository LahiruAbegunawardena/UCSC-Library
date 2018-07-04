const mongoose = require('mongoose');
const schema = mongoose.Schema;
//bcryptjs can use for hashing functions and check them
//const bcrypt = require('bcryptjs');

const sgstSchema = new schema({
    //firstname:{type:String,required:true},

    bookname:{type:String},
    authorname:{type:String},
    username:{type:String}
});


const mySgst = module.exports = mongoose.model("suggestion", sgstSchema);

module.exports.findall = function(callback){

   // const query = {bookname:username};

   mySgst.find(callback);
    
};

module.exports.addSgst = function(newBk, callback){
    newBk.save(callback);
};