const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("login", { title: "Login" });
});

router.post("/", (req, res) => {
  res.json({ message: "Login!" });
});

module.exports = router;
