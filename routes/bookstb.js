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
        copies:req.body.no_copies
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

module.exports = router;