const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop.controller");

router.get("/products", shopController.AllProductsWithTags);
router.get("/api", shopController.helloFun);
router.post("/login", shopController.login);
router.post("/register", shopController.register);


module.exports = router;
