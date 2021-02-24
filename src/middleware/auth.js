const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models").User;

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    (email, password, done) => {
      User.findOne({
        where: {
          email: email,
        },
      })
        .then((user) => {
          const verifiedPassword = bcrypt.compareSync(
            password,
            user.password || ""
          );

          if (!user) {
            return done(null, false, {
              message: "ユーザーが見つかりませんでした。",
            });
          }

          if (user && !verifiedPassword) {
            return done(null, false, {
              message: "パスワードが一致しませんでした。",
            });
          }

          done(null, user); // success
        })
        .catch((error) => {
          console.log(error);
          // エラー処理

          return done(error);
        });
    }
  )
);

// Session
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
