const express = require('express');
const router = express.Router();

/**
 * reqiures bookstb.js from models to insert the
 * data(responded to localhost/books) to db
**/
const rsvdBrrw = require('../models/resolvedborrow'); 

//const jwt = require('jsonwebtoken');

const cnfig = require('../config/database');

const passport = require('passport');

router.post("/show", function(req,res){

    rsvdBrrw.findallDet(function(err, brw){
        if(err) throw err;
        if(brw){
            res.json({book_details : brw});
        }

    });
});

router.post("/new", function(req,res){

    const newrslvBrw= new rsvdBrrw({
        username:req.body.username,
        bookname:req.body.bookname,
        borrow_id:req.body.borw_id,
        duedate:req.body.duedate,
        takendate:req.body.duedate,
        fine:req.body.fine
        
    });
    

    rsvdBrrw.addRslvd(newrslvBrw, function(err,book){
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

module.exports = router;
