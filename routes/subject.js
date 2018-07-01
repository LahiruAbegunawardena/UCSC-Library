const express = require('express');
const router = express.Router();

/**
 * reqiures bookstb.js from models to insert the
 * data(responded to localhost/books) to db
**/
const Subs = require('../models/subject'); 



router.post("/show", function(req,res){

    Subs.findallSub(function(err, sub){
        if(err) throw err;
        if(sub){
            res.json({subjects : sub});
        }

    });
});

module.exports = router;
