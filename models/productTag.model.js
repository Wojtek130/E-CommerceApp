const { DataTypes } = require("sequelize");
const Product = require("../models/product.model");
const Tag = require("../models/tag.model");

module.exports = function (sequelize) {
  const ProductTag = sequelize.define("ProductTag", {
    ProductId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product, // 'Movies' would also work
        key: "id",
      },
    },
    TagId: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag, // 'Actors' would also work
        key: "id",
      },
    },
  });
  ProductTag.attributes = ProductTag.rawAttributes;
  // ProductTag.associate = function (models) {
  //   ProductTag.belongsTo(models.Product);
  //   ProductTag.belongsTo(models.Tag);
  // };
  return ProductTag;
};
