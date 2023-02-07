const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');
const sequelize = require("../models");
AdminBro.registerAdapter(AdminBroSequelize);

const express = require('express');

const adminBro = new AdminBro({
  databases: [sequelize],
  rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro);


module.exports = router;

