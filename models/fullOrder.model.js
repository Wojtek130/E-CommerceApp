const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const FullOrder = sequelize.define("FullOrder", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  });
  FullOrder.attributes = FullOrder.rawAttributes;
  return FullOrder;
};
