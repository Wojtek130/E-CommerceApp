const { DataTypes } = require("sequelize");
const Product = require("../models/product.model");
const Tag = require("../models/tag.model");

module.exports = function (sequelize) {
  const ProductTag = sequelize.define("ProductTag", {
    ProductId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product, 
        key: "id",
      },
    },
    TagId: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag, 
        key: "id",
      },
    },
  });
  ProductTag.attributes = ProductTag.rawAttributes;
  return ProductTag;
};
