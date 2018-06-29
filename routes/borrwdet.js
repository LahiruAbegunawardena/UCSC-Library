const express = require('express');
const router = express.Router();

/**
 * reqiures reguser.js from models to insert the
 * data(responded to localhost/user/register) to db
**/
const borrow = require('../models/borrwdet');

router.post("/insert", (req, res)=>{
    const newBkBrw=new borrow({
        username:req.body.username,
        bookname:req.body.bookname,
        takendate:req.body.takendate,
        duedate:req.body.duedate,
        status:req.body.status,
        isbn_no:req.body.isbn_no        
    });

    borrow.insertBorrow(newBkBrw, function(err,user){
       // console.log(newBkReq);
        if(err){
            console.log('data insertion failed..');            
        }if(user){
            console.log('data inserted successfully..');
        }
    });
});

router.post("/show", (req, res)=>{
    borrow.showAllBrw(function(err, det){
        if(err) throw err;
        if(det){
            res.json({Borrow_details : det});
        }

    });
});

module.exports = router;