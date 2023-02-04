const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop.controller");
const auth = require("../middlewares/auth.middleware");

router.get("/products", shopController.AllProductsWithTags);
router.get("/api", shopController.helloFun);
router.post("/login", shopController.login);
router.post("/register", shopController.register);
router.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });

module.exports = router;
