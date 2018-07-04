const express = require('express');
const router = express.Router();

/**
 * reqiures bookstb.js from models to insert the
 * data(responded to localhost/books) to db
**/
const Sgst = require('../models/suggestion'); 



router.post("/show", function(req,res){

    Sgst.findall(function(err, sgst){
        if(err) throw err;
        if(sgst){
            res.json({suggestions : sgst});
        }

    });
});
router.post("/new", function(req,res){

    const newSgst= new Sgst({
        bookname:req.body.bookname,
        authorname:req.body.authorname,
        username:req.body.username
        
    });
    

    Sgst.addSgst(newSgst, function(err,book){
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
