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
    returneddate:{type:String},
    fine:{type:String},
    status:{type:String}
});


const myRslvd = module.exports = mongoose.model("rslvedborrow", rslvedSchema);


module.exports.addRslvd = function(newRslv, callback){
    newRslv.save(callback);
};


module.exports.findallDet = function(callback){
    myRslvd.find(callback);
};

module.exports.findPaid = function(callback){
    query = {status:"not paid"};

    myRslvd.find(query,callback);
};


module.exports.edtSlctdRslv = function(edtbkid, callback){
        query = {_id : edtbkid._id};
    
        myRslvd.findByIdAndUpdate(
            
            query, 
            {$set:{
                
                status:"paid"
            }}, 
            function(err, list){
                if(err) throw err;
                if(list){
                    callback(null, list);
                }
            }
        );     
};

module.exports.findalltoMe = function(usr, callback){
    query = {username : usr.username};
    myRslvd.find(query, callback);
};