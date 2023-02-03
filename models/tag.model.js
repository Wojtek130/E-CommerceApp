const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const Tag = sequelize.define("Tag", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  });
  Tag.attributes = Tag.rawAttributes;

  return Tag;
};
