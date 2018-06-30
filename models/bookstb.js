const mongoose = require('mongoose');
const schema = mongoose.Schema;
//bcryptjs can use for hashing functions and check them
//const bcrypt = require('bcryptjs');

const bookSchema = new schema({
    //firstname:{type:String,required:true},

    bookname:{type:String},
    subject:{type:String},
    authorname:{type:String},
    isbn_no:{type:String},
    no_copies:{type:String}
});


const myBook = module.exports = mongoose.model("books", bookSchema);

module.exports.findallBooks = function(callback){

   // const query = {bookname:username};

    myBook.find(callback);
    
};

module.exports.addBook = function(newBk, callback){
    newBk.save(callback);
};

module.exports.edtSlctdBook = function(edtbkid, callback){

    query = {_id : edtbkid._id};

    myBook.findByIdAndUpdate(
        
        query, 
        {$set:{
            bookname:edtbkid.bookname,
            subject:edtbkid.subject,
            authorname:edtbkid.authorname,
            isbn_no:edtbkid.isbn_no
        }}, 
        function(err, list){
            if(err) throw err;
            if(list){
                callback(null, list);
            }
        }
    );

    /**
    myBook.updateOne(query,
        {$set:{
            bookname:edtbkid.bookname,
            subject:edtbkid.subject,
            authorname:edtbkid.authorname,
            isbn_no:edtbkid.isbn_no
        }}, callback
    );
    **/
    
};

module.exports.deleteBook = function(_id, callback){

    const query = {_id:_id};

    myBook.remove(query,callback);
};



