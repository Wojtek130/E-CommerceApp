const { DataTypes } = require('sequelize')

module.exports = function (sequelize) {
    
    const FullOrder = sequelize.define('FullOrder', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        completed: { type: DataTypes.BOOLEAN, defaultvalue: false, notEmpty: true },
    })
    FullOrder.attributes = FullOrder.rawAttributes;
    return FullOrder;
};
