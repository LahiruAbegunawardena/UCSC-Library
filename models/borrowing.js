const mongoose = require('mongoose');
const schema = mongoose.Schema;


const brwreqSchema = new schema({
    //firstname:{type:String,required:true},
    username:{type:String},
    bookname:{type:String},
    isbn_no:{type:String},
   //takendate:{type:String},
    //duedate:{type:String},
    status:{type:String}
});



const myBrw = module.exports = mongoose.model("borrowing_req", brwreqSchema);

module.exports.requestBook = function(newreq,callback){
    newreq.save(callback);
};


module.exports.showAllRqst = function(callback){
    myBrw.find(callback);
};

module.exports.showAllRqstbyUsr = function(username, callback){
    const query = {username:username};
    myBrw.find(query, callback);
};

/**module.exports.setBorrowDet = function(nwBorw,callback){
    nwBorw.save(callback);   
};**/

module.exports.deleteBorrowReq = function(_id, callback){

    const query = {_id:_id};

    myBrw.remove(query,callback);

   // const query = {username:username};

    //myUser.findOne(query,callback);
    
};