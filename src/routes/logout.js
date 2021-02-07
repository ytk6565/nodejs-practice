const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("logout", { title: "Logout" });
});

router.post("/", (req, res) => {
  res.json({ message: "Logout!" });
});

module.exports = router;
