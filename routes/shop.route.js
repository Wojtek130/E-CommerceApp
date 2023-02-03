const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

router.get("/products", shopController.AllProductsWithTags);
router.get("/api", shopController.helloFun);



module.exports = router;