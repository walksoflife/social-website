import express from "express";
const router = express.Router();
import passport from "passport";
import { register, login, logout } from "../controllers/authController.js";


router.post("/register", register);
router.post("/login", login);
router.delete("/logout", logout);

// facebook routes
router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    console.log("i am in fb callback");
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

export default router;
