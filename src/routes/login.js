const express = require("express");
const router = express.Router();

const passport = require("../middleware/auth");

router.get("/", function (req, res, next) {
  const errorMessage = req.flash('error').join('<br>');
  res.render("login", { title: "Login", errorMessage });
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/user",
    failureRedirect: "/login",
    failureFlash: true,
    badRequestMessage: "「メールアドレス」と「パスワード」は必須入力です。",
  })
);

module.exports = router;
