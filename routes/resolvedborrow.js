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
            res.json({rslvd_details : brw});
        }

    });
});

router.post("/showUnpaid", function(req,res){

    rsvdBrrw.findPaid(function(err, brw){
        if(err) throw err;
        if(brw){
            res.json({unpaid : brw});
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
        fine:req.body.fine,
        status:req.body.status
        
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

router.post("/edit", function(req,res){

    const rslvbrw = req.body;

    /**res.json({
        input:rslvbrw
    });**/

    rsvdBrrw.edtSlctdRslv(rslvbrw, function(err, pay){
        if(err) throw err;
        if(pay){
            res.json({
                state:true,
                msg : "Paying status updated successfully.."
            });

            console.log("Paying status updated successfully..");
        }
        if(!pay){
           // res.json({edited_details : book});

            res.json({
                state:false,
                msg : "Paying status updation faled.."
            });
           // console.log("Book row updation faled..");
        }

    });
});

router.post("/showByMe", function(req,res){

    const user = req.body;

    rsvdBrrw.findalltoMe(user, function(err, brw){
        if(err) throw err;
        if(brw){
            res.json({details:brw});
        }

    });
});


module.exports = router;
