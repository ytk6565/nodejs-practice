const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("logout", { title: "Logout" });
});

router.post("/", (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
