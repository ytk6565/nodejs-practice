const express = require("express");
const router = express.Router();

const authMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    // ログインしてるかチェック
    next();
  } else {
    res.redirect(302, "/login");
  }
};

router.get("/", authMiddleware, function (req, res, next) {
  res.render("user", { username: "Username", email: "Email" });
});

module.exports = router;
