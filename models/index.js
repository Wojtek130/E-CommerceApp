"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
require("dotenv").config();
const db = {};

const mode = process.env.MODE || "development";
const dialect = process.env.DB_DIAL || "postgres";
const database = process.env.DB_DATABASE || "db";
const username = process.env.DB_USERNAME || "root";
const password = process.env.DB_PASSWORD || "root";
const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || "5432";

const connectionObject = {
  host: host,
  port: port,
  dialect: dialect,
};

const sequelize = new Sequelize(database, username, password, connectionObject);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.User = require("./user.model")(sequelize, Sequelize);
db.Product = require("./product.model")(sequelize, Sequelize);
db.FullOrder = require("./fullOrder.model")(sequelize, Sequelize);
db.SingleOrder = require("./singleOrder.model")(sequelize, Sequelize);
db.Tag = require("./tag.model")(sequelize, Sequelize);
db.ProductTag = require("./productTag.model")(sequelize, Sequelize);

db.FullOrder.hasMany(db.SingleOrder);
db.SingleOrder.belongsTo(db.FullOrder);

db.User.hasMany(db.FullOrder);
db.FullOrder.belongsTo(db.User);

db.Product.belongsToMany(db.Tag, { through: db.ProductTag });
db.Tag.belongsToMany(db.Product, { through: db.ProductTag });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
