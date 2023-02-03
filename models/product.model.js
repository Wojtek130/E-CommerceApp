const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const Product = sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      notEmpty: true,
    },
    isFruit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      notEmpty: true,
    },
    photoPath: {
      type: DataTypes.STRING,
    },
  });
  Product.attributes = Product.rawAttributes;
  Product.associate = function (models) {
    Product.belongsToMany(models.Tag, {
      through: models.ProductTag,
      foreignKey: "ProductId",
      otherKey: "TagId",
    });
  };
  return Product;
};
