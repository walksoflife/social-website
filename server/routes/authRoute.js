const express = require("express");
const router = express.Router();
const passport = require("passport");
const { register, login, logout } = require("../controllers/authController");

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

module.exports = router;
