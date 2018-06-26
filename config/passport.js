const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const cnfig = require('./database');

const User = require('../models/reguser');


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//opts.jwtFromRequest = ExtractJwt.fromAuthHeader();

opts.secretOrKey = cnfig.secret;
//opts.issuer = 'accounts.examplesoft.com';
//opts.audience = 'yoursite.net';

module.exports = function(passport){
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findUserbyID({id: jwt_payload._doc._id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                //done(null, user);
                return done(null, user);
            } else {
                return done(null, false);
                //done(null, false);
                // or you could create a new account
            }
        });
    }));
}
