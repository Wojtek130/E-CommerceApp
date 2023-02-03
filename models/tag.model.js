const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const Tag = sequelize.define("Tag", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  });
  Tag.attributes = Tag.rawAttributes;
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Product, {
      through: models.ProductTag,
      foreignKey: "TagId",
      otherKey: "ProductId",
    });
  };
  return Tag;
};
