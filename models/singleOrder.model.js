const {DataTypes} = require('sequelize')

module.exports = function (sequelize) {
    
    const SingleOrder = sequelize.define('SingleOrder', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        productId: {type: DataTypes.INTEGER, allowNull: false},
        quantity: {type: DataTypes.INTEGER, allowNull: false}
    })
    
    return SingleOrder;
};
