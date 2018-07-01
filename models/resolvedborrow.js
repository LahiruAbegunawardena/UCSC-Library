const mongoose = require('mongoose');
const schema = mongoose.Schema;
//bcryptjs can use for hashing functions and check them
//const bcrypt = require('bcryptjs');

const rslvedSchema = new schema({
    
    username:{type:String},
    bookname:{type:String},
    borrow_id:{type:String},
    duedate:{type:String},
    takendate:{type:String},
    fine:{type:String}
});


const myRslvd = module.exports = mongoose.model("rslvedborrow", rslvedSchema);


module.exports.addRslvd = function(newRslv, callback){
    newRslv.save(callback);
};