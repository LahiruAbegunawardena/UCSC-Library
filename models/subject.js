const mongoose = require('mongoose');
const schema = mongoose.Schema;
//bcryptjs can use for hashing functions and check them
const bcrypt = require('bcryptjs');

const subSchema = new schema({
    subject:{type:String, required:true}
});


const mySub = module.exports = mongoose.model("booktype", subSchema);

module.exports.findallSub = function(callback){
    mySub.find(callback);
 };