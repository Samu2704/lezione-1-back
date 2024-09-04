import express from "express"
import * as authController from "../controllers/authController.js"
import authorization from "../middleware/authorization.js";
import passport from "passport";

const authRoutes = express.Router();


authRoutes.post("/register", authController.register)
authRoutes.post("/login", authController.login)
authRoutes.post("/logout",authorization, authController.logout)
authRoutes.get("/me",authorization, authController.me)

authRoutes.get("/login-google", passport.authenticate("google", {scope:["profile", "email"]} )//ci direziona alla pag. di google
)
authRoutes.get(
    "/callback-google",
     passport.authenticate("google", {session:false}),
     authController.callbackGoogle
    )

export default authRoutes