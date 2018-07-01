const mongoose = require('mongoose');
const schema = mongoose.Schema;
//bcryptjs can use for hashing functions and check them
const bcrypt = require('bcryptjs');

const brwdetSchema = new schema({
    //firstname:{type:String,required:true},
    username:{type:String},
    bookname:{type:String},
    isbn_no:{type:String},
    takendate:{type:String},
    duedate:{type:String}
    //status:{type:String}
});

const myBorrowings = module.exports = mongoose.model("borrowing", brwdetSchema);

module.exports.insertBorrow = function(newBrw,callback){
    newBrw.save(callback);   
};

module.exports.showAllBrw = function(callback){
    myBorrowings.find(callback);
};

module.exports.showAllMyBrw = function(username, callback){
    const query = {username:username};
    //myBorrowings.find(query, callback);
    myBorrowings.find(query,callback);
};

module.exports.edtBrwdet = function(edtitm, callback){

    query = {_id : edtitm._id};

    myBorrowings.findByIdAndUpdate(
        
        query, 
        {$set:{   
            duedate:edtitm.duedate
        }}, 
        function(err, list){
            if(err) throw err;
            if(list){
                callback(null, list);
            }
        }
    );
    
};

module.exports.deleteBorrow = function(_id, callback){

    const query = {_id:_id};

    myBorrowings.remove(query,callback);
    
};