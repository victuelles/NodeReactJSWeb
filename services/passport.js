const passport = require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys= require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
    //user.id -> mongo record _id/user model instance id
   done(null,user.id);

});
//id = mongo record id
passport.deserializeUser((id, done)=>{
    User.findById(id)
    .then(user=>{
        done(null,user);
    });
});
/*
passport.use(
    new GoogleStrategy({
        clientID : keys.googleClientID,
        clientSecret : keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },(accessToken,refreshToken,profile,done)=>{
        //check if  profile.id exist, async call - chain a promise
        User.findOne({googleId:profile.id})
         .then((existingUser)=>{
             if (existingUser) {
                //we already have a record with the given profile ID
                //two parameters. error =null, record=existingUser
                done(null,existingUser);
             }else{
                //we dont have a user record, create one, async call
                new User({googleId:profile.id})
                .save()
                .then((newUser)=>{done(null,newUser)});
             }
         });
    
        
    })
);
*/
//refactored using async await
passport.use(
    new GoogleStrategy({
        clientID : keys.googleClientID,
        clientSecret : keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken,refreshToken,profile,done)=>{
        //check if  profile.id exist, async call - chain a promise
       const existingUser= await User.findOne({googleId:profile.id})
         
        if (existingUser) {
        //we already have a record with the given profile ID
        //two parameters. error =null, record=existingUser
            done(null,existingUser);
        }else{
        //we dont have a user record, create one, async call
            const user= await  new User({googleId:profile.id}).save()

            done(null,user)
        }
    }
    )
)