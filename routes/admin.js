const express = require('express');
const router = express.Router();

/**
 * reqiures reguser.js from models to insert the
 * data(responded to localhost/user/register) to db
**/
const Admin = require('../models/admin'); 

const jwt = require('jsonwebtoken');

const cnfig = require('../config/database');

const passport = require('passport');

router.post("/register",function (req,res){
    res.send("hello User..");
    console.log(req.body);

    const newregAdmn=new Admin({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        password:req.body.password,
        serialkey:req.body.serialkey
    });
    
    Admin.registerAdmin(newregAdmn, function(err,user){
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

router.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const serialkey = req.body.serialkey;

    Admin.findadmnUsername(username, function(err, admn){
        if(err) throw err;

        if(admn){
            //console.log('Admin');
            //console.log('Admin: '+admn);

            Admin.logcheckingPwd(password,admn.password, function(err,match1){
                if(err) throw err;
                
                if (match1) {
                    //console.log("Admin entered pwd coorectly..");
                    Admin.logcheckingSer(serialkey,admn.serialkey, function(err,match2){
                        if(err) throw err;

                        if(match2){

                            var admn_dtset = {
                                _id: admn._id,
                                firstname: admn.firstname,
                                lastname: admn.lastname,
                                username: admn.username,
                                password: admn.password,
                                serialkey: admn.serialkey
                                
                              //  __v:user.__v
                            }

                            console.log("User entered password, username and serial no correctly..");
                            // const token = jwt.sign(user, cnfig.secret, { expiresIn: "2 days" });
                            const token2 = jwt.sign(admn_dtset, cnfig.secret, { expiresIn: "1 day" });
                            
                            // const token = jwt.sign(user, cnfig.secret);
                            //console.log(user);
                             
                            console.log(admn_dtset);
                            console.log("");
         
                            console.log("Admin token : "+token2);
                            res.json({
                                state:true,
                                token:token2,
                                Admin: {
                                    id:admn._id,
                                    fname:admn.firstname,
                                    lname:admn.lastname,
                                    username:admn.username,
                                    serialkey:admn.serialkey,
                                    
                                     //__v:user.__v
                                 }
                             });

                        }else{
                            res.json({
                                state: false,
                                
                                "msg":"User entered wrong serial.."
                            });
                        }
                    });
                } else if (!match1) {
                    console.log("Admin entered pwd wrong..");
                }
                
            });
        }else{
            console.log('Admin not found');
        }
    });

});

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


router.get("/",function (req,res){
    res.send("hello Admin..");
});

module.exports = router;