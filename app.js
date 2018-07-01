//to connect express framework
const express = require('express');

//to connect front end to this backend
const path = require('path');

//to connect db in monogodb use mongoose
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const cors = require('cors');

//Passport used as a Middleware to work with sessions in node and express
const passport = require('passport');

/**
 * functions for Admin and regUser specially written in routes/admin.js and regUser.js
 * So in order access them through app.js we need to require them
 **/
const admn = require('./routes/admin'); //functions of Admin
const rguser = require('./routes/reguser'); //fnctions of registered user
const book = require('./routes/bookstb');
const bkrqir = require('./routes/borrowing');
const brrwdet = require('./routes/borrwdet');
const rslvdbrw = require('./routes/resolvedborrow');
const subs = require('./routes/subject');

//use above classes we create this constants;;
const app = express();

const port = process.env.PORT ||3000;
app.use(cors());

//body parser is a middleware for pass data through url as a json in node.js
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//some parts in passport middleware we need
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//configuring db
const config = require('./config/database');
//connect and check db
const dbconnection = mongoose.connect(config.database);

if (dbconnection) {
    console.log('db connected successfully');
} else {
    console.log('db connection failed');    
}

//connected to frontend folder through this
app.use(express.static(path.join(__dirname,"angular-front")));

app.get("/",function (req,res){
    res.send("hello world");
});

app.use('/admin', admn); //if route is localhost:3000/admin
app.use('/user', rguser); //if route is localhost:3000/user
app.use('/books', book);
app.use('/brwbook', bkrqir);
app.use('/borrows', brrwdet);
app.use('/rslvdbrw',rslvdbrw);
app.use('/sub',subs);

app.listen(port, function(){
    console.log("listening to port "+port);
});