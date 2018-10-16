const passport = require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys= require('../config/keys');

const User = mongoose.model('users')

passport.use(
    new GoogleStrategy({
        clientID : keys.googleClientID,
        clientSecret : keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },(accessToken,refreshToken,profile,done)=>{
        //check if  profile.id exist, async call - chain a promise
        User.findOne({googleId:profile.id})
         .then((existingUser)=>{
             if (existingUser) {
                //we already have a record with the given profile ID
             }else{
                //we dont have a user record, create one
                new User({googleId:profile.id}).save();
             }
         })

      
        
    })
);