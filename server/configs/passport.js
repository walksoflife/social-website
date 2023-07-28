import dotenv from "dotenv";
dotenv.config();
import FacebookStrategy from "passport-facebook";
import passport from "passport";
import User from "../models/userModel.js";

passport.use(
  new FacebookStrategy.Strategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      /* ========= DATABASE CHECK PRE EXIST AND INSERT QUERY: START =========  */
      // check if user id already inserted
      //   User.findOne({ userId: profile.id }).then((existingUser) => {
      //     if (existingUser) {
      //       done(null, existingUser);
      //     } else {
      //       // new user case
      //       // insert new user id
      //       new User({
      //         userId: profile.id,
      //         username: profile.displayName,
      //         picture: profile._json.picture,
      //       })
      //         .save()
      //         .then((user) => {
      //           done(null, user);
      //         });
      //     }
      //   });
      /* ========= DATABASE CHECK PRE EXIST AND INSERT QUERY: END =========  */
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //   User.findById(id).then((user) => {
  done(null, id);
  //   });
});
