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

router.post("/showMine",function (req,res){
    console.log(req.body.username);
    var unm = req.body.username;
    
    borrow.showAllMyBrw(unm, function(err,brw){
        //mystate:boolean;
        if(err) throw err;
        if(brw){
            res.json({
               borrows:brw
            });

            

            
            //return brw;
        }
    });
    
});

router.post("/edit", (req,res)=>{
    const brwitm = req.body;

    borrow.edtBrwdet(brwitm, function(err, book){
        if(err) throw err;
        if(book){
            res.json({
                state:true,
                edited_details : book
            });

            console.log("Borrwings table updated successfully..");
        }
        if(!book){
           // res.json({edited_details : book});

            res.json({
                state:false,
                msg : "Borrwings table updation faled.."
            });
           // console.log("Book row updation faled..");
        }

    });
});

router.post("/delete",function (req,res){
     
    const id = req.body.borw_id;
    
    borrow.deleteBorrow(id, function(err,user){
        //mystate:boolean;
        if(err){
            console.log('data deletion failed..'); 
        }if(user){
            console.log('data deleted successfully..');
            
          
        }
    });
    
});

module.exports = router;