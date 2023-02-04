const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop.controller");
const loginController = require("../controllers/login.controller");

const auth = require("../middlewares/auth.middleware");

router.get("/products", shopController.AllProductsWithTags);
router.get("/api", shopController.helloFun);
router.post("/login", loginController.login);
router.post("/register", loginController.register);
router.post("/logout", auth, loginController.logout);

router.post("/welcome", auth, (req, res) => {
  return res.json({ user: { id: req.userId, username: req.userUsername } });
});

module.exports = router;
