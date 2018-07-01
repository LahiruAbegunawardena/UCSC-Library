const express = require('express');
const router = express.Router();

/**
 * reqiures bookstb.js from models to insert the
 * data(responded to localhost/books) to db
**/
const Books = require('../models/bookstb'); 

//const jwt = require('jsonwebtoken');

const cnfig = require('../config/database');

const passport = require('passport');

router.post("/show", function(req,res){

    Books.findallBooks(function(err, book){
        if(err) throw err;
        if(book){
            res.json({book_details : book});
        }

    });
});
router.post("/new", function(req,res){

    const newBook= new Books({
        //firstname:{type:String,required:true},
    
        bookname:req.body.bookname,
        subject:req.body.subject,
        authorname:req.body.authorname,
        isbn_no:req.body.isbn_no,
        //copies:req.body.no_copies,
        publication:req.body.publication
    });
    

    Books.addBook(newBook, function(err,book){
        //mystate:boolean;
        if(err){
            console.log('data insertion failed..');            
            //mystate:true;
            res.json({state:false,msg:"data insertion failed.."});
        }if(book){
            console.log('data inserted successfully..');
            
           // mystate:false;            
            res.json({state:true,msg:"data inserted successfully.."});
        }
    });
});
router.get("/",function (req,res){
    res.json({
        "status":true,
        "msg":"Request recieved"
    });
});

router.post("/edit", function(req,res){

    const bookedtId = req.body;

    Books.edtSlctdBook(bookedtId, function(err, book){
        if(err) throw err;
        if(book){
            res.json({
                state:true,
                edited_details : book
            });

            console.log("Book row update successfully..");
        }
        if(!book){
           // res.json({edited_details : book});

            res.json({
                state:false,
                msg : "Book row updation faled.."
            });
           // console.log("Book row updation faled..");
        }

    });
});

router.post("/delete",function (req,res){
     
    const id = req.body._id;
    
    Books.deleteBook(id, function(err,book){
        //mystate:boolean;
        if(err){
            res.json({
                status:false
            })
            //console.log('Book deletion failed..'); 
        }if(book){
            res.json({
                status:true
            })
           // console.log('Book deleted successfully..');
        }
    });
    
});


module.exports = router;