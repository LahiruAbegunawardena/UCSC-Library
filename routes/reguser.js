const express = require('express');
const router = express.Router();

/**
 * reqiures reguser.js from models to insert the
 * data(responded to localhost/user/register) to db
**/
const User = require('../models/reguser'); 

const jwt = require('jsonwebtoken');

const cnfig = require('../config/database');

const passport = require('passport');

router.post("/register",function (req,res){
    res.send("hello User..");
    console.log(req.body);

    const newregUser=new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        password:req.body.password,
        regno:req.body.regno,
        contact:req.body.contact,
        address:req.body.address
    });
    
    User.registerUser(newregUser, function(err,user){
        //mystate:boolean;
        if(err){
            console.log('data insertion failed..');            
            //mystate:true;
            //res.json({state:false,msg:"data insertion failed.."});
        }if(user){
            console.log('data inserted successfully..');
            
           // mystate:false;            
           // res.json({state:true,msg:"data inserted successfully.."});
        }
    });
    
});

router.post('/login',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    User.findbyUsername(username, function(err,user){
        if (err) throw err;
       
        if(!user){
            //console.log('Username is not valid..');
            res.json({state:false, msg:"No User found here"});
            
        }else{
            console.log(user);
            //res.json({state:true, msg:"User found.."});

            User.logcheckingPwd(password,user.password, function(err,match){
                if(err) throw err;

                var users_dtset = {
                    _id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username: user.username,
                    password: user.password,
                    regno: user.regno,
                    contact: user.contact,
                    address: user.address
                  //  __v:user.__v
                }
                
                if(match){
                    
                    console.log("User entered password and username correctly..");
                   // const token = jwt.sign(user, cnfig.secret, { expiresIn: "2 days" });
                   const token = jwt.sign(users_dtset, cnfig.secret, { expiresIn: "1 day" });
                   
                   // const token = jwt.sign(user, cnfig.secret);
                   //console.log(user);
                    
                    console.log(users_dtset);

                    console.log("User token : "+token);
                    res.json({
                        state:true,
                        token:token,
                        user:{
                            id:user._id,
                            fname:user.firstname,
                            lname:user.lastname,
                            username:user.username,
                            regno:user.regno,
                            contact:user.contact,
                            address:user.address
                            //__v:user.__v
                        }
                    });               
                }else{
                    console.log( {state:false} );
                }
                
            });
        }   
        
    });
    
});

/**
router.post('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        //console.log("Authentified");
        //console.log(res);
        res.json({
            "status":"Authentified.."
        });
        //res.json({user:req.user});
    }
    
);
**/

router.post('/profile', verifyToken, (req,res)=>{
    jwt.verify(req.token, cnfig.secret, function(err, myData){
        if(err){
            res.json({status:"Access denied"});
        }else{
            res.json({
                status:"Access granted",
                data:myData

            });
        }
    })
});

function verifyToken(req, res, next){
    if(typeof(req.headers['authorization'])!= 'undefined' && req.headers['authorization'] != 'undefined'){
        var userToken = req.headers['authorization'];
        //console.log(myToken);

        
        if(userToken != 'undefined'){
            req.token = userToken;
            next();
        }else{
            res.json({msg:"Unauthorized Request.."});
        }
    }else{
        res.json({msg:"Undefined Request.."});
    }
    //console.log();
    
   // console.log(userToken);
}

router.post("/show", function(req,res){

    User.findallUsers(function(err, usr){
        if(err) throw err;
        if(usr){
            //console.log(usr);
            //console.log("check pass");

            //return book;

            res.json({user_details : usr});
            
            //
        }if(!usr){
            console.log("check falls");

        }

    });
});

router.get("",function (req,res){
    res.send("hello User..");
});

module.exports = router;