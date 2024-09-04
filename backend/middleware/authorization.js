import jwt from "jsonwebtoken"
import User from "../models/strutturaUser.js"


export default (req, res, next) =>{
if (!req.headers.authorization) return res.status(401).send()
    const parts = req.headers.authorization.split(' ')
if (parts.length != 2) return res.status(401).send()
    if( parts[0] != "Bearer") return res.status(401).send()

        const jwtToken = parts[1]

        //verificare la firma del token
        jwt.verify(jwtToken, process.env.JWT_SECRET, async (err, payload)=>{
            if (err) return res.status(401).send()

        const user = await User.findById(payload.userid)
        if (!user)  return res.status(401).send()

        req.loggedUser = user ;
        next()
        })
}