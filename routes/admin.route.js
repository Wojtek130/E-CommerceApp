const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');
const express = require("express");
const sequelize = require("../models");
const auth = require("../middlewares/authentication.middleware");

AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
  databases: [sequelize],
  rootPath: '/admin',
})
let router = express.Router();
router = AdminBroExpress.buildRouter(adminBro);


module.exports = router;

