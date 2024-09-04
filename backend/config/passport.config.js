import GoogleStrategy from "passport-google-oauth20"
import User from "../models/strutturaUser.js";
import jwt from "jsonwebtoken"
import "dotenv/config";

const googleStrategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.HOST}:${process.env.PORT}${process.env.GOOGLE_CALLBACK}`,
},
async function(accessToken, refreshToken, profile, passportNext) {

   /* {
        _json:{
            given_name:pippo,
            family_name popi,
            email:aahha@ahah,
            sub:12344455
        }
    }*/

        const { given_name:firstName ,family_name: lastName , email,  sub:googleId} = profile._json
// NEL DB CECCHIAMO L UTENTE 
let user = await User.findOne({googleId})
//SE NON C è LO CREIAMO 
if(!user) {
    const newUser= new User({
        googleId,
        firstName,
        lastName,
        email,
    })
     user =  await newUser.save()
}


jwt.sign(
    {userid: user.id},
     process.env.JWT_SECRET,
 {
    expiresIn: "1h"
},
(err, jwtToken) =>{
    if (err) return res.status(500).send()

        //CHIAMIAMO IL PROSSIMO MIDDLEWARE di passport
        return passportNext(null, {jwtToken} )
    })
}
);

export default GoogleStrategy