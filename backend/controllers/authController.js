import User from "../models/strutturaUser.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const register = async (req, res) =>{
 const user = await User.findOne({email: req.body.email})
 if (user) return res.status(500).send("email usata")

const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
    verifiedAt: new Date(),
});
 const userCreated = await newUser.save();
 res.send(userCreated)

}

export const login = async (req, res) =>{
 const user = await User.findOne({email: req.body.email})
 if(!user) return res.status(401).send("credenziali non valide")
 if (!await bcrypt.compare(req.body.password, user.password)) {
    return res.status(401).send("credenziali non valide")
 }
 jwt.sign(
    {userid: user.id},
     process.env.JWT_SECRET,
 {
    expiresIn: "1h"
},
(err, jwtToken) =>{
    if (err) return res.status(500).send()
        return res.send({
    token:jwtToken,
    })
}
);

}
 


export const logout = (req, res) =>{}

export const me = async (req, res) =>{
return res.send(req.loggedUser)
}

export const callbackGoogle = (req, res) =>{
//qui facciamo il redirect al frontend passandogli il jwt creato in passport
res.redirect(`${process.env.FRONTEND_URL}/login?token=${req.user.jwtToken}`)
}