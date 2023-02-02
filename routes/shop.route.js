const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

router.get("/api", shopController.helloFun);


module.exports = router;