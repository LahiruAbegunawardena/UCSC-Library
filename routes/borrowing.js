

const express = require('express');
const router = express.Router();

/**
 * reqiures reguser.js from models to insert the
 * data(responded to localhost/user/register) to db
**/
const brrv = require('../models/borrowing'); 




const passport = require('passport');


router.get("",function (req,res){
    res.send("book requests..");
});

router.post("/request", (req, res)=>{
    const newBkReq=new brrv({
        username:req.body.username,
        bookname:req.body.bookname,
        //takendate:req.body.takenname,
        //duedate:req.body.duedate,
        status:req.body.status,
        isbn_no:req.body.isbn_no        
    });

    brrv.requestBook(newBkReq, function(err,user){
        console.log(newBkReq);
        if(err){
            console.log('data insertion failed..');            
        }if(user){
            console.log('data inserted successfully..');
        }
    });
});

router.post("/show", (req, res)=>{
    brrv.showAllRqst(function(err, rqst){
        if(err) throw err;
        if(rqst){
            res.json({req_details : rqst});
        }

    });
});

router.post("/delete1",function (req,res){
     
    const id = req.body._id;
    
    brrv.deleteBorrowReq(id, function(err,user){
        //mystate:boolean;
        if(err){
            console.log('data deletion failed..'); 
        }if(user){
            console.log('data deleted successfully..');
            
          
        }
    });
    
});

module.exports = router;