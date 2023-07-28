const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = require("./index");
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const User = require("../models/userModel");

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
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
  done(null, user);
  //   });
});
