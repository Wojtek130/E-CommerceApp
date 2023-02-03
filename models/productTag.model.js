const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const ProductTag = sequelize.define("ProductTag", {});
  ProductTag.attributes = ProductTag.rawAttributes;

  return ProductTag;
};
