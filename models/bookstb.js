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



